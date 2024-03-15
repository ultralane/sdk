import { Field } from './field';
import { Note } from './note';

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
}
