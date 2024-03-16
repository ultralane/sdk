import { InputMap } from '@noir-lang/noir_js';
import note_json from '@ultralane/circuits/bin/note/target/note.json';

import { BigNumberish } from 'ethers';

import { Field } from './field';
import { hash } from './hash';
import { KeyPair, KeyPairRaw } from './keypair';
import { Commitable, circuit } from './utils';

export interface NoteRaw extends InputMap {
  amount: string;
  keypair: KeyPairRaw;
  blinding: string;
}

export class Note extends Commitable {
  public amount: Field;

  constructor(
    amount: Field | BigNumberish,
    public keypair: KeyPair,
    public blinding: Field = Field.random()
  ) {
    super();
    this.amount = Field.from(amount);
  }

  static async random(amount?: Field, keypair?: KeyPair, blinding?: Field) {
    return new Note(
      amount ?? Field.random(),
      keypair ?? (await KeyPair.random()),
      blinding ?? Field.random()
    );
  }

  static zero() {
    return new Note(Field.zero(), KeyPair.zero(), Field.zero());
  }

  static async circuit() {
    return circuit(note_json);
  }

  async commitment(): Promise<Field> {
    return hash([this.amount, this.keypair.publicKey!, this.blinding]);
  }

  async commitmentHex(): Promise<string> {
    return (await this.commitment()).hex();
  }

  async nullifier(merkle_index: Field): Promise<Field> {
    if (merkle_index === undefined) {
      throw new Error('merkle_index is required');
    }
    const commitment = await this.commitment();
    return hash([
      commitment,
      merkle_index,
      await this.keypair.sign([commitment, merkle_index]),
    ]);
  }

  async nullifierHex(merkle_index: Field): Promise<string> {
    return (await this.nullifier(merkle_index)).hex();
  }

  raw(): NoteRaw {
    return {
      amount: this.amount.raw(),
      keypair: this.keypair.raw(),
      blinding: this.blinding.raw(),
    };
  }

  static async from(json: NoteRaw) {
    return new Note(
      Field.from(json.amount),
      await KeyPair.newAsync(Field.from(json.keypair.private_key)),
      Field.from(json.blinding)
    );
  }

  async publicInputs(): Promise<string[]> {
    return [this.amount.raw(), await this.commitmentHex()];
  }

  async prove() {
    const noir = await circuit(note_json);
    const proof = await noir.generateProof({
      input: this.raw(),
    });
    return proof;
  }
}
