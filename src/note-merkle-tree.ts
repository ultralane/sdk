import { BigNumberish } from 'ethers';

import { Field } from './field';
import { MerkleTree } from './merkle-tree';
import { Note } from './note';
import { Input } from './input';
import { KeyPair } from './keypair';
import { Transaction } from './transaction';

interface CreateTransactionArgs {
  inputNotes?: Note[];
  depositAmount: Field | BigNumberish;
  keypair?: KeyPair;
  updateTree: boolean;
  withdrawAddress?: Field;
}

export class NoteMerkleTree extends MerkleTree {
  constructor(
    public depth: number,
    public numInputs: number = 2,
    public numOutputs: number = 1
  ) {
    super(depth);
    this.insert(
      // Note.zero().commitment()
      Field.from(
        6693032976676388986107828574443457670072006098614160789085314534828627402874n
      )
    );
    if (this.numOutputs !== 1) {
      throw new Error('exactly 1 outputs are currently supported');
    }
  }

  toJson() {
    return {
      elements: this.elements.map((x) => x.hex()),
      depth: this.depth,
      numInputs: this.numInputs,
      numOutputs: this.numOutputs,
    };
  }

  static fromJson(json: any): NoteMerkleTree {
    let tree = new NoteMerkleTree(json.depth, json.numInputs, json.numOutputs);
    tree.elements = json.elements.map((x: string) => Field.from(x));
    return tree;
  }

  /**
   * Spend input notes and create new notes if necessary
   * Two source notes and one output note is currently supported
   */
  async createTransaction({
    inputNotes,
    depositAmount,
    keypair,
    updateTree,
    withdrawAddress,
  }: CreateTransactionArgs) {
    depositAmount = Field.from(depositAmount);
    inputNotes = inputNotes ?? [];
    keypair = keypair ?? (await KeyPair.random());
    withdrawAddress = withdrawAddress ?? Field.zero();

    let inputs: Input[] = [];
    let sum = Field.zero();
    for (let note of inputNotes) {
      const input = await this._createInput(note);
      inputs.push(input);
      sum = sum.add(input.note.amount);
    }
    for (let i = inputs.length; i < this.numInputs; i++) {
      inputs.push(await this._createInput(Note.zero()));
    }

    if (depositAmount.isNeg() && depositAmount.neg().gt(sum)) {
      throw new Error('Transaction amount exceeds the sum of input notes');
    }

    const note = new Note(sum.add(depositAmount), keypair, Field.from(0));

    const root = await this.calculateRoot();

    if (inputs.length !== 2) {
      throw new Error('exactly 2 inputs are supported');
    }

    if (updateTree) {
      this.insert(await note.commitment());
    }

    const transaction = new Transaction(
      this.depth,
      root,
      inputs,
      [note],
      depositAmount,
      withdrawAddress
    );
    return transaction;
  }

  async findNoteIndex(note: Note): Promise<number> {
    const commitment = await note.commitment();
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i].eq(commitment)) {
        return i;
      }
    }
    throw new Error(
      `Note not found from list of ${
        this.elements.length
      } notes: ${JSON.stringify(note.toString())}`
    );
  }

  async _createInput(note: Note) {
    const index = await this.findNoteIndex(note);
    return new Input(
      note,
      new Field(index),
      await this.merkleProof(index),
      this.depth
    );
  }
}
