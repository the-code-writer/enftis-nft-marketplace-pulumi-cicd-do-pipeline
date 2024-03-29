/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERCLogging,
  IERCLoggingInterface,
} from "../../../../contracts-v5/base/common/IERCLogging";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getERCMarketplaceLogging",
    outputs: [
      {
        components: [
          {
            internalType: "enum Enums.NFTMarketItemActivityType",
            name: "activityType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "fromAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "toAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Structs.NFTMarketItemActivity[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getERCTokenLogging",
    outputs: [
      {
        components: [
          {
            internalType: "enum Enums.TokenActivityType",
            name: "activityType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "fromAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "toAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Structs.TokenActivityItem[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "enum Enums.NFTMarketItemActivityType",
        name: "_type",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "logMarketplaceActivity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "enum Enums.TokenActivityType",
        name: "_type",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    name: "logTokenActivity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "enum Enums.NFTMarketItemActivityType",
            name: "activityType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "fromAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "toAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Structs.NFTMarketItemActivity",
        name: "_activity",
        type: "tuple",
      },
    ],
    name: "setERCMarketplaceLogging",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "enum Enums.TokenActivityType",
            name: "activityType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "fromAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "toAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct Structs.TokenActivityItem",
        name: "_activity",
        type: "tuple",
      },
    ],
    name: "setERCTokenLogging",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IERCLogging__factory {
  static readonly abi = _abi;
  static createInterface(): IERCLoggingInterface {
    return new Interface(_abi) as IERCLoggingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IERCLogging {
    return new Contract(address, _abi, runner) as unknown as IERCLogging;
  }
}
