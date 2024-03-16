import { InputMap } from '@noir-lang/noir_js';

import input_json from '@ultralane/circuits/bin/input/target/input.json';

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
    public MERKLE_DEPTH = 32
  ) {
    if (pathElements.length !== MERKLE_DEPTH) {
      throw new Error(
        `Invalid path length: ${pathElements.length} !== ${MERKLE_DEPTH}`
      );
    }
  }

  static async circuit() {
    return circuit(input_json);
  }

  static async random(
    note?: Note,
    pathIndex?: Field,
    pathElements?: Field[],
    MERKLE_DEPTH = 32
  ) {
    pathElements =
      pathElements ?? new Array(MERKLE_DEPTH).fill(0).map(() => Field.random());
    return new Input(
      note ?? (await Note.random()),
      pathIndex ?? Field.random(),
      pathElements
    );
  }

  raw(): InputRaw {
    return {
      note: this.note.raw(),
      path_index: this.pathIndex.raw(),
      path_elements: this.pathElements.map((e) => e.raw()),
    };
  }
}
