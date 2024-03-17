import { Field, Note, KeyPair, logtime } from '../src';
import 'jest';

describe('Note', () => {
  it('should be correct', async () => {
    const keypair = await KeyPair.newAsync(new Field(1));
    const note = new Note(new Field(1), keypair, new Field(1));

    const commitment = await note.commitment();
    expect(commitment.hex()).toEqual(
      '0x0b16e8e4c071dd34ff149b7747652503ab7c44ec7140bc621e5706708000b623'
    );

    const nullifier = await note.nullifier(new Field(1));
    expect(nullifier.hex()).toEqual(
      '0x06a795918aa1960ac224faf31243196a74582e37d93516855191ab698de4e379'
    );
  });

  it('raw', async () => {
    const noir = await Note.circuit();

    const note = await Note.random();

    const res = await noir.execute({
      input: note.raw(),
    });

    expect(res.returnValue).toEqual(await note.publicInputs());
  });

  it('prove', async () => {
    const note = await Note.random();
    const proof = await note.prove();
    expect(proof.publicInputs[0]).toEqual(note.amount.raw());
    expect(proof.publicInputs[1]).toEqual((await note.commitment()).hex());
  });
});
