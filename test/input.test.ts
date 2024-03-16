import { Input } from '../src';

describe('Input', () => {
  it('raw', async () => {
    const input = await Input.random();
    const noir = await Input.circuit();
    const res = await noir.execute({
      input: input.raw(),
    });
    expect(res.returnValue).toEqual(input.raw());
  });
});
