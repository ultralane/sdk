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
} from "../../../../common";

export interface IMailboxInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "defaultHook"
      | "defaultIsm"
      | "delivered"
      | "dispatch(uint32,bytes32,bytes,bytes,address)"
      | "dispatch(uint32,bytes32,bytes,bytes)"
      | "dispatch(uint32,bytes32,bytes)"
      | "latestDispatchedId"
      | "localDomain"
      | "process"
      | "quoteDispatch(uint32,bytes32,bytes,bytes,address)"
      | "quoteDispatch(uint32,bytes32,bytes)"
      | "quoteDispatch(uint32,bytes32,bytes,bytes)"
      | "recipientIsm"
      | "requiredHook"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Dispatch" | "DispatchId" | "Process" | "ProcessId"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "defaultHook",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultIsm",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "delivered",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dispatch(uint32,bytes32,bytes,bytes,address)",
    values: [BigNumberish, BytesLike, BytesLike, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dispatch(uint32,bytes32,bytes,bytes)",
    values: [BigNumberish, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dispatch(uint32,bytes32,bytes)",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "latestDispatchedId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "localDomain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "process",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteDispatch(uint32,bytes32,bytes,bytes,address)",
    values: [BigNumberish, BytesLike, BytesLike, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteDispatch(uint32,bytes32,bytes)",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "quoteDispatch(uint32,bytes32,bytes,bytes)",
    values: [BigNumberish, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "recipientIsm",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requiredHook",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "defaultHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "defaultIsm", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delivered", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dispatch(uint32,bytes32,bytes,bytes,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dispatch(uint32,bytes32,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dispatch(uint32,bytes32,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestDispatchedId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "localDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "process", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "quoteDispatch(uint32,bytes32,bytes,bytes,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteDispatch(uint32,bytes32,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "quoteDispatch(uint32,bytes32,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recipientIsm",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requiredHook",
    data: BytesLike
  ): Result;
}

export namespace DispatchEvent {
  export type InputTuple = [
    sender: AddressLike,
    destination: BigNumberish,
    recipient: BytesLike,
    message: BytesLike
  ];
  export type OutputTuple = [
    sender: string,
    destination: bigint,
    recipient: string,
    message: string
  ];
  export interface OutputObject {
    sender: string;
    destination: bigint;
    recipient: string;
    message: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DispatchIdEvent {
  export type InputTuple = [messageId: BytesLike];
  export type OutputTuple = [messageId: string];
  export interface OutputObject {
    messageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProcessEvent {
  export type InputTuple = [
    origin: BigNumberish,
    sender: BytesLike,
    recipient: AddressLike
  ];
  export type OutputTuple = [origin: bigint, sender: string, recipient: string];
  export interface OutputObject {
    origin: bigint;
    sender: string;
    recipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ProcessIdEvent {
  export type InputTuple = [messageId: BytesLike];
  export type OutputTuple = [messageId: string];
  export interface OutputObject {
    messageId: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IMailbox extends BaseContract {
  connect(runner?: ContractRunner | null): IMailbox;
  waitForDeployment(): Promise<this>;

  interface: IMailboxInterface;

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

  defaultHook: TypedContractMethod<[], [string], "view">;

  defaultIsm: TypedContractMethod<[], [string], "view">;

  delivered: TypedContractMethod<[messageId: BytesLike], [boolean], "view">;

  "dispatch(uint32,bytes32,bytes,bytes,address)": TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      body: BytesLike,
      customHookMetadata: BytesLike,
      customHook: AddressLike
    ],
    [string],
    "payable"
  >;

  "dispatch(uint32,bytes32,bytes,bytes)": TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      body: BytesLike,
      defaultHookMetadata: BytesLike
    ],
    [string],
    "payable"
  >;

  "dispatch(uint32,bytes32,bytes)": TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      messageBody: BytesLike
    ],
    [string],
    "payable"
  >;

  latestDispatchedId: TypedContractMethod<[], [string], "view">;

  localDomain: TypedContractMethod<[], [bigint], "view">;

  process: TypedContractMethod<
    [metadata: BytesLike, message: BytesLike],
    [void],
    "payable"
  >;

  "quoteDispatch(uint32,bytes32,bytes,bytes,address)": TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      messageBody: BytesLike,
      customHookMetadata: BytesLike,
      customHook: AddressLike
    ],
    [bigint],
    "view"
  >;

  "quoteDispatch(uint32,bytes32,bytes)": TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      messageBody: BytesLike
    ],
    [bigint],
    "view"
  >;

  "quoteDispatch(uint32,bytes32,bytes,bytes)": TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      messageBody: BytesLike,
      defaultHookMetadata: BytesLike
    ],
    [bigint],
    "view"
  >;

  recipientIsm: TypedContractMethod<[recipient: AddressLike], [string], "view">;

  requiredHook: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "defaultHook"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "defaultIsm"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "delivered"
  ): TypedContractMethod<[messageId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "dispatch(uint32,bytes32,bytes,bytes,address)"
  ): TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      body: BytesLike,
      customHookMetadata: BytesLike,
      customHook: AddressLike
    ],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "dispatch(uint32,bytes32,bytes,bytes)"
  ): TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      body: BytesLike,
      defaultHookMetadata: BytesLike
    ],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "dispatch(uint32,bytes32,bytes)"
  ): TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      messageBody: BytesLike
    ],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "latestDispatchedId"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "localDomain"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "process"
  ): TypedContractMethod<
    [metadata: BytesLike, message: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "quoteDispatch(uint32,bytes32,bytes,bytes,address)"
  ): TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      messageBody: BytesLike,
      customHookMetadata: BytesLike,
      customHook: AddressLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "quoteDispatch(uint32,bytes32,bytes)"
  ): TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      messageBody: BytesLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "quoteDispatch(uint32,bytes32,bytes,bytes)"
  ): TypedContractMethod<
    [
      destinationDomain: BigNumberish,
      recipientAddress: BytesLike,
      messageBody: BytesLike,
      defaultHookMetadata: BytesLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "recipientIsm"
  ): TypedContractMethod<[recipient: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "requiredHook"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Dispatch"
  ): TypedContractEvent<
    DispatchEvent.InputTuple,
    DispatchEvent.OutputTuple,
    DispatchEvent.OutputObject
  >;
  getEvent(
    key: "DispatchId"
  ): TypedContractEvent<
    DispatchIdEvent.InputTuple,
    DispatchIdEvent.OutputTuple,
    DispatchIdEvent.OutputObject
  >;
  getEvent(
    key: "Process"
  ): TypedContractEvent<
    ProcessEvent.InputTuple,
    ProcessEvent.OutputTuple,
    ProcessEvent.OutputObject
  >;
  getEvent(
    key: "ProcessId"
  ): TypedContractEvent<
    ProcessIdEvent.InputTuple,
    ProcessIdEvent.OutputTuple,
    ProcessIdEvent.OutputObject
  >;

  filters: {
    "Dispatch(address,uint32,bytes32,bytes)": TypedContractEvent<
      DispatchEvent.InputTuple,
      DispatchEvent.OutputTuple,
      DispatchEvent.OutputObject
    >;
    Dispatch: TypedContractEvent<
      DispatchEvent.InputTuple,
      DispatchEvent.OutputTuple,
      DispatchEvent.OutputObject
    >;

    "DispatchId(bytes32)": TypedContractEvent<
      DispatchIdEvent.InputTuple,
      DispatchIdEvent.OutputTuple,
      DispatchIdEvent.OutputObject
    >;
    DispatchId: TypedContractEvent<
      DispatchIdEvent.InputTuple,
      DispatchIdEvent.OutputTuple,
      DispatchIdEvent.OutputObject
    >;

    "Process(uint32,bytes32,address)": TypedContractEvent<
      ProcessEvent.InputTuple,
      ProcessEvent.OutputTuple,
      ProcessEvent.OutputObject
    >;
    Process: TypedContractEvent<
      ProcessEvent.InputTuple,
      ProcessEvent.OutputTuple,
      ProcessEvent.OutputObject
    >;

    "ProcessId(bytes32)": TypedContractEvent<
      ProcessIdEvent.InputTuple,
      ProcessIdEvent.OutputTuple,
      ProcessIdEvent.OutputObject
    >;
    ProcessId: TypedContractEvent<
      ProcessIdEvent.InputTuple,
      ProcessIdEvent.OutputTuple,
      ProcessIdEvent.OutputObject
    >;
  };
}
