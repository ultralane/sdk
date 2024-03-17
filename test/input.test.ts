import { Field, Input } from '../src';
import 'jest';

describe('Input', () => {
  // skipped because Input.random does not satisfy the constraint `assert_root`
  it.skip('raw', async () => {
    // this does not work anymore because input circuit was changed
    const input = await Input.random();
    const noir = await Input.circuit();
    const _ext_address = Field.random();
    const res = await noir.execute({
      root: input.root.raw(),
      input: input.raw(),
      _ext_address: _ext_address.raw(),
    });
    const val = res.returnValue as string[];
    expect(val[0]).toEqual(input.note.amount.raw());
    expect(val[1]).toEqual(await input.note.nullifierHex(input.pathIndex));
    expect(val.length).toEqual(2);
  });
});
