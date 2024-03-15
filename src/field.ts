import {
  BigNumberish,
  toBigInt,
  toBeHex,
  randomBytes,
  zeroPadValue,
} from 'ethers';

const PRIME =
  0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001n;

export class Field {
  public value: bigint;
  constructor(_value: BigNumberish) {
    this.value = toBigInt(_value);
    if (this.value < 0n) {
      while (this.value < 0n) {
        this.value = this.value + PRIME;
      }
    }
  }

  static from(value: BigNumberish | Field): Field {
    if (value instanceof Field) {
      return value;
    }
    return new Field(value);
  }

  static zero() {
    return new Field(0n);
  }

  hex(): string {
    return zeroPadValue(toBeHex(this.value), 32);
  }

  add(other: Field): Field {
    return new Field((this.value + other.value) % PRIME);
  }

  sub(other: Field): Field {
    return new Field((this.value - other.value + PRIME) % PRIME);
  }

  mul(other: Field): Field {
    return new Field((this.value * other.value) % PRIME);
  }
}