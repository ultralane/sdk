/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Poseidon2Test,
  Poseidon2TestInterface,
} from "../../../contracts/test/Poseidon2Test";

const _abi = [
  {
    inputs: [
      {
        internalType: "Field",
        name: "m1",
        type: "uint256",
      },
    ],
    name: "hash_1",
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
  {
    inputs: [
      {
        internalType: "Field",
        name: "m1",
        type: "uint256",
      },
    ],
    name: "hash_1_twice",
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
  {
    inputs: [
      {
        internalType: "Field",
        name: "m1",
        type: "uint256",
      },
      {
        internalType: "Field",
        name: "m2",
        type: "uint256",
      },
    ],
    name: "hash_2",
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
  {
    inputs: [
      {
        internalType: "Field",
        name: "m1",
        type: "uint256",
      },
      {
        internalType: "Field",
        name: "m2",
        type: "uint256",
      },
      {
        internalType: "Field",
        name: "m3",
        type: "uint256",
      },
    ],
    name: "hash_3",
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
  "0x608060405234801561001057600080fd5b506123b1806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063055d8d54146100515780636bdcae5c1461007657806390c1174e14610089578063e16f62001461009c575b600080fd5b61006461005f366004612255565b6100af565b60405190815260200160405180910390f35b610064610084366004612277565b6100c4565b610064610097366004612277565b6100cf565b6100646100aa366004612290565b6100f8565b60006100bb838361010d565b90505b92915050565b60006100be82610187565b6000806100da6101e1565b90506100e681846117d1565b506100f181846117d1565b9392505050565b6000610105848484611824565b949350505050565b604080516002808252606082018352600092839291906020830190803683370190505090508381600081518110610146576101466122bc565b6020026020010181815250508281600181518110610166576101666122bc565b60200260200101818152505061010561017d6101e1565b82600260006118c8565b6040805160018082528183019092526000918291906020808301908036833701905050905082816000815181106101c0576101c06122bc565b6020026020010181815250506100f16101d76101e1565b82600160006118c8565b6101e9612184565b604051806040016040528060405180608001604052807f10dc6e9c006ea38b04b1e03b4bd9490c0d03f98929ca1d7fb56821fd19d3b6e781526020017f0c28145b6a44df3e0149b3d0a30b3bb599df9756d4dd9b84a86b38cfb45a740b81526020017e544b8338791518b2c7645a50392798b21f75bb60e3596170067d00141cac1581526020017f222c01175718386f2e2e82eb122789e352e105a3b8fa852613bc534433ee428b815250815260200160405180610800016040528060405180608001604052807f19b849f69450b06848da1d39bd5e4a4302bb86744edc26238b0878e269ed23e581526020017f265ddfe127dd51bd7239347b758f0a1320eb2cc7450acc1dad47f80c8dcf34d681526020017f199750ec472f1809e0f66a545e1e51624108ac845015c2aa3dfc36bab497d8aa81526020017f157ff3fe65ac7208110f06a5f74302b14d743ea25067f0ffd032f787c7f1cdf8815250815260200160405180608001604052807f2e49c43c4569dd9c5fd35ac45fca33f10b15c590692f8beefe18f4896ac9490281526020017f0e35fb89981890520d4aef2b6d6506c3cb2f0b6973c24fa82731345ffa2d1f1e81526020017f251ad47cb15c4f1105f109ae5e944f1ba9d9e7806d667ffec6fe723002e0b99681526020017f13da07dc64d428369873e97160234641f8beb56fdd05e5f3563fa39d9c22df4e815250815260200160405180608001604052807f0c009b84e650e6d23dc00c7dccef7483a553939689d350cd46e7b89055fd473881526020017f011f16b1c63a854f01992e3956f42d8b04eb650c6d535eb0203dec74befdca0681526020017f0ed69e5e383a688f209d9a561daa79612f3f78d0467ad45485df07093f36754981526020017f04dba94a7b0ce9e221acad41472b6bbe3aec507f5eb3d33f463672264c9f789b815250815260200160405180608001604052807f0a3f2637d840f3a16eb094271c9d237b6036757d4bb50bf7ce732ff1d4fa28e881526020017f259a666f129eea198f8a1c502fdb38fa39b1f075569564b6e54a485d1182323f81526020017f28bf7459c9b2f4c6d8e7d06a4ee3a47f7745d4271038e5157a32fdf7ede0d6a181526020017f0a1ca941f057037526ea200f489be8d4c37c85bbcce6a2aeec91bd6941432447815250815260200160405180608001604052807f0c6f8f958be0e93053d7fd4fc54512855535ed1539f051dcb43a26fd926361cf815260200160008152602001600081526020016000815250815260200160405180608001604052807f123106a93cd17578d426e8128ac9d90aa9e8a00708e296e084dd57e69caaf811815260200160008152602001600081526020016000815250815260200160405180608001604052807f26e1ba52ad9285d97dd3ab52f8e840085e8fa83ff1e8f1877b074867cd2dee75815260200160008152602001600081526020016000815250815260200160405180608001604052807f1cb55cad7bd133de18a64c5c47b9c97cbe4d8b7bf9e095864471537e6a4ae2c5815260200160008152602001600081526020016000815250815260200160405180608001604052807f1dcd73e46acd8f8e0e2c7ce04bde7f6d2a53043d5060a41c7143f08e6e9055d0815260200160008152602001600081526020016000815250815260200160405180608001604052807f011003e32f6d9c66f5852f05474a4def0cda294a0eb4e9b9b12b9bb4512e5574815260200160008152602001600081526020016000815250815260200160405180608001604052807f2b1e809ac1d10ab29ad5f20d03a57dfebadfe5903f58bafed7c508dd2287ae8c815260200160008152602001600081526020016000815250815260200160405180608001604052807f2539de1785b735999fb4dac35ee17ed0ef995d05ab2fc5faeaa69ae87bcec0a5815260200160008152602001600081526020016000815250815260200160405180608001604052807f0c246c5a2ef8ee0126497f222b3e0a0ef4e1c3d41c86d46e43982cb11d77951d815260200160008152602001600081526020016000815250815260200160405180608001604052807f192089c4974f68e95408148f7c0632edbb09e6a6ad1a1c2f3f0305f5d03b527b815260200160008152602001600081526020016000815250815260200160405180608001604052807f1eae0ad8ab68b2f06a0ee36eeb0d0c058529097d91096b756d8fdc2fb5a60d85815260200160008152602001600081526020016000815250815260200160405180608001604052807f179190e5d0e22179e46f8282872abc88db6e2fdc0dee99e69768bd98c5d06bfb815260200160008152602001600081526020016000815250815260200160405180608001604052807f29bb9e2c9076732576e9a81c7ac4b83214528f7db00f31bf6cafe794a9b3cd1c815260200160008152602001600081526020016000815250815260200160405180608001604052807f225d394e42207599403efd0c2464a90d52652645882aac35b10e590e6e691e08815260200160008152602001600081526020016000815250815260200160405180608001604052807f064760623c25c8cf753d238055b444532be13557451c087de09efd454b23fd59815260200160008152602001600081526020016000815250815260200160405180608001604052807f10ba3a0e01df92e87f301c4b716d8a394d67f4bf42a75c10922910a78f6b5b87815260200160008152602001600081526020016000815250815260200160405180608001604052807f0e070bf53f8451b24f9c6e96b0c2a801cb511bc0c242eb9d361b77693f21471c815260200160008152602001600081526020016000815250815260200160405180608001604052807f1b94cd61b051b04dd39755ff93821a73ccd6cb11d2491d8aa7f921014de252fb815260200160008152602001600081526020016000815250815260200160405180608001604052807f1d7cb39bafb8c744e148787a2e70230f9d4e917d5713bb050487b5aa7d74070b815260200160008152602001600081526020016000815250815260200160405180608001604052807f2ec93189bd1ab4f69117d0fe980c80ff8785c2961829f701bb74ac1f303b17db815260200160008152602001600081526020016000815250815260200160405180608001604052807f2db366bfdd36d277a692bb825b86275beac404a19ae07a9082ea46bd83517926815260200160008152602001600081526020016000815250815260200160405180608001604052807f062100eb485db06269655cf186a68532985275428450359adc99cec6960711b8815260200160008152602001600081526020016000815250815260200160405180608001604052807f0761d33c66614aaa570e7f1e8244ca1120243f92fa59e4f900c567bf41f5a59b815260200160008152602001600081526020016000815250815260200160405180608001604052807f20fc411a114d13992c2705aa034e3f315d78608a0f7de4ccf7a72e494855ad0d815260200160008152602001600081526020016000815250815260200160405180608001604052807f25b5c004a4bdfcb5add9ec4e9ab219ba102c67e8b3effb5fc3a30f317250bc5a815260200160008152602001600081526020016000815250815260200160405180608001604052807f23b1822d278ed632a494e58f6df6f5ed038b186d8474155ad87e7dff62b37f4b815260200160008152602001600081526020016000815250815260200160405180608001604052807f22734b4c5c3f9493606c4ba9012499bf0f14d13bfcfcccaa16102a29cc2f69e0815260200160008152602001600081526020016000815250815260200160405180608001604052807f26c0c8fe09eb30b7e27a74dc33492347e5bdff409aa3610254413d3fad795ce5815260200160008152602001600081526020016000815250815260200160405180608001604052807f070dd0ccb6bd7bbae88eac03fa1fbb26196be3083a809829bbd626df348ccad9815260200160008152602001600081526020016000815250815260200160405180608001604052807f12b6595bdb329b6fb043ba78bb28c3bec2c0a6de46d8c5ad6067c4ebfd4250da815260200160008152602001600081526020016000815250815260200160405180608001604052807f248d97d7f76283d63bec30e7a5876c11c06fca9b275c671c5e33d95bb7e8d729815260200160008152602001600081526020016000815250815260200160405180608001604052807f1a306d439d463b0816fc6fd64cc939318b45eb759ddde4aa106d15d9bd9baaaa815260200160008152602001600081526020016000815250815260200160405180608001604052807f28a8f8372e3c38daced7c00421cb4621f4f1b54ddc27821b0d62d3d6ec7c56cf815260200160008152602001600081526020016000815250815260200160405180608001604052807e94975717f9a8a8bb35152f24d43294071ce320c829f388bc852183e1e2ce7e815260200160008152602001600081526020016000815250815260200160405180608001604052807f04d5ee4c3aa78f7d80fde60d716480d3593f74d4f653ae83f4103246db2e8d65815260200160008152602001600081526020016000815250815260200160405180608001604052807f2a6cf5e9aa03d4336349ad6fb8ed2269c7bef54b8822cc76d08495c12efde187815260200160008152602001600081526020016000815250815260200160405180608001604052807f2304d31eaab960ba9274da43e19ddeb7f792180808fd6e43baae48d7efcba3f3815260200160008152602001600081526020016000815250815260200160405180608001604052807f03fd9ac865a4b2a6d5e7009785817249bff08a7e0726fcb4e1c11d39d199f0b0815260200160008152602001600081526020016000815250815260200160405180608001604052807eb7258ded52bbda2248404d55ee5044798afc3a209193073f7954d4d63b0b64815260200160008152602001600081526020016000815250815260200160405180608001604052807f159f81ada0771799ec38fca2d4bf65ebb13d3a74f3298db36272c5ca65e92d9a815260200160008152602001600081526020016000815250815260200160405180608001604052807f1ef90e67437fbc8550237a75bc28e3bb9000130ea25f0c5471e144cf4264431f815260200160008152602001600081526020016000815250815260200160405180608001604052807f1e65f838515e5ff0196b49aa41a2d2568df739bc176b08ec95a79ed82932e30d815260200160008152602001600081526020016000815250815260200160405180608001604052807f2b1b045def3a166cec6ce768d079ba74b18c844e570e1f826575c1068c94c33f815260200160008152602001600081526020016000815250815260200160405180608001604052807f0832e5753ceb0ff6402543b1109229c165dc2d73bef715e3f1c6e07c168bb173815260200160008152602001600081526020016000815250815260200160405180608001604052807f02f614e9cedfb3dc6b762ae0a37d41bab1b841c2e8b6451bc5a8e3c390b6ad16815260200160008152602001600081526020016000815250815260200160405180608001604052807f0e2427d38bd46a60dd640b8e362cad967370ebb777bedff40f6a0be27e7ed705815260200160008152602001600081526020016000815250815260200160405180608001604052807f0493630b7c670b6deb7c84d414e7ce79049f0ec098c3c7c50768bbe29214a53a815260200160008152602001600081526020016000815250815260200160405180608001604052807f22ead100e8e482674decdab17066c5a26bb1515355d5461a3dc06cc85327cea9815260200160008152602001600081526020016000815250815260200160405180608001604052807f25b3e56e655b42cdaae2626ed2554d48583f1ae35626d04de5084e0b6d2a6f16815260200160008152602001600081526020016000815250815260200160405180608001604052807f1e32752ada8836ef5837a6cde8ff13dbb599c336349e4c584b4fdc0a0cf6f9d0815260200160008152602001600081526020016000815250815260200160405180608001604052807f2fa2a871c15a387cc50f68f6f3c3455b23c00995f05078f672a9864074d412e5815260200160008152602001600081526020016000815250815260200160405180608001604052807f2f569b8a9a4424c9278e1db7311e889f54ccbf10661bab7fcd18e7c7a7d83505815260200160008152602001600081526020016000815250815260200160405180608001604052807f044cb455110a8fdd531ade530234c518a7df93f7332ffd2144165374b246b43d815260200160008152602001600081526020016000815250815260200160405180608001604052807f227808de93906d5d420246157f2e42b191fe8c90adfe118178ddc723a5319025815260200160008152602001600081526020016000815250815260200160405180608001604052807f02fcca2934e046bc623adead873579865d03781ae090ad4a8579d2e7a6800355815260200160008152602001600081526020016000815250815260200160405180608001604052807f0ef915f0ac120b876abccceb344a1d36bad3f3c5ab91a8ddcbec2e060d8befac815260200160008152602001600081526020016000815250815260200160405180608001604052807f1797130f4b7a3e1777eb757bc6f287f6ab0fb85f6be63b09f3b16ef2b1405d3881526020017f0a76225dc04170ae3306c85abab59e608c7f497c20156d4d36c668555decc6e581526020017f1fffb9ec1992d66ba1e77a7b93209af6f8fa76d48acb664796174b5326a31a5c81526020017f25721c4fc15a3f2853b57c338fa538d85f8fbba6c6b9c6090611889b797b9c5f815250815260200160405180608001604052807f0c817fd42d5f7a41215e3d07ba197216adb4c3790705da95eb63b982bfcaf75a81526020017f13abe3f5239915d39f7e13c2c24970b6df8cf86ce00a22002bc15866e52b5a9681526020017f2106feea546224ea12ef7f39987a46c85c1bc3dc29bdbd7a92cd60acb4d391ce81526020017f21ca859468a746b6aaa79474a37dab49f1ca5a28c748bc7157e1b3345bb0f959815250815260200160405180608001604052807f05ccd6255c1e6f0c5cf1f0df934194c62911d14d0321662a8f1a48999e34185b81526020017f0f0e34a64b70a626e464d846674c4c8816c4fb267fe44fe6ea28678cb09490a481526020017f0558531a4e25470c6157794ca36d0e9647dbfcfe350d64838f5b1a8a2de0d4bf81526020017f09d3dca9173ed2faceea125157683d18924cadad3f655a60b72f5864961f1455815250815260200160405180608001604052807f0328cbd54e8c0913493f866ed03d218bf23f92d68aaec48617d4c722e5bd433581526020017f2bf07216e2aff0a223a487b1a7094e07e79e7bcc9798c648ee3347dd5329d34b81526020017f1daf345a58006b736499c583cb76c316d6f78ed6a6dffc82111e11a63fe412df81526020017f176563472456aaa746b694c60e1823611ef39039b2edc7ff391e6f2293d2c404815250815250815250905090565b60408051600180825281830190925260009182919060208083019080368337019050509050828160008151811061180a5761180a6122bc565b6020026020010181815250506101058482600160006118c8565b6040805160038082526080820190925260009182919060208201606080368337019050509050848160008151811061185e5761185e6122bc565b602002602001018181525050838160018151811061187e5761187e6122bc565b602002602001018181525050828160028151811061189e5761189e6122bc565b6020026020010181815250506118bf6118b56101e1565b82600360006118c8565b95945050505050565b6000806118df6118d9865160401b90565b8761194e565b905060005b855181101561192957848110156119215761192186828151811061190a5761190a6122bc565b6020026020010151836119f090919063ffffffff16565b6001016118e4565b50821561193b5761193b8160016119f0565b61194481611aa2565b9695505050505050565b6119566121a9565b60006040518060c001604052808581526020016040518060600160405280600081526020016000815260200160008152508152602001604051806080016040528060008152602001600081526020016000815260200160008152508152602001600081526020016000151581526020018481525090508381604001516003600481106119e4576119e46122bc565b60200201529392505050565b8160800151158015611a06575060038260600151145b15611a2557611a1482611be1565b506020820151526001606090910152565b8160800151158015611a3c57506003826060015114155b15611a7d57808260200151836060015160038110611a5c57611a5c6122bc565b602002015260608201805160019190611a7690839061231a565b9052505050565b816080015115611a9e57602082015181905260016060830152600060808301525b5050565b600081608001518015611ab757506060820151155b15611acb5760006080830181905260608301525b8160800151611b38576000611adf83611be1565b60016080850152905060005b6003811015611b2e57818160038110611b0657611b066122bc565b602002015184602001518260038110611b2157611b216122bc565b6020020152600101611aeb565b5050600360608301525b60208201515160015b6003811015611ba1578360600151811015611b995783602001518160038110611b6c57611b6c6122bc565b60200201518460200151600183611b83919061232d565b60038110611b9357611b936122bc565b60200201525b600101611b41565b50600183606001818151611bb5919061232d565b905250602083015160608401516000919060038110611bd657611bd66122bc565b602002015292915050565b611be96121eb565b60005b6003811015611c265782606001518110611c1e57600083602001518260038110611c1857611c186122bc565b60200201525b600101611bec565b5060005b6003811015611c9557611c7283602001518260038110611c4c57611c4c6122bc565b602002015184604001518360048110611c6757611c676122bc565b602002015190611d24565b83604001518260048110611c8857611c886122bc565b6020020152600101611c2a565b50611cb582604001518360a00151600001518460a0015160200151611d51565b6040808401919091528051606081018252600080825260208201819052918101829052905b6003811015611d1d5783604001518160048110611cf957611cf96122bc565b6020020151828260038110611d1057611d106122bc565b6020020152600101611cda565b5092915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018284089392505050565b611d59612209565b600060405180608001604052806000815260200160008152602001600081526020016000815250905060005b6004811015611dc457858160048110611da057611da06122bc565b6020020151828260048110611db757611db76122bc565b6020020152600101611d85565b50611dce81611ebf565b6000611ddc60026008612340565b905060005b81811015611e0e57611df4838683611fb9565b611dfd8361202c565b611e0683611ebf565b600101611de1565b506000611e1c60388361231a565b9050815b81811015611e7257611e4b868260408110611e3d57611e3d6122bc565b602002015151856000611c67565b8452611e5e8460005b602002015161206c565b8452611e6a848861208f565b600101611e20565b506000611e816038600861231a565b9050815b81811015611eb257611e98858883611fb9565b611ea18561202c565b611eaa85611ebf565b600101611e85565b5092979650505050505050565b6000611ed48260016020020151836000611c67565b90506000611eeb8360036020020151846002611c67565b90506000611f028460016020020151856001611c67565b9050611f0e8183611d24565b90506000611f258560036020020151866003611c67565b9050611f318185611d24565b90506000611f3f8480611d24565b9050611f4b8180611d24565b9050611f578183611d24565b90506000611f658680611d24565b9050611f718180611d24565b9050611f7d8185611d24565b90506000611f8b8483611d24565b90506000611f998685611d24565b918952506020880191909152604087015260609095019490945250505050565b60005b600481101561202657612007838360408110611fda57611fda6122bc565b60200201518260048110611ff057611ff06122bc565b6020020151858360048110611c6757611c676122bc565b848260048110612019576120196122bc565b6020020152600101611fbc565b50505050565b60005b6004811015611a9e5761204d828260048110611e5457611e546122bc565b82826004811061205f5761205f6122bc565b602002015260010161202f565b6000806120798380612157565b90506100f1836120898380612157565b90612157565b6000805b60048110156120c7576120bd8482600481106120b1576120b16122bc565b60200201518390611d24565b9150600101612093565b5060005b60048110156120265761210b8382600481106120e9576120e96122bc565b6020020151858360048110612100576121006122bc565b602002015190612157565b84826004811061211d5761211d6122bc565b602002015261213882858360048110611c6757611c676122bc565b84826004811061214a5761214a6122bc565b60200201526001016120cb565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018284099392505050565b6040518060400160405280612197612209565b81526020016121a4612227565b905290565b6040518060c00160405280600081526020016121c36121eb565b81526020016121d0612209565b815260006020820181905260408201526060016121a4612184565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b6040518061080001604052806040905b61223f612209565b8152602001906001900390816122375790505090565b6000806040838503121561226857600080fd5b50508035926020909101359150565b60006020828403121561228957600080fd5b5035919050565b6000806000606084860312156122a557600080fd5b505081359360208301359350604090920135919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156100be576100be6122eb565b818103818111156100be576100be6122eb565b600082612376577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220a368c14890d27d040e118c5f93d87281cafb95be6dba1118128c6bf36096539464736f6c63430008180033";

type Poseidon2TestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Poseidon2TestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Poseidon2Test__factory extends ContractFactory {
  constructor(...args: Poseidon2TestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Poseidon2Test & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Poseidon2Test__factory {
    return super.connect(runner) as Poseidon2Test__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Poseidon2TestInterface {
    return new Interface(_abi) as Poseidon2TestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Poseidon2Test {
    return new Contract(address, _abi, runner) as unknown as Poseidon2Test;
  }
}