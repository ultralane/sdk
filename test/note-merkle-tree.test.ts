import { parseEther } from 'ethers';
import {
  Field,
  KeyPair,
  NoteMerkleTree,
  Note,
  Transaction,
  logtime,
} from '../src';
import 'jest';

// required, otherwise causes an error
globalThis.MessageChannel = require('worker_threads').MessageChannel;

describe('NoteMerkleTree', () => {
  it('works 16', async () => {
    const tree = new NoteMerkleTree(16);
    const keypair = await KeyPair.random();

    const note1 = new Note(Field.from(parseEther('1')), keypair);
    tree.insert(await note1.commitment());

    const note2 = new Note(Field.from(parseEther('2')), keypair);
    tree.insert(await note2.commitment());

    const note3 = new Note(Field.from(parseEther('3')), keypair);
    tree.insert(await note3.commitment());

    const tx = await tree.createTransaction({
      inputNotes: [note1, note2],
      depositAmount: Field.from(parseEther('1')).neg(),
      updateTree: true,
    });
    let proof = await logtime(tx.prove(), 'prove 16 depth');
    expect(await Transaction.verify(proof, 16)).toBeTruthy();
  }, 70_000);

  it('works 32', async () => {
    const tree = new NoteMerkleTree(32);
    const keypair = await KeyPair.random();

    const note1 = new Note(Field.from(parseEther('1')), keypair);
    tree.insert(await note1.commitment());

    const note2 = new Note(Field.from(parseEther('2')), keypair);
    tree.insert(await note2.commitment());

    const note3 = new Note(Field.from(parseEther('3')), keypair);
    tree.insert(await note3.commitment());

    const tx = await tree.createTransaction({
      inputNotes: [note1, note2],
      depositAmount: Field.from(parseEther('1')).neg(),
      updateTree: true,
    });
    let proof = await logtime(tx.prove(), 'prove 32 depth');
    expect(await Transaction.verify(proof, 32)).toBeTruthy();
  }, 70_000);
});
