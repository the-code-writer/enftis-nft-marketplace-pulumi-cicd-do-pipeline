/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Snippets,
  SnippetsInterface,
} from "../../../contracts/libs/Snippets";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_data",
        type: "bytes32",
      },
    ],
    name: "bytes32String",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "a",
        type: "string",
      },
      {
        internalType: "string",
        name: "b",
        type: "string",
      },
    ],
    name: "compareStrings",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getIPFSPrefix",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "what",
        type: "string",
      },
      {
        internalType: "string",
        name: "where",
        type: "string",
      },
    ],
    name: "stringContains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endIndex",
        type: "uint256",
      },
    ],
    name: "subString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "trim",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6108f761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c806374849394146100715780637966c4311461009a578063bed34bba146100ad578063d10c6b33146100d0578063e14c63f5146100fe578063ed63455c14610111575b600080fd5b61008461007f3660046104c2565b610124565b60405161009191906104ff565b60405180910390f35b6100846100a83660046105d4565b610285565b6100c06100bb366004610621565b610351565b6040519015158152602001610091565b6040517f66f0790b1cbe0dcac007f07341b00cafe2bda254914729058b5209e04b702afe8152602001610091565b61008461010c366004610684565b6103ab565b6100c061011f366004610621565b6103f7565b604080516020808252818301909252606091600091906020820181803683370190505090506000805b60208110156101d3576000610163826008610718565b61016e906002610813565b6101789087610718565b90506001600160f81b03198116156101c2578084848151811061019d5761019d610826565b60200101906001600160f81b031916908160001a905350826101be8161083c565b9350505b506101cc8161083c565b905061014d565b506000816001600160401b038111156101ee576101ee610532565b6040519080825280601f01601f191660200182016040528015610218576020820181803683370190505b50905060005b8281101561027c5783818151811061023857610238610826565b602001015160f81c60f81b82828151811061025557610255610826565b60200101906001600160f81b031916908160001a9053506102758161083c565b905061021e565b50949350505050565b60608360006102948585610855565b6001600160401b038111156102ab576102ab610532565b6040519080825280601f01601f1916602001820160405280156102d5576020820181803683370190505b509050845b84811015610347578281815181106102f4576102f4610826565b01602001516001600160f81b0319168261030e8884610855565b8151811061031e5761031e610826565b60200101906001600160f81b031916908160001a9053508061033f8161083c565b9150506102da565b5095945050505050565b6000816040516020016103649190610868565b604051602081830303815290604052805190602001208360405160200161038b9190610868565b604051602081830303815290604052805190602001201490505b92915050565b60606103b982848688610884565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509298975050505050505050565b8151815160009184918491111561040d57600080fd5b6000805b8351835161041f9190610855565b811161034757600160005b855181101561049e5785818151811061044557610445610826565b01602001516001600160f81b0319168561045f83866108ae565b8151811061046f5761046f610826565b01602001516001600160f81b0319161461048c576000915061049e565b806104968161083c565b91505061042a565b5080156104af576001925050610347565b50806104ba8161083c565b915050610411565b6000602082840312156104d457600080fd5b5035919050565b60005b838110156104f65781810151838201526020016104de565b50506000910152565b602081526000825180602084015261051e8160408501602087016104db565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261055957600080fd5b81356001600160401b038082111561057357610573610532565b604051601f8301601f19908116603f0116810190828211818310171561059b5761059b610532565b816040528381528660208588010111156105b457600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806000606084860312156105e957600080fd5b83356001600160401b038111156105ff57600080fd5b61060b86828701610548565b9660208601359650604090950135949350505050565b6000806040838503121561063457600080fd5b82356001600160401b038082111561064b57600080fd5b61065786838701610548565b9350602085013591508082111561066d57600080fd5b5061067a85828601610548565b9150509250929050565b6000806000806060858703121561069a57600080fd5b84356001600160401b03808211156106b157600080fd5b818701915087601f8301126106c557600080fd5b8135818111156106d457600080fd5b8860208285010111156106e657600080fd5b6020928301999098509187013596604001359550909350505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176103a5576103a5610702565b600181815b8085111561076a57816000190482111561075057610750610702565b8085161561075d57918102915b93841c9390800290610734565b509250929050565b600082610781575060016103a5565b8161078e575060006103a5565b81600181146107a457600281146107ae576107ca565b60019150506103a5565b60ff8411156107bf576107bf610702565b50506001821b6103a5565b5060208310610133831016604e8410600b84101617156107ed575081810a6103a5565b6107f7838361072f565b806000190482111561080b5761080b610702565b029392505050565b600061081f8383610772565b9392505050565b634e487b7160e01b600052603260045260246000fd5b60006001820161084e5761084e610702565b5060010190565b818103818111156103a5576103a5610702565b6000825161087a8184602087016104db565b9190910192915050565b6000808585111561089457600080fd5b838611156108a157600080fd5b5050820193919092039150565b808201808211156103a5576103a561070256fea264697066735822122058db88c27f2985f040a533556b814ea1a3b0833a783ad39f8a21d61d64975b6464736f6c63430008120033";

type SnippetsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SnippetsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Snippets__factory extends ContractFactory {
  constructor(...args: SnippetsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Snippets> {
    return super.deploy(overrides || {}) as Promise<Snippets>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Snippets {
    return super.attach(address) as Snippets;
  }
  override connect(signer: Signer): Snippets__factory {
    return super.connect(signer) as Snippets__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SnippetsInterface {
    return new utils.Interface(_abi) as SnippetsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Snippets {
    return new Contract(address, _abi, signerOrProvider) as Snippets;
  }
}
