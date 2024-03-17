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
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  MerkleTreeWithHistory,
  MerkleTreeWithHistoryInterface,
} from "../../contracts/MerkleTreeWithHistory";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_levels",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ROOT_HISTORY_SIZE",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRootIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
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
    name: "filledSubtrees",
    outputs: [
      {
        internalType: "Field",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastRoot",
    outputs: [
      {
        internalType: "Field",
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
        internalType: "Field",
        name: "root",
        type: "uint256",
      },
    ],
    name: "isKnownRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "levels",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
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
    name: "roots",
    outputs: [
      {
        internalType: "Field",
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
        name: "i",
        type: "uint256",
      },
    ],
    name: "zeros",
    outputs: [
      {
        internalType: "Field",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600380546001600160401b03191690553480156200002157600080fd5b50604051620011c4380380620011c483398101604081905262000044916200081a565b60008163ffffffff1611620000ac5760405162461bcd60e51b815260206004820152602360248201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60448201526265726f60e81b60648201526084015b60405180910390fd5b60208163ffffffff1611156200010f5760405162461bcd60e51b815260206004820152602160248201527f5f6c6576656c732073686f756c64206265206c657373207468616e20657120336044820152601960f91b6064820152608401620000a3565b6000805463ffffffff191663ffffffff83161781555b8163ffffffff168163ffffffff1610156200016e576200014b63ffffffff8216620001be565b63ffffffff82166000908152600160208190526040909120919091550162000125565b506200018c6200018060018362000849565b63ffffffff16620001be565b6000805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b55506200087c565b600081600003620001d157506000919050565b816001036200020157507f0b63a53787021a4a962a452c2921b3663aff1ffd8d5510540f8e659e782956f1919050565b816002036200023157507f0e34ac2c09f45a503d2908bcb12f1cbae5fa4065759c88d501c097506a8b2290919050565b816003036200026157507f21f9172d72fdcdafc312eee05cf5092980dda821da5b760a9fb8dbdf607c8a20919050565b816004036200029157507f2373ea368857ec7af97e7b470d705848e2bf93ed7bef142a490f2119bcf82d8e919050565b81600503620002c157507f120157cfaaa49ce3da30f8b47879114977c24b266d58b0ac18b325d878aafddf919050565b81600603620002f157507f01c28fe1059ae0237b72334700697bdf465e03df03986fe05200cadeda66bd76919050565b816007036200032157507f2d78ed82f93b61ba718b17c2dfe5b52375b4d37cbbed6f1fc98b47614b0cf21b919050565b816008036200035157507f067243231eddf4222f3911defbba7705aff06ed45960b27f6f91319196ef97e1919050565b816009036200038157507f1849b85f3c693693e732dfc4577217acc18295193bede09ce8b97ad910310972919050565b81600a03620003b157507f2a775ea761d20435b31fa2c33ff07663e24542ffb9e7b293dfce3042eb104686919050565b81600b03620003e157507f0f320b0703439a8114f81593de99cd0b8f3b9bf854601abb5b2ea0e8a3dda4a7919050565b81600c036200041157507f0d07f6e7a8a0e9199d6d92801fff867002ff5b4808962f9da2ba5ce1bdd26a73919050565b81600d036200044157507f1c4954081e324939350febc2b918a293ebcdaead01be95ec02fcbe8d2c1635d1919050565b81600e036200047157507f0197f2171ef99c2d053ee1fb5ff5ab288d56b9b41b4716c9214a4d97facc4c4a919050565b81600f03620004a157507f2b9cdd484c5ba1e4d6efcc3f18734b5ac4c4a0b9102e2aeb48521a661d3feee9919050565b81601003620004d157507f14f44d672eb357739e42463497f9fdac46623af863eea4d947ca00a497dcdeb3919050565b816011036200050157507f071d7627ae3b2eabda8a810227bf04206370ac78dbf6c372380182dbd3711fe3919050565b816012036200053157507f2fdc08d9fe075ac58cb8c00f98697861a13b3ab6f9d41a4e768f75e477475bf5919050565b816013036200056157507f20165fe405652104dceaeeca92950aa5adc571b8cafe192878cba58ff1be49c5919050565b816014036200059157507f1c8c3ca0b3a3d75850fcd4dc7bf1e3445cd0cfff3ca510630fd90b47e8a24755919050565b81601503620005c157507f1f0c1a8fb16b0d2ac9a146d7ae20d8d179695a92a79ed66fc45d9da4532459b3919050565b81601603620005f157507f038146ec5a2573e1c30d2fb32c66c8440f426fbd108082df41c7bebd1d521c30919050565b816017036200062157507f17d3d12b17fe762de4b835b2180b012e808816a7f2ff69ecb9d65188235d8fd4919050565b816018036200065157507f0e1a6b7d63a6e5a9e54e8f391dd4e9d49cdfedcbc87f02cd34d4641d2eb30491919050565b816019036200068157507f09244eec34977ff795fc41036996ce974136377f521ac8eb9e04642d204783d2919050565b81601a03620006b157507f1646d6f544ec36df9dc41f778a7ef1690a53c730b501471b6acd202194a7e8e9919050565b81601b03620006e157507f064769603ba3f6c41f664d266ecb9a3a0f6567cd3e48b40f34d4894ee4c361b3919050565b81601c036200071157507f1595bb3cd19f84619dc2e368175a88d8627a7439eda9397202cdb1167531fd3f919050565b81601d036200074157507f2a529be462b81ca30265b558763b1498289c9d88277ab14f0838cb1fce4b472c919050565b81601e036200077157507f0c08da612363088ad0bbc78abd233e8ace4c05a56fdabdd5e5e9b05e428bdaee919050565b81601f03620007a157507f14748d0241710ef47f54b931ac5a58082b1d56b0f0c30d55fb71a6e8c9a6be14919050565b81602003620007d157507f0b59baa35b9dc267744f0ccb4e3b0255c1fc512460d91130c6bc19fb2668568d919050565b60405162461bcd60e51b815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152606401620000a3565b6000602082840312156200082d57600080fd5b815163ffffffff811681146200084257600080fd5b9392505050565b63ffffffff8281168282160390808211156200087557634e487b7160e01b600052601160045260246000fd5b5092915050565b610938806200088c6000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063c2b40ae411610076578063e82955881161005b578063e829558814610154578063f178e47c14610167578063fc7e9c6f1461018757600080fd5b8063c2b40ae41461012c578063cd87a3b41461014c57600080fd5b80634ecf518b146100a857806390eeb02b146100d2578063a6232a93146100e2578063ba70f75714610105575b600080fd5b6000546100b89063ffffffff1681565b60405163ffffffff90911681526020015b60405180910390f35b6003546100b89063ffffffff1681565b6100f56100f0366004610884565b61019f565b60405190151581526020016100c9565b60035463ffffffff166000908152600260205260409020545b6040519081526020016100c9565b61011e61013a366004610884565b60026020526000908152604090205481565b6100b8601e81565b61011e610162366004610884565b610228565b61011e610175366004610884565b60016020526000908152604090205481565b6003546100b890640100000000900463ffffffff1681565b6000816101ae57506000919050565b60035463ffffffff16805b63ffffffff8082166000908152600260205260409020546101dd9186919061088016565b156101ec575060019392505050565b8063ffffffff166000036101fe5750601e5b806102088161089d565b9150508163ffffffff168163ffffffff16036101b9575060009392505050565b60008160000361023a57506000919050565b8160010361026957507f0b63a53787021a4a962a452c2921b3663aff1ffd8d5510540f8e659e782956f1919050565b8160020361029857507f0e34ac2c09f45a503d2908bcb12f1cbae5fa4065759c88d501c097506a8b2290919050565b816003036102c757507f21f9172d72fdcdafc312eee05cf5092980dda821da5b760a9fb8dbdf607c8a20919050565b816004036102f657507f2373ea368857ec7af97e7b470d705848e2bf93ed7bef142a490f2119bcf82d8e919050565b8160050361032557507f120157cfaaa49ce3da30f8b47879114977c24b266d58b0ac18b325d878aafddf919050565b8160060361035457507f01c28fe1059ae0237b72334700697bdf465e03df03986fe05200cadeda66bd76919050565b8160070361038357507f2d78ed82f93b61ba718b17c2dfe5b52375b4d37cbbed6f1fc98b47614b0cf21b919050565b816008036103b257507f067243231eddf4222f3911defbba7705aff06ed45960b27f6f91319196ef97e1919050565b816009036103e157507f1849b85f3c693693e732dfc4577217acc18295193bede09ce8b97ad910310972919050565b81600a0361041057507f2a775ea761d20435b31fa2c33ff07663e24542ffb9e7b293dfce3042eb104686919050565b81600b0361043f57507f0f320b0703439a8114f81593de99cd0b8f3b9bf854601abb5b2ea0e8a3dda4a7919050565b81600c0361046e57507f0d07f6e7a8a0e9199d6d92801fff867002ff5b4808962f9da2ba5ce1bdd26a73919050565b81600d0361049d57507f1c4954081e324939350febc2b918a293ebcdaead01be95ec02fcbe8d2c1635d1919050565b81600e036104cc57507f0197f2171ef99c2d053ee1fb5ff5ab288d56b9b41b4716c9214a4d97facc4c4a919050565b81600f036104fb57507f2b9cdd484c5ba1e4d6efcc3f18734b5ac4c4a0b9102e2aeb48521a661d3feee9919050565b8160100361052a57507f14f44d672eb357739e42463497f9fdac46623af863eea4d947ca00a497dcdeb3919050565b8160110361055957507f071d7627ae3b2eabda8a810227bf04206370ac78dbf6c372380182dbd3711fe3919050565b8160120361058857507f2fdc08d9fe075ac58cb8c00f98697861a13b3ab6f9d41a4e768f75e477475bf5919050565b816013036105b757507f20165fe405652104dceaeeca92950aa5adc571b8cafe192878cba58ff1be49c5919050565b816014036105e657507f1c8c3ca0b3a3d75850fcd4dc7bf1e3445cd0cfff3ca510630fd90b47e8a24755919050565b8160150361061557507f1f0c1a8fb16b0d2ac9a146d7ae20d8d179695a92a79ed66fc45d9da4532459b3919050565b8160160361064457507f038146ec5a2573e1c30d2fb32c66c8440f426fbd108082df41c7bebd1d521c30919050565b8160170361067357507f17d3d12b17fe762de4b835b2180b012e808816a7f2ff69ecb9d65188235d8fd4919050565b816018036106a257507f0e1a6b7d63a6e5a9e54e8f391dd4e9d49cdfedcbc87f02cd34d4641d2eb30491919050565b816019036106d157507f09244eec34977ff795fc41036996ce974136377f521ac8eb9e04642d204783d2919050565b81601a0361070057507f1646d6f544ec36df9dc41f778a7ef1690a53c730b501471b6acd202194a7e8e9919050565b81601b0361072f57507f064769603ba3f6c41f664d266ecb9a3a0f6567cd3e48b40f34d4894ee4c361b3919050565b81601c0361075e57507f1595bb3cd19f84619dc2e368175a88d8627a7439eda9397202cdb1167531fd3f919050565b81601d0361078d57507f2a529be462b81ca30265b558763b1498289c9d88277ab14f0838cb1fce4b472c919050565b81601e036107bc57507f0c08da612363088ad0bbc78abd233e8ace4c05a56fdabdd5e5e9b05e428bdaee919050565b81601f036107eb57507f14748d0241710ef47f54b931ac5a58082b1d56b0f0c30d55fb71a6e8c9a6be14919050565b8160200361081a57507f0b59baa35b9dc267744f0ccb4e3b0255c1fc512460d91130c6bc19fb2668568d919050565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f496e646578206f7574206f6620626f756e647300000000000000000000000000604482015260640160405180910390fd5b1490565b60006020828403121561089657600080fd5b5035919050565b600063ffffffff8216806108da577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019291505056fea2646970667358221220683e1a19fada71082bb0c17c302bffb787e07f1811ec64eaa35092cd0b7d3c2564736f6c63430008180033";

type MerkleTreeWithHistoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleTreeWithHistoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleTreeWithHistory__factory extends ContractFactory {
  constructor(...args: MerkleTreeWithHistoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _levels: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_levels, overrides || {});
  }
  override deploy(
    _levels: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_levels, overrides || {}) as Promise<
      MerkleTreeWithHistory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MerkleTreeWithHistory__factory {
    return super.connect(runner) as MerkleTreeWithHistory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleTreeWithHistoryInterface {
    return new Interface(_abi) as MerkleTreeWithHistoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MerkleTreeWithHistory {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MerkleTreeWithHistory;
  }
}
