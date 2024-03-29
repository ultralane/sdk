import { Field, hash, hash_json, logtime } from '../src';
import { circuit } from '../src';
import 'jest';

describe('poseidon2', () => {
  it('single', async () => {
    expect((await hash([Field.from(1)])).hex()).toEqual(
      '0x168758332d5b3e2d13be8048c8011b454590e06c44bce7f702f09103eef5a373'
    );
  });
  it('double', async () => {
    expect((await hash([Field.from(1), Field.from(1)])).hex()).toEqual(
      '0x1df6080e5bf5cefb3e40daf91cfcc5a267781505471aa058c0b205986774f978'
    );
  });
  it('tripple', async () => {
    expect(
      (await hash([Field.from(1), Field.from(1), Field.from(1)])).hex()
    ).toEqual(
      '0x27c9467e3a466973f72dfe56bdeb362fe3158acf84bb79f59a55d722199b8a47'
    );
  });

  it('prove single', async () => {
    // 869.85ms
    const noir = await circuit(hash_json(1));
    await logtime(
      noir.generateProof({
        input: [1],
      }),
      'prove single'
    );
  }, 50_000);
  it('prove double', async () => {
    // 2181.48ms
    const noir = await circuit(hash_json(2));
    await logtime(
      noir.generateProof({
        input: [1, 1],
      }),
      'prove double'
    );
  }, 50_000);
  it('prove tripple', async () => {
    // 2192.48ms
    const noir = await circuit(hash_json(3));
    await logtime(
      noir.generateProof({
        input: [1, 1, 1],
      }),
      'prove tripple'
    );
  }, 50_000);
});
