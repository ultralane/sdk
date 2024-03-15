import keypair_json from '@ultralane/circuits/bin/keypair/target/keypair.json';

import { circuit } from './utils';
import { Field } from './field';
import { hash } from './hash';

const _guard = {};

export class KeyPair {
  publicKey?: Field;
  privateKey?: Field;

  constructor(guard?: any) {
    if (guard !== _guard) {
      throw new Error(
        'please use KeyPair.newAsync(privateKey) to create a new keypair'
      );
    }
  }

  static async newAsync(privateKey: Field): Promise<KeyPair> {
    const keypair = new KeyPair(_guard);
    keypair.privateKey = privateKey;
    keypair.publicKey = await hash([privateKey]);
    return keypair;
  }

  static async random(): Promise<KeyPair> {
    return await KeyPair.newAsync(Field.random());
  }

  static zero(): KeyPair {
    const keypair = new KeyPair(_guard);
    keypair.privateKey = Field.zero();
    keypair.publicKey =
      Field.from(
        17668610518173883319035856328661308815933580113901672897605691629848497347345n
      ); // await hash([privateKey]);
    return keypair;
  }

  static async circuit() {
    return circuit(keypair_json);
  }

  async sign(message: Field[]): Promise<Field> {
    return hash([this.privateKey!, ...message]);
  }
}
