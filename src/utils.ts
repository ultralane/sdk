import { BarretenbergBackend } from '@noir-lang/backend_barretenberg';
import { Noir } from '@noir-lang/noir_js';

export async function circuit(json: any) {
  const backend = new BarretenbergBackend(json);
  const noir = new Noir(json, backend);
  await noir.init();
  return noir;
}
