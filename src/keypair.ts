import { InputMap, ProofData } from '@noir-lang/noir_js';

import keypair_json from '@ultralane/circuits/bin/keypair/target/keypair.json';

import {
  getCreate2Address,
  AddressLike,
  resolveAddress,
  BytesLike,
} from 'ethers';

import { circuit } from './utils';
import { Field } from './field';
import { hash, hash_prove } from './hash';

export interface KeyPairRaw extends InputMap {
  public_key: string;
  private_key: string;
}

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

  async deriveStealthAddress(
    i: number,
    pool: AddressLike,
    initCodeHash: BytesLike
  ): Promise<{ salt: Field; address: string }> {
    const salt = await hash([this.privateKey!, Field.from(i)]);
    pool = await resolveAddress(pool);
    const address = getCreate2Address(pool, salt.hex(), initCodeHash);
    return { salt, address };
  }

  async proveStealthAddressOwnership(i: number): Promise<ProofData> {
    return hash_prove([this.privateKey!, Field.from(i)]);
  }

  raw(): KeyPairRaw {
    return {
      public_key: this.publicKey!.raw(),
      private_key: this.privateKey!.raw(),
    };
  }
}
