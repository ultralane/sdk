import { BigNumberish } from 'ethers';

import { Field } from './field';
import { hash } from './hash';
import { KeyPair } from './keypair';

export class Note {
  public amount: Field;

  constructor(
    amount: Field | BigNumberish,
    public keypair: KeyPair,
    public blinding: Field = Field.random()
  ) {
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
}
