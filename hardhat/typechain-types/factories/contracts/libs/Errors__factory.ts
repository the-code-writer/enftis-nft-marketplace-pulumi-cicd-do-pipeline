/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { Errors, ErrorsInterface } from "../../../contracts/libs/Errors";

const _abi = [
  {
    inputs: [
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "DisabledOption",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "maxValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "ExceededMaxValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "requiredRole",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "InsufficientPermissions",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "NoAdmins",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "NoMinters",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "NotApprovedOrOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "mintingFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "PriceBelowMintingFee",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "TokenDoesNotExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "tokenURI",
        type: "string",
      },
      {
        internalType: "bool",
        name: "tokenURIExists",
        type: "bool",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "TokenURIAlreadyExists",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "UnAuthorizedCaller",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "message",
        type: "bytes32",
      },
    ],
    name: "ZeroAddress",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212201e90f72e5bc265173855771789db64a26092e205d2a4ce0e6b9d02faaeee134f64736f6c63430008130033";

type ErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ErrorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Errors__factory extends ContractFactory {
  constructor(...args: ErrorsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Errors> {
    return super.deploy(overrides || {}) as Promise<Errors>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Errors {
    return super.attach(address) as Errors;
  }
  override connect(signer: Signer): Errors__factory {
    return super.connect(signer) as Errors__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ErrorsInterface {
    return new utils.Interface(_abi) as ErrorsInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Errors {
    return new Contract(address, _abi, signerOrProvider) as Errors;
  }
}
