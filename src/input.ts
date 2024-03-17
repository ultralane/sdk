import { InputMap } from '@noir-lang/noir_js';

import input_16_json from '@ultralane/circuits/bin/input_16/target/input_16.json';

import { Field, FieldRaw } from './field';
import { Note, NoteRaw } from './note';
import { circuit } from './utils';

export interface InputRaw extends InputMap {
  note: NoteRaw;
  path_index: FieldRaw;
  path_elements: FieldRaw[];
}

export class Input {
  constructor(
    public note: Note,
    public pathIndex: Field,
    public pathElements: Field[],
    public root: Field,
    public MERKLE_DEPTH = 16
  ) {
    if (pathElements.length !== MERKLE_DEPTH) {
      throw new Error(
        `Invalid path length: ${pathElements.length} !== ${MERKLE_DEPTH}`
      );
    }
  }

  static async circuit() {
    return circuit(input_16_json);
  }

  static async random(
    note?: Note,
    pathIndex?: Field,
    pathElements?: Field[],
    root?: Field,
    MERKLE_DEPTH = 16
  ) {
    pathElements =
      pathElements ?? new Array(MERKLE_DEPTH).fill(0).map(() => Field.random());
    return new Input(
      note ?? (await Note.random()),
      pathIndex ?? Field.random(),
      pathElements,
      root ?? Field.random()
    );
  }

  raw(): InputRaw {
    return {
      note: this.note.raw(),
      path_index: this.pathIndex.raw(),
      path_elements: this.pathElements.map((e) => e.raw()),
    };
  }

  async prove(extAddress: string) {
    const noir = await circuit(input_16_json);
    const proof = await noir.generateProof({
      root: this.root.raw(),
      input: this.raw(),
      _ext_address: Field.from(extAddress).raw(),
    });
    return proof;
  }
}
