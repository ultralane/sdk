import { Field } from './field';
import { Input } from './input';
import { Note } from './note';

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
}
