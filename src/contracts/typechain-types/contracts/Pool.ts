/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface PoolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "INIT_CODE_HASH"
      | "ROOT_HISTORY_SIZE"
      | "ZERO_COMMITMENT"
      | "ZERO_NULLIFIER"
      | "ZERO_ROOT"
      | "collect"
      | "compute"
      | "currentRootIndex"
      | "deposit"
      | "filledSubtrees"
      | "getLastRoot"
      | "hash2Verifier"
      | "isKnownRoot"
      | "isNoteSpent"
      | "levels"
      | "nextIndex"
      | "noteCommitments"
      | "noteVerifier"
      | "roots"
      | "splitJoinVerifier"
      | "transact"
      | "usdc"
      | "zeros"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "NewCommitment" | "NullifierSpent"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "INIT_CODE_HASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ROOT_HISTORY_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_COMMITMENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_NULLIFIER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ZERO_ROOT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "collect",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "compute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRootIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "filledSubtrees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hash2Verifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isKnownRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isNoteSpent",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "noteCommitments",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "noteVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "roots", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "splitJoinVerifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transact",
    values: [BytesLike, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "usdc", values?: undefined): string;
  encodeFunctionData(functionFragment: "zeros", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "INIT_CODE_HASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_HISTORY_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ZERO_COMMITMENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ZERO_NULLIFIER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ZERO_ROOT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "compute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentRootIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hash2Verifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isKnownRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isNoteSpent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "noteCommitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "noteVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "splitJoinVerifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transact", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "usdc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;
}

export namespace NewCommitmentEvent {
  export type InputTuple = [commitment: BigNumberish];
  export type OutputTuple = [commitment: bigint];
  export interface OutputObject {
    commitment: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NullifierSpentEvent {
  export type InputTuple = [commitment: BigNumberish];
  export type OutputTuple = [commitment: bigint];
  export interface OutputObject {
    commitment: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Pool extends BaseContract {
  connect(runner?: ContractRunner | null): Pool;
  waitForDeployment(): Promise<this>;

  interface: PoolInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  INIT_CODE_HASH: TypedContractMethod<[], [string], "view">;

  ROOT_HISTORY_SIZE: TypedContractMethod<[], [bigint], "view">;

  ZERO_COMMITMENT: TypedContractMethod<[], [bigint], "view">;

  ZERO_NULLIFIER: TypedContractMethod<[], [bigint], "view">;

  ZERO_ROOT: TypedContractMethod<[], [bigint], "view">;

  collect: TypedContractMethod<
    [
      token: AddressLike,
      balance: BigNumberish,
      salt: BigNumberish,
      stealthAddressOwnershipZkProof: BytesLike,
      noteCommitment: BigNumberish,
      noteCreationZkProof: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  compute: TypedContractMethod<[salt: BigNumberish], [string], "view">;

  currentRootIndex: TypedContractMethod<[], [bigint], "view">;

  deposit: TypedContractMethod<
    [amount: BigNumberish, noteCommitment: BigNumberish, proof: BytesLike],
    [void],
    "nonpayable"
  >;

  filledSubtrees: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  getLastRoot: TypedContractMethod<[], [bigint], "view">;

  hash2Verifier: TypedContractMethod<[], [string], "view">;

  isKnownRoot: TypedContractMethod<[root: BigNumberish], [boolean], "view">;

  isNoteSpent: TypedContractMethod<
    [nullifier: BigNumberish],
    [boolean],
    "view"
  >;

  levels: TypedContractMethod<[], [bigint], "view">;

  nextIndex: TypedContractMethod<[], [bigint], "view">;

  noteCommitments: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  noteVerifier: TypedContractMethod<[], [string], "view">;

  roots: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  splitJoinVerifier: TypedContractMethod<[], [string], "view">;

  transact: TypedContractMethod<
    [proof: BytesLike, publicInputs: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  usdc: TypedContractMethod<[], [string], "view">;

  zeros: TypedContractMethod<[i: BigNumberish], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "INIT_CODE_HASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ROOT_HISTORY_SIZE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ZERO_COMMITMENT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ZERO_NULLIFIER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ZERO_ROOT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "collect"
  ): TypedContractMethod<
    [
      token: AddressLike,
      balance: BigNumberish,
      salt: BigNumberish,
      stealthAddressOwnershipZkProof: BytesLike,
      noteCommitment: BigNumberish,
      noteCreationZkProof: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "compute"
  ): TypedContractMethod<[salt: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "currentRootIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [amount: BigNumberish, noteCommitment: BigNumberish, proof: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "filledSubtrees"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLastRoot"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "hash2Verifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isKnownRoot"
  ): TypedContractMethod<[root: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isNoteSpent"
  ): TypedContractMethod<[nullifier: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "levels"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nextIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "noteCommitments"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "noteVerifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "roots"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "splitJoinVerifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transact"
  ): TypedContractMethod<
    [proof: BytesLike, publicInputs: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "usdc"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "zeros"
  ): TypedContractMethod<[i: BigNumberish], [bigint], "view">;

  getEvent(
    key: "NewCommitment"
  ): TypedContractEvent<
    NewCommitmentEvent.InputTuple,
    NewCommitmentEvent.OutputTuple,
    NewCommitmentEvent.OutputObject
  >;
  getEvent(
    key: "NullifierSpent"
  ): TypedContractEvent<
    NullifierSpentEvent.InputTuple,
    NullifierSpentEvent.OutputTuple,
    NullifierSpentEvent.OutputObject
  >;

  filters: {
    "NewCommitment(uint256)": TypedContractEvent<
      NewCommitmentEvent.InputTuple,
      NewCommitmentEvent.OutputTuple,
      NewCommitmentEvent.OutputObject
    >;
    NewCommitment: TypedContractEvent<
      NewCommitmentEvent.InputTuple,
      NewCommitmentEvent.OutputTuple,
      NewCommitmentEvent.OutputObject
    >;

    "NullifierSpent(uint256)": TypedContractEvent<
      NullifierSpentEvent.InputTuple,
      NullifierSpentEvent.OutputTuple,
      NullifierSpentEvent.OutputObject
    >;
    NullifierSpent: TypedContractEvent<
      NullifierSpentEvent.InputTuple,
      NullifierSpentEvent.OutputTuple,
      NullifierSpentEvent.OutputObject
    >;
  };
}