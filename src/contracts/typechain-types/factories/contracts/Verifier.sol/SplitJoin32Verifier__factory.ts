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
  SplitJoin32Verifier,
  SplitJoin32VerifierInterface,
} from "../../../contracts/Verifier.sol/SplitJoin32Verifier";

const _abi = [
  {
    inputs: [],
    name: "INVALID_VERIFICATION_KEY",
    type: "error",
  },
  {
    inputs: [],
    name: "MOD_EXP_FAILURE",
    type: "error",
  },
  {
    inputs: [],
    name: "OPENING_COMMITMENT_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "PAIRING_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "PAIRING_PREAMBLE_FAILED",
    type: "error",
  },
  {
    inputs: [],
    name: "POINT_NOT_ON_CURVE",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
    ],
    name: "PUBLIC_INPUT_COUNT_INVALID",
    type: "error",
  },
  {
    inputs: [],
    name: "PUBLIC_INPUT_GE_P",
    type: "error",
  },
  {
    inputs: [],
    name: "PUBLIC_INPUT_INVALID_BN128_G1_POINT",
    type: "error",
  },
  {
    inputs: [],
    name: "getVerificationKeyHash",
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
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "bytes32[]",
        name: "_publicInputs",
        type: "bytes32[]",
      },
    ],
    name: "verify",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50620100006103805260066103a0527eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b76103c0527f30641e0e92bebef818268d663bcad6dbcfd6c0149170f6d7d350b1b1fa6c10016103e0527f0f2fed374278bdeb954e8fe93de8736c4004a671b9e9a0025aecb0fb1c3bc4a4610400527f112db1a22c41c5589ad28bb2d93d3b567c47c5c72007d7a1cb9e7ed8d5dafa5f610420527f1fd5f9e0d63b25e9e4ca389b28b413058414f165ffad79ccfc60a9aeabae5d56610440527f0d793bc94bb4a9e15b9ab5e5948b8c2f25783b65638fa187e24b7f9cc89c173a610460527f091c48c61636e3eb8d009c494edf7a9d2e0697a3617fe71c2f393fee3aaa656a610480527f158f556e18cea4a327f4f4a5a7174043b91b74eec5e9b1615ca78abecaf30dda6104a0527f187b632fd8d3855f9f7a7ab216ad7b94e3b1d02ae8df8674f74b1f5445a31b436104c0527f0d2fd879c89ed8add9ac35259801a4177869544b3a0e9942d969b291a19cf31b6104e0527f189cbfd786e6a8a6741acd5039e87bfbf81386797fabeb1c12331a7fc66712bd610500527f0b71c8203b3394ce058ab9b1fe2838fe87057569e2da2e3459bc8a39290878c2610520527ea1be76f05633073d7f2f387b33d7335a6f69fb1919988c8579ee2522e4f65e610540527f1565b670ec79c33e9980da37816d27fe0605a3992bbf2dd7a99f6d467065afd4610560527f035c1205b4d7d7e777462f7a51df814b800a34ef2e90f774c040f3461eda1279610580527e796cac46cca20db35410f042c24232969e25e0e970e03da9fa526eeea2993c6105a0527f267c51393730a531077816e9cbc47afa4982ea9ea26f94189561b739cc8a69e76105c0527f0ac3598a83a1b747f29b3eccd46ed7208c8abd8a58e32757a7e09434d24a692b6105e0527f21245d6c0a4d2ff12b21a825f39f30e8f8cf9b259448d111183e975828539576610600527f16a409532c8a1693536e93b6ce9920bfc2e6796e8dfe404675a0cdf6ee77ee7a610620527f2f213c7a4c064a63d6a07366df0ea85aef9ad2125a188c3e656f95471e416a0a610640527f067a270bed55e72ffb3cfa39af3e5b8bcb4961d72bb301978af13c4ddc73e5df610660527f1b82cf17fc795b6c59a8f1dce36e5fbd472fbc1ab3e0bf3b8e14ea2ae488fed4610680527f22f70d427992849ed0b2fda06e5c2eecf6a3c1cc02ee0e30ec213afb89e3276f6106a0527f2d6bb3a024939b6b3095a6c936e32f3ce036083510f1f01a30b50e0a9acfee896106c0527f2fb10ed8d77395c777f94fc29fa38b965ff4f3a9ac0bbc4d55db57a80df85a5a6106e0527f1cb33565c5d90c014c38a155b71b128295c215ba4d9a9b935da9d6fd78c0b718610700527f1c369faafffea6c4ece6a9b4be71c9c260bf5ae6a7c7f030ca11dc4811413473610720527f1db5598e696475bb8be734ef87855801a03e59886361fd0eb64b1d5bbfe2584a610740527f205fca780984939f5d4dc8205937194e964d4ea6e0da45ddcf9f71fb47acee23610760527f187e7e35d0116a6672b2670f83bf4f3257d2c5f95ca990943deb07f98e573f87610780527f01d2b37054e35124153a8d470749d60e55759ae7aa52dd33c253d7f49f31b7686107a0527f2043ac05206a2f580ed0a148adfaa26ef5516184126c9e67a8741e133af924cc6107c0527f2bf9b2f5f18eac63843fec205836e0e4cf77146523cb2b703ec9fd6f505b2a326107e0527f01239374280500d61d963adeadc1cfef87ce7f19adb4f4f90c79f63d96468023610800527f0290f83ff91799507e620788f5072a71dd03df9c5605f9594bec63d1763724ca610820527f089ec02dcc6b3216cf9b4418e0827ad4b07d55d3ffa2b21da0743809bae4c2c8610840527f1c522d467e79e574c6bce1ef45cbb9598cc3a99de2de1ce994d0b657450b05b2610860527f2546faf6466689ca90de400304774d39e62e214c390b3a8673079fdbddecbd33610880527f1d6d3e828b1f70d792d184284184663d315a9e15827e8b76bcb8118293212f186108a0527f1e698f0adee65e294c2ad23b4e1088690c0dcd9063e8031abdd1b7a42da68ec16108c0527f21b27c3dbdc81da1134b8148a4d58548df9a7b269977467c2b0d028d1a35fc9a6108e0527f1e132debb512de25eef73847cbade44a767b2cb78aa556166fe19ffa446472e0610900527f2ada6c2b3f7156323ab4ac1c0ea358c8bacd5322611179d13ace998efecd3dc4610920527f1a6eac360c1f8df7af8101b953ab4ed9b2fcd5ec4b508773c47cdf02264c37b6610940527f10ac3fbd2ced28e05bcaf84be1a3f6e78853e35de88e4bd0c9dc72f1360a0c7a610960527f0df902cafa1d00135cfc665cdeb84b49a15edb589945840f324d28e3ccdfe1f9610980527f0349ec2a691657f6f6905b57001194f2355224b9fbc74d5fd8435d9658ac6aa66109a05260006109c08190526109e0527f260e01b251f6f1c7e7ff4e580791dee8ea51d87a358e038b4efe30fac09383c1610a00527f0118c4d5b837bcc2bc89b5b398b5974e9f5944073b32078b7e231fec938883b0610a20527f04fc6369f7110fe3d25156c1bb9a72859cf2a04641f99ba4ee413c80da6a5fe4610a40527f22febda3c0c0632a56475b4214e5615e11e6dd3f96e6cea2854a87d4dacc5e55610a60527f0b5d56b77fe704e8e92338c0082f37e091126414c830e4c6922d5ac802d842d4613300527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47600161040051610420518382830984600386838609088583840914841693505050506104405161046051838283098460038683860908858384091484169350505050610480516104a0518382830984600386838609088583840914841693505050506104c0516104e051838283098460038683860908858384091484169350508160005280602052505061050051610520518382830984600386838609088583840914841693505050506105405161056051838283098460038683860908858384091484169350505050610580516105a0518382830984600386838609088583840914841693505050506105c0516105e05183828309846003868386090885838409148416935050505061060051610620518382830984600386838609088583840914841693505050506106405161066051838283098460038683860908858384091484169350505050610680516106a0518382830984600386838609088583840914841693505050506106c0516106e05183828309846003868386090885838409148416935050505061070051610720518382830984600386838609088583840914841693505050506107405161076051838283098460038683860908858384091484169350505050610780516107a0518382830984600386838609088583840914841693505050506107c0516107e05183828309846003868386090885838409148416935050505061080051610820518382830984600386838609088583840914841693505050506108405161086051838283098460038683860908858384091484169350505050610880516108a0518382830984600386838609088583840914841693505050506108c0516108e05183828309846003868386090885838409148416935050505061090051610920518382830984600386838609088583840914841693505050506109405161096051838283098460038683860908858384091484169350505050610980516109a05183828309846003868386090885838409148416935050505080610af257637e5769bf60e01b60005260046000fd5b5050612ce980610b036000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063937f6a101461003b578063ea50d0e41461006e575b600080fd5b6040517f07c6437362b082677cebdafa25093f28e7a747da98c0691801a60c207404556581526020015b60405180910390f35b61008161007c366004612bee565b610091565b6040519015158152602001610065565b620100006103805260066103a0527eeeb2cb5981ed45649abebde081dcff16c8601de4347e7dd1628ba2daac43b76103c0527f30641e0e92bebef818268d663bcad6dbcfd6c0149170f6d7d350b1b1fa6c10016103e0527f0f2fed374278bdeb954e8fe93de8736c4004a671b9e9a0025aecb0fb1c3bc4a4610400527f112db1a22c41c5589ad28bb2d93d3b567c47c5c72007d7a1cb9e7ed8d5dafa5f610420527f1fd5f9e0d63b25e9e4ca389b28b413058414f165ffad79ccfc60a9aeabae5d56610440527f0d793bc94bb4a9e15b9ab5e5948b8c2f25783b65638fa187e24b7f9cc89c173a610460527f091c48c61636e3eb8d009c494edf7a9d2e0697a3617fe71c2f393fee3aaa656a610480527f158f556e18cea4a327f4f4a5a7174043b91b74eec5e9b1615ca78abecaf30dda6104a0527f187b632fd8d3855f9f7a7ab216ad7b94e3b1d02ae8df8674f74b1f5445a31b436104c0527f0d2fd879c89ed8add9ac35259801a4177869544b3a0e9942d969b291a19cf31b6104e0527f189cbfd786e6a8a6741acd5039e87bfbf81386797fabeb1c12331a7fc66712bd610500527f0b71c8203b3394ce058ab9b1fe2838fe87057569e2da2e3459bc8a39290878c2610520527ea1be76f05633073d7f2f387b33d7335a6f69fb1919988c8579ee2522e4f65e610540527f1565b670ec79c33e9980da37816d27fe0605a3992bbf2dd7a99f6d467065afd4610560527f035c1205b4d7d7e777462f7a51df814b800a34ef2e90f774c040f3461eda1279610580527e796cac46cca20db35410f042c24232969e25e0e970e03da9fa526eeea2993c6105a0527f267c51393730a531077816e9cbc47afa4982ea9ea26f94189561b739cc8a69e76105c0527f0ac3598a83a1b747f29b3eccd46ed7208c8abd8a58e32757a7e09434d24a692b6105e0527f21245d6c0a4d2ff12b21a825f39f30e8f8cf9b259448d111183e975828539576610600527f16a409532c8a1693536e93b6ce9920bfc2e6796e8dfe404675a0cdf6ee77ee7a610620527f2f213c7a4c064a63d6a07366df0ea85aef9ad2125a188c3e656f95471e416a0a610640527f067a270bed55e72ffb3cfa39af3e5b8bcb4961d72bb301978af13c4ddc73e5df610660527f1b82cf17fc795b6c59a8f1dce36e5fbd472fbc1ab3e0bf3b8e14ea2ae488fed4610680527f22f70d427992849ed0b2fda06e5c2eecf6a3c1cc02ee0e30ec213afb89e3276f6106a0527f2d6bb3a024939b6b3095a6c936e32f3ce036083510f1f01a30b50e0a9acfee896106c0527f2fb10ed8d77395c777f94fc29fa38b965ff4f3a9ac0bbc4d55db57a80df85a5a6106e0527f1cb33565c5d90c014c38a155b71b128295c215ba4d9a9b935da9d6fd78c0b718610700527f1c369faafffea6c4ece6a9b4be71c9c260bf5ae6a7c7f030ca11dc4811413473610720527f1db5598e696475bb8be734ef87855801a03e59886361fd0eb64b1d5bbfe2584a610740527f205fca780984939f5d4dc8205937194e964d4ea6e0da45ddcf9f71fb47acee23610760527f187e7e35d0116a6672b2670f83bf4f3257d2c5f95ca990943deb07f98e573f87610780527f01d2b37054e35124153a8d470749d60e55759ae7aa52dd33c253d7f49f31b7686107a0527f2043ac05206a2f580ed0a148adfaa26ef5516184126c9e67a8741e133af924cc6107c0527f2bf9b2f5f18eac63843fec205836e0e4cf77146523cb2b703ec9fd6f505b2a326107e0527f01239374280500d61d963adeadc1cfef87ce7f19adb4f4f90c79f63d96468023610800527f0290f83ff91799507e620788f5072a71dd03df9c5605f9594bec63d1763724ca610820527f089ec02dcc6b3216cf9b4418e0827ad4b07d55d3ffa2b21da0743809bae4c2c8610840527f1c522d467e79e574c6bce1ef45cbb9598cc3a99de2de1ce994d0b657450b05b2610860527f2546faf6466689ca90de400304774d39e62e214c390b3a8673079fdbddecbd33610880527f1d6d3e828b1f70d792d184284184663d315a9e15827e8b76bcb8118293212f186108a0527f1e698f0adee65e294c2ad23b4e1088690c0dcd9063e8031abdd1b7a42da68ec16108c0527f21b27c3dbdc81da1134b8148a4d58548df9a7b269977467c2b0d028d1a35fc9a6108e0527f1e132debb512de25eef73847cbade44a767b2cb78aa556166fe19ffa446472e0610900527f2ada6c2b3f7156323ab4ac1c0ea358c8bacd5322611179d13ace998efecd3dc4610920527f1a6eac360c1f8df7af8101b953ab4ed9b2fcd5ec4b508773c47cdf02264c37b6610940527f10ac3fbd2ced28e05bcaf84be1a3f6e78853e35de88e4bd0c9dc72f1360a0c7a610960527f0df902cafa1d00135cfc665cdeb84b49a15edb589945840f324d28e3ccdfe1f9610980527f0349ec2a691657f6f6905b57001194f2355224b9fbc74d5fd8435d9658ac6aa66109a05260006109c08190526109e08190527f260e01b251f6f1c7e7ff4e580791dee8ea51d87a358e038b4efe30fac09383c1610a00527f0118c4d5b837bcc2bc89b5b398b5974e9f5944073b32078b7e231fec938883b0610a20527f04fc6369f7110fe3d25156c1bb9a72859cf2a04641f99ba4ee413c80da6a5fe4610a40527f22febda3c0c0632a56475b4214e5615e11e6dd3f96e6cea2854a87d4dacc5e55610a60527f0b5d56b77fe704e8e92338c0082f37e091126414c830e4c6922d5ac802d842d4613300526103a05182811461089e576040517f7667dc9b000000000000000000000000000000000000000000000000000000008152600481018290526024810184905260440160405180910390fd5b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd477f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016024600435018281350661122052826020820135066112005282604082013506611260528260608201350661124052826080820135066112a0528260a082013506611280528260c0820135066112e0528260e0820135066112c05282610100820135066113205282610120820135066113005282610140820135066113605282610160820135066113405282610180820135066113a052826101a08201350661138052826101c0820135066113e052826101e0820135066113c05282610200820135066114205282610220820135066114005282610240820135066114605282610260820135066114405282610280820135066114a052826102a08201350661148052816102c08201350661160052816102e0820135066116205281610300820135066116405281610320820135066116605281610340820135066116805281610360820135066116a05281610380820135066116c052816103a0820135066116e052816103c08201350661170052816103e0820135066117205281610400820135066117405281610420820135066117605281610440820135066117805281610460820135066117a05281610480820135066117c052816104a0820135066117e052816104c08201350661180052816104e0820135066119605281610500820135066119805281610520820135066119a05281610540820135066119c052816105608201350661184052816105808201350661186052816105a08201350661188052816105c0820135066118a052816105e0820135066118c05281610600820135066118e05281610620820135066119005281610640820135066119205281610660820135066119405281610680820135066119e052816106a08201350661200052816106c08201350661202052816106e0820135066120405281610700820135066120605281610720820135066120805281610740820135066120a05281610760820135066120c05281610780820135066120e052816107a08201350661210052816107c08201350661212052826107e08201350661232052826108008201350661230052826108208201350661236052826108408201350661234052506109c05115610d19576024803501806109e05160051b0190508035602082013560441b81019050604082013560881b81019050606082013560cc1b81019050608082013560a083013560441b8101905060c083013560881b8101905060e083013560cc1b8101905061010083013561012084013560441b8101905061014084013560881b8101905061016084013560cc1b810190506101808401356101a085013560441b810190506101c085013560881b810190506101e085013560cc1b810190508361340052826134205281613440528061346052868110878410168783108886101616610d13577feba9f4a60000000000000000000000000000000000000000000000000000000060005260046000fd5b50505050505b6103805160e01b6000526103a05160e01b60045260086000208061348052602480350160206103a05102808260206134800137600435602401915060c0826134a083013760e0016134802083810661266081905290925090508281800961268052828161268051096126a05250806000526112e0516020526112c051604052611320516060526113005160805260a0600020905081810661260052806000526001602053506021600090812082810661262052815261136051602052611340516040526113a0516060526113805160805260a09020818106612640819052828180096133205282816133205109613340528281613340510961336052806133805250806000526113e0516020526113c05160405261142051606052611400516080526114605160a0526114405160c0526114a05160e052611480516101005261012060002090508181066126c052806126e0525061260051612620516103c051600180856001602480350160206103a0510281018360058a0984600c8b0999505b81831015610ed957823585811085169450858a82089050858183018909975085818c01880996505084888209905084888b099950602083019250610e9a565b50505080610f0b577f374a972f0000000000000000000000000000000000000000000000000000000060005260046000fd5b50508161300052806130205250505050508081600161260051086126205109806103805160015b81811015610f47578483840992508001610f32565b5050613100528181800990508181820961312052506126c05161038051819060015b81811015610f7e578483840992508001610f69565b50508061304052826001840382089050613300518084036103e051858286088684840992508687848808820990508684840992508687848808820990508687888686098808820990506103c051925086828609915086600188038708878485099450876001890389898b888d8b8c0909090896506130205194508493508782860994508488878709955085898388099650868a61312051890997508760206000526020805260206040528b8b8a0960605260028c036080528b60a0526020600060c0600060055afa611074577ff894a7bc0000000000000000000000000000000000000000000000000000000060005260046000fd5b60005198508b818a0990508b8b8a0998508b828a0991508b613120518a0998508b838a0992508b858a0998508b848a0993508b8a8a0998508b888a0997508b868a0998508b613020518d8b8c090998508b896130005109613060528b888b09613080528b848709613680528b8388096130a0528b826131005109613140528b8188096130c052505050505050505050505061264051506126005161262051828361190051840982611620510101846118e051850983611600510101098384611940518509836116605101018561192051860984611640510101098485868385096116a051096133805109858661198051870985611620510101876119605188098661160051010109925085866119c051870985611660510101876119a0518809866116405101010991508586878885870961208051096133805109870382089050856126405161338051096133805285868788613060518a0361208051086130c0510961338051098208905085612640516133805109613380528586878860018a036116a051086130a05109613380510982086135005250505050508061264051613380510961338052806117205161266051098182836120205161178051096116405108820890508161266051820990508182836120005161176051096116205108820890508161266051820990508182836119e0516117005109611600510882089050816118405183846126605161186051098586612680516118805109876126a0516118a05109080808826120c0518485612660516120e051098687612680516121005109886126a051612120510908080883846001612600510861262051098461262051866118c051870908935084818687612600518609860808925084838509935084856001612600510885099350846130a05161264051099250848385089350846116c0518509935084838603850893508481868761260051612060510961168051080892505050826130c05161332051098381850383089150836120a05183099150838461314051830983089150508261338051848386038508096135205250508061334051613380510961338052806116e0516116005109816117005161162051098261172051611640510983611740516116605109847f183227397098d014dc2822db40c0ac2e9419f4243cdcb848a1f0fac9f80000008687600389036117a0510888611760518a6116205161160051090909098586878889858a08880886088408611780510894505050505081828384856116605161160051086119e051870308611760510884600286036117a05108096126405109828384858685612040510887600189036117a051080985086117a05109613380510961354052505080613320516133805109613380526002810360038203826116005184036116205108836116205185036116405108846116405186036116605108856116605187036119e05108866133805188898888088a8b8b8a088c8a8e038e8c8d09080909099350868788612640516133805109898a8988088b8c8c8a088d8a8f038f8c8d090809090985089350868788613320516133805109898a8987088b8c8c89088d898f038f8b8c090809090985089350868788613340516133805109898a8986088b8c8c88088d888f038f8a8b090809090985089350505050836117c051820961356052505061336051613380518392500961338052806116205182036119e051088161204051612040510982611640516116405109836116e05185612040516116405109098485868384088785870888030886878788098889611620516119e0510861200051080908925050508261338051848561176051870360010884090990508261202051611640510883611640518503856116e05161204051090884858287611620518903612000510809868685090893505050828361264051613380510984856117605187036001088509099150826117e0518484840809613580525050806116205161162051098161164051611640510982611620518460118408098360048309915083600982099050836003840992508381850385848788611620516116205108612000510809089150508283846120205161164051088561164051611640510809840384856120005187036116205108850908915082613380518209905082836126405161338051098309915082611760518209905082611760518309915082836117e0518585850809613580510861358052505080613360516133805109613380528081611620516119e05109826120005161160051090881612020518303838461164051611620510985611660516116005109080882681000000000000000008209905082612040518403820890508282820890508261174051820990508268100000000000000000830991508283612000516119e05109830891508261172051848561166051611640510886038508098361176051858661204051612020510887038761166051880808099250836117005185858786860808096135c0525050612000518291506140009009816119e0518208905081614000820990508161164051820890508161400082099050816116205182089050816140008209905081611600518208905081611660518303820890508161174051820990508161400061202051098261200051820890508261400082099050826119e05182089050826140008209905082611660518208905082614000820990508261164051820890508261204051840382089050826117605182099050826117205184838508096135e0525050806126605161164051098161162051820890508161266051820990508161160051820890508161266051820990508161178051820890508082611660518403830891508161364052826116005184036119e05108836116605185036120405108848560018703840883098586848803600108830991508585876126405189858b61264051890908090861362052856126605161202051099450856120005186089450856126605186099450856119e0518608945085612660518609945085858703612040510894508561164051870361202051089150858687878903600108840987858903600108099150858487036116605108868760018903830882099050868760018903880887099550866126405184099250868284089250866126405184099250868684089250866126405184099250868184089250508161360052505083611620518503612000510892508361164051850385868488036001088609089250836117005161362051099150838461174051850983089150838461176051613640510983089150836116e0518309915083846117a051613600510983089150836135c05183089250836135e05184089250836118005184099250836133805184099250826135a05283613340516133805109613380525050508061368051826135a0518461358051866135605188613540518a61352051613500510808080808096136608190526126e0516136a08190526136c0919091526102e460043501610520816136e03750506105606136a020818106612700526000819052600160205381602160002006612720526002602053816021600020066127405260036020538160216000200661276052600460205381602160002006612780526005602053816021600020066127a0526006602053816021600020066127c0526007602053816021600020066127e0526008602053816021600020066128005260096020538160216000200661282052600a6020538160216000200661284052600b6020538160216000200661286052600c6020538160216000200661288052600d602053816021600020066128a052600e602053816021600020066128c052600f602053816021600020066128e05260106020538160216000200661290052601160205381602160002006612920526012602053816021600020066129405260136020538160216000200661296052601460205381602160002006612980526015602053816021600020066129a0526016602053816021600020066129c0526017602053816021600020066129e052601860205381602160002006612a0052601960205381602160002006612a2052601a60205381602160002006612a4052601b60205381602160002006612a6052601c60205381602160002006612a8052601d60205381602160002006612aa052601d6020535060216000908120828106612ac05281526123205160205261230051604052612360516060526123405160805260a08120829006612b00526113c0516113e0518482800985600387838609088683840914611ce5576328f6b59560e21b60005260046000fd5b50613160919091526131805261140051611420518482800985600387838609088683840914611d1f576328f6b59560e21b60005260046000fd5b50816000528060205250506130405160405260406131a06060600060075afa90506040613160608061316060065afa8116905061144051611460518482830985600387838609088683840914611d80576328f6b59560e21b60005260046000fd5b50600091909152602052613040518290800960405260406131a06060600060075afa16604061316060808160065afa81169050611480516114a0518482830985600387838609088683840914611de1576328f6b59560e21b60005260046000fd5b50600091909152602052613040518290818180090960405260406131a06060600060075afa16604061316060808160065afa8116905061120051611220518482830985600387838609088683840914611e45576328f6b59560e21b60005260046000fd5b50816000528060205250508161270051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061124051611260518482830985600387838609088683840914611ead576328f6b59560e21b60005260046000fd5b50816000528060205250508161272051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611280516112a0518482830985600387838609088683840914611f15576328f6b59560e21b60005260046000fd5b50816000528060205250508161274051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506112c0516112e0518482830985600387838609088683840914611f7d576328f6b59560e21b60005260046000fd5b50816000528060205250508161276051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061130051611320518482830985600387838609088683840914611fe5576328f6b59560e21b60005260046000fd5b50816000528060205250508161278051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506113405161136051848283098560038783860908868384091461204d576328f6b59560e21b60005260046000fd5b5081600052806020525050816127a051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611380516113a05184828309856003878386090886838409146120b5576328f6b59560e21b60005260046000fd5b5081600052806020525050816127c051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506104005161042051816000528060205250506127e05160405260406131a06060600060075afa16604061316060808160065afa811690506104405161046051816000528060205250506128005160405260406131a06060600060075afa16604061316060808160065afa81169050610480516104a051816000528060205250506128205160405260406131a06060600060075afa16604061316060808160065afa811690506104c0516104e051816000528060205250506128405160405260406131a06060600060075afa16604061316060808160065afa811690506105005161052051816000528060205250506128605160405260406131a06060600060075afa16604061316060808160065afa811690506105405161056051816000528060205250506128805160405260406131a06060600060075afa16604061316060808160065afa81169050610580516105a051816000528060205250506128a05160405260406131a06060600060075afa16604061316060808160065afa811690506105c0516105e051816000528060205250506128c05160405260406131a06060600060075afa16604061316060808160065afa811690506106005161062051816000528060205250506128e05160405260406131a06060600060075afa16604061316060808160065afa811690506106405161066051816000528060205250506129005160405260406131a06060600060075afa16604061316060808160065afa81169050610680516106a051816000528060205250506129205160405260406131a06060600060075afa16604061316060808160065afa811690506106c0516106e051816000528060205250506129405160405260406131a06060600060075afa16604061316060808160065afa811690506107005161072051816000528060205250506129605160405260406131a06060600060075afa16604061316060808160065afa811690506107405161076051816000528060205250506129805160405260406131a06060600060075afa16604061316060808160065afa81169050610780516107a05181600052806020525050816129a051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506107c0516107e05181600052806020525050816129c051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050610800516108205181600052806020525050816129e051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061084051610860518160005280602052505081612a0051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050610880516108a05181600052806020525050612a205160405260406131a06060600060075afa16604061316060808160065afa811690506108c0516108e05181600052806020525050612a405160405260406131a06060600060075afa16604061316060808160065afa81169050610900516109205181600052806020525050612a605160405260406131a06060600060075afa16604061316060808160065afa81169050610940516109605181600052806020525050612a805160405260406131a06060600060075afa16604061316060808160065afa81169050610980516109a05181600052806020525050612aa05160405260406131a06060600060075afa16604061316060808160065afa8116905081826116005184612b00516119e051090861270051098283846116205186612b00516120005109086127205109820890508283846116405186612b00516120205109086127405109820890508283846116605186612b00516120405109086127605109820890508283846116805186612b00516120605109086127805109820890508283846116a05186612b00516120805109086127a05109820890508283846116c05186612b00516120a05109086127c051098208905082836116e0516127e051098208905082836117005161280051098208905082836117205161282051098208905082836117405161284051098208905082836117605161286051098208905082836117805161288051098208905082836117a0516128a051098208905082836117c0516128c051098208905082836117e0516128e051098208905082836118005161290051098208905082836119605161292051098208905082836119805161294051098208905082836119a05161296051098208905082836119c0516129805109820890508283846118405186612b00516120c05109086129a05109820890508283846118605186612b00516120e05109086129c05109820890508283846118805186612b00516121005109086129e05109820890508283846118a05186612b0051612120510908612a0051098208905082836118c051612a2051098208905082836118e051612a40510982089050828361190051612a60510982089050828361192051612a80510982089050828361194051612aa0510982089050826136605182089050600160005260026020528083036040525060406131a06060600060075afa16604061316060808160065afa16806128ad577f4e7197630000000000000000000000000000000000000000000000000000000060005260046000fd5b612b00516126c051612300516123205186828309876003898386090888838409146128e3576328f6b59560e21b60005260046000fd5b50816000528060205250508060405260406131a06060600060075afa92506040613160608061316060065afa8316925061234051612360518682830987600389838609088883840914612941576328f6b59560e21b60005260046000fd5b5081600052806020525050836103c05185838509096040525060406131a06060600060075afa821691506040613220608061316060065afa8216915061230051600052612320516020526123405160405261236051606052806080526040806060604060075afa8216915060406131e06080600060065afa82169150613200518403613200526109c05115612aa257613400516134205185828309866003888386090887838409146129fe576328f6b59560e21b60005260046000fd5b50600091909152602052828180096040526040606080600060075afa8216915061344051613460518582830986600388838609088783840914612a4c576328f6b59560e21b60005260046000fd5b50600091825260205260409060608160075afa821691506132205160a0526132405160c05260406132206080606060065afa821691506131e0516040526132005160605260406131e06080600060065afa821691505b5080612ad2577f01882d810000000000000000000000000000000000000000000000000000000060005260046000fd5b61322051600052613240516020527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26040527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6060527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6080527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa60a0526131e05160c0526132005160e052610a005161010052610a205161012052610a405161014052610a60516101605260206000610180600060085afa90506000518116612be0577fd71fd2630000000000000000000000000000000000000000000000000000000060005260046000fd5b505050600160005260206000f35b60008060008060408587031215612c0457600080fd5b843567ffffffffffffffff80821115612c1c57600080fd5b818701915087601f830112612c3057600080fd5b813581811115612c3f57600080fd5b886020828501011115612c5157600080fd5b602092830196509450908601359080821115612c6c57600080fd5b818701915087601f830112612c8057600080fd5b813581811115612c8f57600080fd5b8860208260051b8501011115612ca457600080fd5b9598949750506020019450505056fea264697066735822122034599d6501f9934bf132bf2b4def287def85792f7d861c5909edc7f3e19449cb64736f6c63430008180033";

type SplitJoin32VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SplitJoin32VerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SplitJoin32Verifier__factory extends ContractFactory {
  constructor(...args: SplitJoin32VerifierConstructorParams) {
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
      SplitJoin32Verifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): SplitJoin32Verifier__factory {
    return super.connect(runner) as SplitJoin32Verifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SplitJoin32VerifierInterface {
    return new Interface(_abi) as SplitJoin32VerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SplitJoin32Verifier {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as SplitJoin32Verifier;
  }
}