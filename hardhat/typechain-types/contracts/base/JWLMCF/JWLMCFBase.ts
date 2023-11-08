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
} from "../../../common";

export interface JWLMCFBaseInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BONUS_MULTIPLIER"
      | "add"
      | "autoCompound"
      | "changeDev"
      | "checkPoolDuplicate"
      | "dev"
      | "emergencyWithdraw"
      | "getMultiplier"
      | "getPoolInfo"
      | "jwlrPerBlock"
      | "jwlx"
      | "massUpdatePools"
      | "owner"
      | "pendingReward"
      | "poolInfo"
      | "poolLength"
      | "renounceOwnership"
      | "set"
      | "stake"
      | "startBlock"
      | "totalAllocation"
      | "transferOwnership"
      | "unstake"
      | "updateMultiplier"
      | "updatePool"
      | "userInfo"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Deposit"
      | "EmergencyWithdraw"
      | "OwnershipTransferred"
      | "Withdraw"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "BONUS_MULTIPLIER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "add",
    values: [BigNumberish, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "autoCompound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeDev",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "checkPoolDuplicate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "dev", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMultiplier",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "jwlrPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "jwlx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "massUpdatePools",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingReward",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "set",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalAllocation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unstake",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "BONUS_MULTIPLIER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "autoCompound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "changeDev", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkPoolDuplicate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "dev", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "jwlrPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "jwlx", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "massUpdatePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startBlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unstake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
}

export namespace DepositEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EmergencyWithdrawEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawEvent {
  export type InputTuple = [
    user: AddressLike,
    pid: BigNumberish,
    amount: BigNumberish
  ];
  export type OutputTuple = [user: string, pid: bigint, amount: bigint];
  export interface OutputObject {
    user: string;
    pid: bigint;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface JWLMCFBase extends BaseContract {
  connect(runner?: ContractRunner | null): JWLMCFBase;
  waitForDeployment(): Promise<this>;

  interface: JWLMCFBaseInterface;

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

  BONUS_MULTIPLIER: TypedContractMethod<[], [bigint], "view">;

  add: TypedContractMethod<
    [_allocPoint: BigNumberish, _lpToken: AddressLike, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;

  autoCompound: TypedContractMethod<[], [void], "nonpayable">;

  changeDev: TypedContractMethod<[_dev: AddressLike], [void], "nonpayable">;

  checkPoolDuplicate: TypedContractMethod<
    [_lpToken: AddressLike],
    [void],
    "view"
  >;

  dev: TypedContractMethod<[], [string], "view">;

  emergencyWithdraw: TypedContractMethod<
    [_pid: BigNumberish],
    [void],
    "nonpayable"
  >;

  getMultiplier: TypedContractMethod<
    [_from: BigNumberish, _to: BigNumberish],
    [bigint],
    "view"
  >;

  getPoolInfo: TypedContractMethod<
    [_pid: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        lpToken: string;
        allocPoint: bigint;
        lastRewardBlock: bigint;
        rewardTokenPerShare: bigint;
      }
    ],
    "view"
  >;

  jwlrPerBlock: TypedContractMethod<[], [bigint], "view">;

  jwlx: TypedContractMethod<[], [string], "view">;

  massUpdatePools: TypedContractMethod<[], [void], "nonpayable">;

  owner: TypedContractMethod<[], [string], "view">;

  pendingReward: TypedContractMethod<
    [_pid: BigNumberish, _user: AddressLike],
    [bigint],
    "nonpayable"
  >;

  poolInfo: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        lpToken: string;
        allocPoint: bigint;
        lastRewardBlock: bigint;
        rewardTokenPerShare: bigint;
      }
    ],
    "view"
  >;

  poolLength: TypedContractMethod<[], [bigint], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  set: TypedContractMethod<
    [_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;

  stake: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  startBlock: TypedContractMethod<[], [bigint], "view">;

  totalAllocation: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unstake: TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  updateMultiplier: TypedContractMethod<
    [multiplierNumber: BigNumberish],
    [void],
    "nonpayable"
  >;

  updatePool: TypedContractMethod<[_pid: BigNumberish], [void], "nonpayable">;

  userInfo: TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { amount: bigint; pendingReward: bigint }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BONUS_MULTIPLIER"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "add"
  ): TypedContractMethod<
    [_allocPoint: BigNumberish, _lpToken: AddressLike, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "autoCompound"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeDev"
  ): TypedContractMethod<[_dev: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkPoolDuplicate"
  ): TypedContractMethod<[_lpToken: AddressLike], [void], "view">;
  getFunction(
    nameOrSignature: "dev"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "emergencyWithdraw"
  ): TypedContractMethod<[_pid: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getMultiplier"
  ): TypedContractMethod<
    [_from: BigNumberish, _to: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPoolInfo"
  ): TypedContractMethod<
    [_pid: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        lpToken: string;
        allocPoint: bigint;
        lastRewardBlock: bigint;
        rewardTokenPerShare: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "jwlrPerBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "jwlx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "massUpdatePools"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingReward"
  ): TypedContractMethod<
    [_pid: BigNumberish, _user: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "poolInfo"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, bigint, bigint, bigint] & {
        lpToken: string;
        allocPoint: bigint;
        lastRewardBlock: bigint;
        rewardTokenPerShare: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "poolLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "set"
  ): TypedContractMethod<
    [_pid: BigNumberish, _allocPoint: BigNumberish, _withUpdate: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "startBlock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalAllocation"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unstake"
  ): TypedContractMethod<
    [_pid: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateMultiplier"
  ): TypedContractMethod<
    [multiplierNumber: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updatePool"
  ): TypedContractMethod<[_pid: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "userInfo"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: AddressLike],
    [[bigint, bigint] & { amount: bigint; pendingReward: bigint }],
    "view"
  >;

  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "EmergencyWithdraw"
  ): TypedContractEvent<
    EmergencyWithdrawEvent.InputTuple,
    EmergencyWithdrawEvent.OutputTuple,
    EmergencyWithdrawEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Withdraw"
  ): TypedContractEvent<
    WithdrawEvent.InputTuple,
    WithdrawEvent.OutputTuple,
    WithdrawEvent.OutputObject
  >;

  filters: {
    "Deposit(address,uint256,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "EmergencyWithdraw(address,uint256,uint256)": TypedContractEvent<
      EmergencyWithdrawEvent.InputTuple,
      EmergencyWithdrawEvent.OutputTuple,
      EmergencyWithdrawEvent.OutputObject
    >;
    EmergencyWithdraw: TypedContractEvent<
      EmergencyWithdrawEvent.InputTuple,
      EmergencyWithdrawEvent.OutputTuple,
      EmergencyWithdrawEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Withdraw(address,uint256,uint256)": TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
    Withdraw: TypedContractEvent<
      WithdrawEvent.InputTuple,
      WithdrawEvent.OutputTuple,
      WithdrawEvent.OutputObject
    >;
  };
}