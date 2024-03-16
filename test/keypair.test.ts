import { KeyPair, KeyPairRaw } from '../src';

describe('KeyPair', () => {
  it('raw', async () => {
    const keypair = await KeyPair.random();
    const noir = await KeyPair.circuit();
    const res = await noir.execute({
      input: keypair.raw(),
    });
    const raw = res.returnValue as KeyPairRaw;
    expect(raw.private_key).toEqual(keypair.privateKey!.raw());
    expect(raw.public_key).toEqual(keypair.publicKey!.raw());
    expect(raw).toEqual(keypair.raw());
  });
});
