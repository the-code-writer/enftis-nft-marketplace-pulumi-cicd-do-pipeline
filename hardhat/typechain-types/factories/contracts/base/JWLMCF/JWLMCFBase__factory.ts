/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  JWLMCFBase,
  JWLMCFBaseInterface,
} from "../../../../contracts/base/JWLMCF/JWLMCFBase";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IJWLX",
        name: "_jwlx",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dev",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_jwlrPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_multiplier",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "pid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "BONUS_MULTIPLIER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "contract IJWLX",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "autoCompound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dev",
        type: "address",
      },
    ],
    name: "changeDev",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IJWLX",
        name: "_lpToken",
        type: "address",
      },
    ],
    name: "checkPoolDuplicate",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dev",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "getPoolInfo",
    outputs: [
      {
        internalType: "address",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardTokenPerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "jwlrPerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "jwlx",
    outputs: [
      {
        internalType: "contract IJWLX",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IJWLX",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardTokenPerShare",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_withUpdate",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalAllocation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "multiplierNumber",
        type: "uint256",
      },
    ],
    name: "updateMultiplier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pendingReward",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260006007553480156200001657600080fd5b506040516200198b3803806200198b833981016040819052620000399162000201565b33806200006057604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6200006b8162000198565b506001808055600280546001600160a01b03199081166001600160a01b039889169081179092556003805482169789169790971790965560049485556008849055600992909255604080516080810182529283526103e86020840181815291840194855260006060850181815260058054958601815590915293517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0939096029283018054909716959097169490941790945591517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db1840155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db2830155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db39091015560075562000259565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620001fe57600080fd5b50565b600080600080600060a086880312156200021a57600080fd5b85516200022781620001e8565b60208701519095506200023a81620001e8565b6040870151606088015160809098015196999198509695945092505050565b61172280620002696000396000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c80637b0472f0116100ee57806391cca3db116100975780639e2c8a5b116100715780639e2c8a5b1461038c578063d4c21a291461039f578063f2fde38b146103a8578063fa2a5452146103bb57600080fd5b806391cca3db1461031f57806393f1a40b1461033257806398969e821461037957600080fd5b80638aa28550116100c85780638aa28550146102de5780638da5cb5b146102e75780638dbb1e3a1461030c57600080fd5b80637b0472f0146102b0578063821c0576146102c357806388a8c95c146102cb57600080fd5b806351eb05a61161015b578063630b5ba111610135578063630b5ba11461028457806364482f791461028c578063715018a61461029f57806379203dc4146102a757600080fd5b806351eb05a61461024b5780635312ea8e1461025e5780635ffe61461461027157600080fd5b80632f380b351161018c5780632f380b351461021c578063322d0d4a1461022f57806348cd4cb11461024257600080fd5b8063081e3eda146101b35780631526fe27146101ca5780631eaaa04514610207575b600080fd5b6005545b6040519081526020015b60405180910390f35b6101dd6101d8366004611522565b6103ce565b604080516001600160a01b03909516855260208501939093529183015260608201526080016101c1565b61021a610215366004611565565b610412565b005b6101dd61022a366004611522565b61055c565b61021a61023d3660046115a3565b610611565b6101b760085481565b61021a610259366004611522565b6106b5565b61021a61026c366004611522565b61091c565b61021a61027f366004611522565b610a1a565b61021a610a27565b61021a61029a3660046115c7565b610a46565b61021a610acd565b6101b760075481565b61021a6102be3660046115f3565b610ae1565b61021a610c9b565b61021a6102d93660046115a3565b610d58565b6101b760095481565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016101c1565b6101b761031a3660046115f3565b610de1565b6003546102f4906001600160a01b031681565b610364610340366004611615565b60066020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016101c1565b6101b7610387366004611615565b610df9565b61021a61039a3660046115f3565b610f51565b6101b760045481565b61021a6103b63660046115a3565b611144565b6002546102f4906001600160a01b031681565b600581815481106103de57600080fd5b600091825260209091206004909102018054600182015460028301546003909301546001600160a01b039092169350919084565b61041a611182565b801561042857610428610a27565b61043182610611565b6000600854431161044457600854610446565b435b9050610454600754856111af565b600755604080516080810182526001600160a01b0385811682526020820187815292820184815260006060840181815260058054600181018255925293517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06004909202918201805473ffffffffffffffffffffffffffffffffffffffff1916919094161790925592517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db182015591517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db2830155517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db3909101556105566111d7565b50505050565b6000806000806005858154811061057557610575611645565b6000918252602090912060049091020154600580546001600160a01b0390921691879081106105a6576105a6611645565b906000526020600020906004020160010154600587815481106105cb576105cb611645565b906000526020600020906004020160020154600588815481106105f0576105f0611645565b90600052602060002090600402016003015493509350935093509193509193565b60055460005b818110156106b057826001600160a01b03166005828154811061063c5761063c611645565b60009182526020909120600490910201546001600160a01b0316036106a85760405162461bcd60e51b815260206004820152601960248201527f544f4b454e5f504f4f4c5f414c52454144595f4558495354530000000000000060448201526064015b60405180910390fd5b600101610617565b505050565b600554819081106106fa5760405162461bcd60e51b815260206004820152600f60248201526e1253959053125117d413d3d317d251608a1b604482015260640161069f565b60006005838154811061070f5761070f611645565b906000526020600020906004020190508060020154431161072f57505050565b80546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a08231906024016020604051808303816000875af1158015610779573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079d919061165b565b9050806000036107b35750436002909101555050565b60006107c3836002015443610de1565b905060006107e5600454836107d8919061168a565b856001015460075461129b565b6002546003549192506001600160a01b03908116916340c10f19911661080c84600a6112de565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b15801561086a57600080fd5b505af115801561087e573d6000803e3d6000fd5b50506002546040516340c10f1960e01b81526001600160a01b03909116600482018190526024820185905292506340c10f199150604401600060405180830381600087803b1580156108cf57600080fd5b505af11580156108e3573d6000803e3d6000fd5b505050600385015461090591506108ff8364e8d4a5100061168a565b856112ee565b6003850155505043600290920191909155505b5050565b60006005828154811061093157610931611645565b6000918252602080832085845260068252604080852033808752935293849020600493840290910180548254955163423f6cef60e01b81529485019390935260248401949094529293506001600160a01b03169063423f6cef906044016020604051808303816000875af11580156109ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d1919061165b565b508054604051908152839033907fbb757047c2b5f3974fe26b7c10f732e7bce710b0952a71082702781e62ae05959060200160405180910390a360008082556001909101555050565b610a22611182565b600955565b60055460005b8181101561091857610a3e816106b5565b600101610a2d565b610a4e611182565b8015610a5c57610a5c610a27565b600060058481548110610a7157610a71611645565b90600052602060002090600402016001015490508260058581548110610a9957610a99611645565b90600052602060002090600402016001018190555082811461055657610ac260075482856112fe565b6007556105566111d7565b610ad5611182565b610adf6000611325565b565b60055482908110610b265760405162461bcd60e51b815260206004820152600f60248201526e1253959053125117d413d3d317d251608a1b604482015260640161069f565b600060058481548110610b3b57610b3b611645565b60009182526020808320878452600682526040808520338652909252922060049091029091019150610b6c856106b5565b805415610bb0576000610b9c826000015464e8d4a510008560030154610b9291906116b7565b8460010154611382565b90508015610bae57610bae33826113a9565b505b8315610c40578154604051632142170760e11b8152336004820152306024820152604481018690526001600160a01b03909116906342842e0e906064016020604051808303816000875af1158015610c0c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c30919061165b565b508054610c3d90856111af565b81555b610c588160000154836003015464e8d4a5100061129b565b6001820155604051848152859033907f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a159060200160405180910390a35050505050565b60006005600081548110610cb157610cb1611645565b600091825260208083203384527f54cdd369e4e8a8515e52ca72ec816c2101831ad1f18bf44102ed171459c9b4f890915260408320600490920201925090610cf8906106b5565b805415610d37576000610d1e826000015464e8d4a510008560030154610b9291906116b7565b90508015610d35578154610d3290826111af565b82555b505b610d4f8160000154836003015464e8d4a5100061129b565b60019091015550565b6003546001600160a01b03163314610db25760405162461bcd60e51b815260206004820152600e60248201527f4e4f545f415554484f52495a4544000000000000000000000000000000000000604482015260640161069f565b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000610df08284600954611420565b90505b92915050565b60008060058481548110610e0f57610e0f611645565b600091825260208083208784526006825260408085206001600160a01b038981168752935280852060049485029092016003810154815492516370a0823160e01b8152309681019690965290965091949193919216906370a08231906024016020604051808303816000875af1158015610e8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb1919061165b565b9050836002015443118015610ec557508015155b15610f1c576000610eda856002015443610de1565b90506000610efc60045483610eef919061168a565b876001015460075461129b565b9050610f17610f108264e8d4a5100061168a565b8486611447565b935050505b8254610f4690610f2d600a856116b7565b610f3c9064e8d4a5100061168a565b8560010154611382565b979650505050505050565b60055482908110610f965760405162461bcd60e51b815260206004820152600f60248201526e1253959053125117d413d3d317d251608a1b604482015260640161069f565b600060058481548110610fab57610fab611645565b6000918252602080832087845260068252604080852033865290925292208054600490920290920192508411156110245760405162461bcd60e51b815260206004820152601260248201527f494e53554646494349454e545f46554e44530000000000000000000000000000604482015260640161069f565b61102d856106b5565b600061104c826000015464e8d4a510008560030154610b9291906116b7565b9050801561105e5761105e33826113a9565b84156110e85781546110709086611457565b8255825460405163423f6cef60e01b8152336004820152602481018790526001600160a01b039091169063423f6cef906044016020604051808303816000875af11580156110c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110e6919061165b565b505b6111008260000154846003015464e8d4a5100061129b565b6001830155604051858152869033907ff279e6a1f5e320cca91135676d9cb6e44ca8a08c0b88342bcdb1144f6511b5689060200160405180910390a3505050505050565b61114c611182565b6001600160a01b03811661117657604051631e4fbdf760e01b81526000600482015260240161069f565b61117f81611325565b50565b6000546001600160a01b03163314610adf5760405163118cdaa760e01b815233600482015260240161069f565b6000806000806111bf8686611467565b9150915081156111cd578092505b5090949350505050565b600554600060015b8281101561122157600581815481106111fa576111fa611645565b9060005260206000209060040201600101548261121791906116d9565b91506001016111df565b508015610918576112336003826116b7565b9050611267600754600560008154811061124f5761124f611645565b906000526020600020906004020160010154836112fe565b60078190555080600560008154811061128257611282611645565b9060005260206000209060040201600101819055505050565b6000806000806112ab8787611490565b9150915081156112d3576000806112c283886114cd565b9150915081156112d0578094505b50505b509095945050505050565b6000806000806111bf86866114cd565b6000806000806112ab8787611467565b60008060008061130e8787611500565b9150915081156112d3576000806112c28388611467565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806000806113928787611490565b9150915081156112d3576000806112c28388611500565b600254604051637e13637760e01b81526001600160a01b0384811660048301526024820184905290911690637e136377906044016020604051808303816000875af11580156113fc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b0919061165b565b6000806000806114308787611500565b9150915081156112d3576000806112c28388611490565b60008060008061130e87876114cd565b6000806000806111bf8686611500565b60008083830184811015611482576000809250925050611489565b6001925090505b9250929050565b600080836000036114a75750600190506000611489565b838302838582816114ba576114ba6116a1565b0414611482576000809250925050611489565b600080826000036114e357506000905080611489565b60018385816114f4576114f46116a1565b04915091509250929050565b6000808383111561151657506000905080611489565b50600193919092039150565b60006020828403121561153457600080fd5b5035919050565b6001600160a01b038116811461117f57600080fd5b8035801515811461156057600080fd5b919050565b60008060006060848603121561157a57600080fd5b83359250602084013561158c8161153b565b915061159a60408501611550565b90509250925092565b6000602082840312156115b557600080fd5b81356115c08161153b565b9392505050565b6000806000606084860312156115dc57600080fd5b833592506020840135915061159a60408501611550565b6000806040838503121561160657600080fd5b50508035926020909101359150565b6000806040838503121561162857600080fd5b82359150602083013561163a8161153b565b809150509250929050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561166d57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610df357610df3611674565b634e487b7160e01b600052601260045260246000fd5b6000826116d457634e487b7160e01b600052601260045260246000fd5b500490565b80820180821115610df357610df361167456fea26469706673582212206ef2f67e588ecb4ccc9ef3574fbb35a229fc8e5a12da8359a2031fb0315d974664736f6c63430008160033";

type JWLMCFBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: JWLMCFBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class JWLMCFBase__factory extends ContractFactory {
  constructor(...args: JWLMCFBaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _jwlx: AddressLike,
    _dev: AddressLike,
    _jwlrPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _multiplier: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _jwlx,
      _dev,
      _jwlrPerBlock,
      _startBlock,
      _multiplier,
      overrides || {}
    );
  }
  override deploy(
    _jwlx: AddressLike,
    _dev: AddressLike,
    _jwlrPerBlock: BigNumberish,
    _startBlock: BigNumberish,
    _multiplier: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _jwlx,
      _dev,
      _jwlrPerBlock,
      _startBlock,
      _multiplier,
      overrides || {}
    ) as Promise<
      JWLMCFBase & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): JWLMCFBase__factory {
    return super.connect(runner) as JWLMCFBase__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): JWLMCFBaseInterface {
    return new Interface(_abi) as JWLMCFBaseInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): JWLMCFBase {
    return new Contract(address, _abi, runner) as unknown as JWLMCFBase;
  }
}