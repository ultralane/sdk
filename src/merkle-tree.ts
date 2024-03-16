import { Noir, ProofData } from '@noir-lang/noir_js';

import compute_merkle_root from '@ultralane/circuits/bin/compute_merkle_root/target/compute_merkle_root.json';

import { circuit } from './utils';
import { hash } from './hash';
import { Field } from './field';

export class MerkleTree {
  public elements: Field[];
  private null_root_cache: {
    [null_leaf: string]: { [depth: number]: Field };
  } = {};

  constructor(public depth: number) {
    this.elements = [];
  }

  toJson() {
    return {
      elements: this.elements.map((x) => x.hex()),
      depth: this.depth,
    };
  }

  static fromJson(json: any): MerkleTree {
    let tree = new MerkleTree(json.depth);
    tree.elements = json.elements.map((x: string) => Field.from(x));
    return tree;
  }

  insert(value: Field) {
    if (this.elements.length >= 2 ** this.depth) {
      throw new Error('Merkle tree is full');
    }
    this.elements.push(value);
  }

  /**
   * Calculates the root of the merkle tree
   * @returns the root of the merkle tree
   */
  async calculateRoot(): Promise<Field> {
    if (this.elements.length === 0) {
      return await this._null_root(this.depth, Field.zero());
    }
    let _nodes = [...this.elements];
    for (let i = 0; i < this.depth; i++) {
      let upperNodes: Field[] = [];
      for (let j = 0; j < _nodes.length; j += 2) {
        const left = _nodes[j];
        let right: Field;
        if (j + 1 === _nodes.length) {
          right = await this._null_root(i, Field.zero());
        } else {
          right = _nodes[j + 1];
        }
        upperNodes.push(await hash([left, right]));
      }
      _nodes = upperNodes;
    }
    return _nodes[0];
  }

  async calculateRootHex(): Promise<string> {
    return (await this.calculateRoot()).hex();
  }

  /**
   * Generates a merkle proof for a given element
   * @param index Index of the element to generate the merkle proof for
   * @returns An array of the intermediate nodes of the merkle tree
   */
  async merkleProof(index: number): Promise<Field[]> {
    if (index > this.elements.length) {
      throw new Error('Index out of range');
    }
    let proof: Field[] = [];
    let _nodes = [...this.elements];
    for (let i = 0; i < this.depth; i++) {
      let upperNodes: Field[] = [];
      for (let j = 0; j < _nodes.length; j += 2) {
        // get the left side node
        const left = _nodes[j];
        // calculate the right side node
        let right: Field;
        if (j + 1 === _nodes.length) {
          right = await this._null_root(i, Field.zero());
        } else {
          right = _nodes[j + 1];
        }
        // include in the proof if this node is in the merkle path
        if (index === j || index === j + 1) {
          proof.push(index % 2 !== 0 ? left : right);
        }
        // generate the upper depth nodes
        upperNodes.push(await hash([left, right]));
      }
      index = Math.floor(index / 2);
      _nodes = upperNodes;
    }

    return proof;
  }

  /**
   * Generates a zk proof for a given element
   * @param index Index of the element to generate the zk proof for
   * @returns A zk proof for the element
   */
  async zkProof(index: number): Promise<ProofData> {
    const noir = await this._circuit();
    let proof = await noir.generateProof({
      leaf: (await this.elements[index]).hex(),
      index: index,
      hash_path: (await this.merkleProof(index)).map((x) => x.hex()),
    });
    if (!(await noir.verifyProof(proof))) {
      throw new Error('Proof is invalid');
    }
    return proof;
  }

  async _null_root(
    depth: number,
    null_leaf: Field = Field.zero()
  ): Promise<Field> {
    if (this.null_root_cache[null_leaf.hex()] === undefined) {
      this.null_root_cache[null_leaf.hex()] = {};
    }
    if (this.null_root_cache[null_leaf.hex()][depth] !== undefined) {
      return this.null_root_cache[null_leaf.hex()][depth];
    }
    if (depth == 0) {
      return null_leaf;
    }

    let node = await this._null_root(depth - 1, null_leaf);
    node = await hash([node, node]);
    this.null_root_cache[null_leaf.hex()][depth] = node;
    return node;
  }

  async _circuit(): Promise<Noir> {
    let json;
    switch (this.depth) {
      // case 3:
      //   json = merkle_3;
      //   break;
      // case 8:
      //   json = merkle_8;
      //   break;
      // case 16:
      //   json = merkle_16;
      //   break;
      case 32:
        json = compute_merkle_root;
        break;
      default:
        throw new Error('depth not supported: ' + this.depth);
    }
    return circuit(json);
  }
}
