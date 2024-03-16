import { MerkleTree, Field } from '../src';

describe('MerkleTree', () => {
  it('first', async () => {
    const tree = new MerkleTree(32);
    tree.insert(new Field(1n));
    tree.insert(new Field(2n));

    let root = await tree.calculateRoot();
    // const time = Date.now();
    let proof = await tree.zkProof(1);
    // console.log(Date.now() - time);

    expect(proof.publicInputs[0]).toEqual(root.hex());
  }, 70_000);

  it('second', async () => {
    const tree = new MerkleTree(32);
    tree.insert(new Field(1n));
    tree.insert(new Field(2n));

    let root = await tree.calculateRoot();
    // const time = Date.now();
    let proof = await tree.zkProof(1);
    // console.log(Date.now() - time);

    expect(proof.publicInputs[0]).toEqual(root.hex());
  }, 70_000);

  it.skip('merkleProof 3', async () => {
    let depth = 3;
    const tree = new MerkleTree(depth);
    tree.insert(new Field(1n));
    tree.insert(new Field(0n));
    tree.insert(new Field(0n));

    let merkleProof = await tree.merkleProof(0);
    expect(merkleProof.length).toEqual(depth);

    expect(merkleProof[0].hex()).toEqual(hex(0n));
    if (depth === 3) {
      expect(merkleProof[1].hex()).toEqual(
        hex(
          14744269619966411208579211824598458697587494354926760081771325075741142829156n
        )
      );
      expect(merkleProof[2].hex()).toEqual(
        hex(
          7423237065226347324353380772367382631490014989348495481811164164159255474657n
        )
      );
    }
  });

  it('merkleProof 32', async () => {
    let depth = 32;
    const tree = new MerkleTree(depth);
    tree.insert(new Field(1n));

    let merkleProof = await tree.merkleProof(0);
    expect(merkleProof.length).toEqual(depth);

    expect(merkleProof[0].hex()).toEqual(hex(0n));
  });

  it('json', async () => {
    const tree = new MerkleTree(32);
    tree.insert(Field.random());
    tree.insert(Field.random());
    tree.insert(Field.random());

    let tree2 = MerkleTree.fromJson(JSON.parse(JSON.stringify(tree.toJson())));
    expect(tree2.depth).toEqual(tree.depth);
    expect(tree2.elements.length).toEqual(tree.elements.length);

    for (let i = 0; i < tree.elements.length; i++) {
      expect(tree2.elements[i].hex()).toEqual(tree.elements[i].hex());
    }
  });
});

function hex(a: bigint) {
  return Field.from(a).hex();
}
