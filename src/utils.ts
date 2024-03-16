import { BarretenbergBackend } from '@noir-lang/backend_barretenberg';
import { Noir } from '@noir-lang/noir_js';

import { Field } from './field';

export async function circuit(json: any) {
  const backend = new BarretenbergBackend(json);
  const noir = new Noir(json, backend);
  await noir.init();
  return noir;
}

// export async function subtract(a: Field, b: Field) {
//   const noir = await circuit(subtract_json);
//   return await noir.execute({
//     a: a.hex(),
//     b: b.hex(),
//   });
// }

export abstract class Commitable {
  abstract commitment(): Promise<Field>;
}

export async function logtime<T>(
  f: (() => T) | (() => Promise<T>) | Promise<T> | T,
  s?: string
): Promise<T> {
  const start = Date.now();
  if (f instanceof Promise) {
    f = await f;
  }
  if (f instanceof Function) {
    f = await f();
  }
  const time = Date.now() - start;
  console.log(s, time, 'ms');
  return f as T;
}
