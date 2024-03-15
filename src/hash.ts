import { ProofData } from '@noir-lang/noir_js';

import hash_1 from '@ultralane/circuits/bin/hash_1/target/hash_1.json';
import hash_2 from '@ultralane/circuits/bin/hash_2/target/hash_2.json';
import hash_3 from '@ultralane/circuits/bin/hash_3/target/hash_3.json';

import { toBigInt } from 'ethers';

import { circuit } from './utils';
import { Field } from './field';

export async function hash(preimage: Field[]): Promise<Field> {
  const json = hash_json(preimage.length);
  const noir = await circuit(json);
  const result = await noir.execute({
    input: preimage.map((x) => x.hex()),
  });
  return new Field(toBigInt(result.returnValue as string));
}

export async function hash_prove(preimage: Field[]): Promise<ProofData> {
  const json = hash_json(preimage.length);
  const noir = await circuit(json);
  const proof = await noir.generateProof({
    input: preimage.map((x) => x.hex()),
  });
  return proof;
}

export function hash_json(length: number) {
  let json;
  switch (length) {
    case 1:
      json = hash_1;
      break;
    case 2:
      json = hash_2;
      break;
    case 3:
      json = hash_3;
      break;
    default:
      throw new Error('preimage length not supported: ' + length);
  }
  return json;
}
