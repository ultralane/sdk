import { ProofData } from '@noir-lang/backend_barretenberg';
import split_join_16_json from '@ultralane/circuits/bin/split_join_16/target/split_join_16.json';
import split_join_32_json from '@ultralane/circuits/bin/split_join_32/target/split_join_32.json';

import { Field } from './field';
import { Input } from './input';
import { Note } from './note';
import { circuit } from './utils';

export class Transaction {
  constructor(
    public depth: number,
    public root: Field,
    public inputs: Input[],
    public outputs: Note[],
    public depositAmount: Field,
    public withdrawAddress: Field
  ) {
    if (inputs.length !== 2) {
      throw new Error('exactly two inputs are supported: ' + inputs.length);
    }
    if (outputs.length !== 1) {
      throw new Error('exactly single output is supported: ' + outputs.length);
    }
  }

  async publicData(): Promise<{
    root: Field;
    nullifiers: Field[];
    commitments: Field[];
    depositAmount: Field;
    withdrawAddress: Field;
  }> {
    let noir = await circuit(getJson(this.depth));
    const result = await noir.execute({
      root: this.root.hex(),
      inputs: this.inputs.map((x) => x.raw()),
      outputs: this.outputs.map((x) => x.raw()),
      deposit_amount: this.depositAmount.raw(),
      ext_data: this.withdrawAddress.raw(),
    });
    let [nullifiers, commitments] = result.returnValue as any as [
      string[],
      string[]
    ];
    return {
      root: this.root,
      nullifiers: nullifiers.map((x) => Field.from(x)),
      commitments: commitments.map((x) => Field.from(x)),
      depositAmount: this.depositAmount,
      withdrawAddress: this.withdrawAddress,
    };
  }

  async prove(): Promise<ProofData> {
    let noir = await circuit(getJson(this.depth));
    return await noir.generateProof({
      root: this.root.hex(),
      inputs: this.inputs.map((x) => x.raw()),
      outputs: this.outputs.map((x) => x.raw()),
      deposit_amount: this.depositAmount.raw(),
      ext_data: this.withdrawAddress.raw(),
    });
  }

  async verify(proofData: ProofData): Promise<boolean> {
    let noir = await circuit(getJson(this.depth));
    return noir.verifyProof(proofData);
  }

  static async verify(proofData: ProofData, depth: number): Promise<boolean> {
    let noir = await circuit(getJson(depth));
    return noir.verifyProof(proofData);
  }
}

function getJson(depth: number) {
  switch (depth) {
    case 16:
      return split_join_16_json;
    case 32:
      return split_join_32_json;
    default:
      throw new Error('depth not supported: ' + depth);
  }
}
