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
  NoteVerifier,
  NoteVerifierInterface,
} from "../../../contracts/Verifier.sol/NoteVerifier";

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
  "0x608060405234801561001057600080fd5b5061040061038081905260026103a0527f06fd19c17017a420ebbebc2bb08771e339ba79c0a8d2d7ab11f995e1bc2e59126103c0527f3058355f447953c1ade231a513e0f80710e9db4e679b02351f90fd168b0400016103e0527f18c1374945378ca52d8c278cbe9f1b1b434556a5455af4d439bfda1cc6afbaf990527f0e0e833036da060172af01f456e419e3ff23f27385fc9e2682063060ec4f66ba610420527f2bedcc0698bdb910b6808a7828ab46326e6c0517f39f233cfb4dcc780b2d6e19610440527f0340901ce3c42e61ef4da2f3981bc0fd80c868864191f863aad9f10a2cc2d302610460527f1f0e6b151ae6542ed493eef710b3b98405e1732ac97adff2e1a5cce4ec4873ca610480527f1cc05f3e751cbdf16ff8aee174dc0ba81786aed30ffb2ab551f68e3a7d6fa4a96104a0527f2c4101f56cdb73dd71cf2c33dff7c0ab74a083d3a46608012ed00fc101a8c22d6104c0527f137f51c2eb46e1ba1568048b5c15dbca3fdb8bbfebf30e34589a648cb3be2a736104e0527f2e981c6a754cb3306a2de2c6cb4ee20517a0a91b022d800acc5dc8ca532bc9a5610500527f0d137947c6dd16b259f124962ecd4690a13785865b3cd2cc51d747c9ea9852cf610520527f2ddae387c5716a33d94380dc75305c72fbb7449150dc2117bb478b895ba676c8610540527f2f580b738716d9b90707c15e121479963dede1ce7087d6d76f079e19fbb0dba0610560527f0516cbe34fada755d126cf09a0f2d433bb0b540cc4d58a94b7abca09d0d36a11610580527f2bc118e3407a483993d34dd4c74d3d7df661fccd579ccce74d73377234979e4e6105a0527f2fc2c90af75adec629642a12c906af7780c889438a32f99c937df845312ed4d56105c0527f2e2e3d00aef0d583e95ac7b554bd8d5091169a86aee5114d156ec8df37bcd6cf6105e0527f273d40dd3bce751580483c8ead88f94535448de8088456fe83376e05cccbdc98610600527f2be69038eb9852beb166fd7755183ce25790491400ac1b7fc47628525702f1c3610620527f0b75803d020993aae12fff4b302511645807e72d327c5926373e9e8020dd24c2610640527f24c953be9c18ddcafc2845fa8b22fb449ff1e375e71f9a4f199f390aba584c4e610660527ee62a2e568366b4a09e9986c2c269ce07d2c434ac856581f3dda8f7d8436114610680527f0eb1af547727e1e43ec53837958947355ebf817c770e724cb8066f1325fc14666106a0527f0434698126b44de01d4bdd6336d51316e75c31721e0f1bdcc4ba2b7a2acb0bef6106c0527f0923101b70557ac8732fef0265938d1f2fdb7821f4624789948bcd30d09643316106e0527f2fa9b5ac13eff27575e40dcf5ee416bf3732dcbd9e1365010a5d5dc3431dfd74610700527f09676ab6a62f771bf08bd7e61cb057ddd85e0b7d92a18951e9ad6d0e9559af59610720527f1ed35e584f3df002ec044d11a84164e8b141a2db2a373a0e9120d51aa434051b610740527f154d097a9483c627637bfbe5fd291c364bc5031a38711ed2542e83a596016c4c610760527f2a8f38a4936cba151811671d5afeec5d7466709833ba96686626ff1ad1da4b7b610780527f0146ad4600c8edb6d0e56554c645120149cf7845ed8d2934f882de29bf3d05a66107a0527f0108ef8c537ae19c420007cfcacf061de82808857de55bb1c111540df0f49ac86107c0527f0446adf3fc100bbb58aeccf275df0982d9b2eaf43d36d15127b44975069cc00d6107e0527f19c364f5c0a4b4ab46439ec4f6b41e85bcb447b3b3d56c498fffb24a8e17803c610800527f261fa22dc105a5fb00af42838f77daf11f3dbfbc45adb698569860513d115f0b610820527f1e500c8c409983cf62fa4a2a223db1e322b5e25669fa77f09677ea7d4bea1271610840527f12a6c081b534d611b686901b6ffed9897e341d3b9ba734b7a2c51c3cd5d05ccb610860527f1c10d1c88a68ba01fa9f6c3010e9ae93892ca0617b390ccac9c78d9835e993ef610880527f0462aba4c9975a98994d929f88cbc50b4f6eb3a942f6a6948fac6ba0edc8557c6108a0527f153c176afd9b727ec7f102d92322c680f40d2cbbb24ad5892adb12685da98c676108c0527f111c7eaf020ad257cc40327014599baf5df8d7c2292bf84873fd717dfab854156108e0527f031499d486bb10f77240ee1257b39b308de6a57cab60804648505aa080cc88fa610900527f0c2a3d970c396b7c05e6a17d0c498748300aa952fedc9df5a33863493ac6462b610920527f1fb4ba826a8319abf23ad86553349c4fbfeb88283de440768a5e7626e871dfb4610940527f0fd6897962fcb5c94e14ad50758020526021fd2b3d027670c7b1485fd9122c31610960527f10882e38b0769a32f366fe3acbe3fcd34cc4baea98b8a3a9ae304785353fdeda610980527f292314299a613ead2d28f9e8bbc749c07389cd8af1c1a25598c53bbf8133ded86109a05260006109c08190526109e0527f260e01b251f6f1c7e7ff4e580791dee8ea51d87a358e038b4efe30fac09383c1610a00527f0118c4d5b837bcc2bc89b5b398b5974e9f5944073b32078b7e231fec938883b0610a20527f04fc6369f7110fe3d25156c1bb9a72859cf2a04641f99ba4ee413c80da6a5fe4610a40527f22febda3c0c0632a56475b4214e5615e11e6dd3f96e6cea2854a87d4dacc5e55610a60527f1c4042c7de3c86d66ed809157a2c7f0aed42b68e6e43404ecaa2e1e9b2e5cc71613300527f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47600161040051610420518382830984600386838609088583840914841693505050506104405161046051838283098460038683860908858384091484169350505050610480516104a0518382830984600386838609088583840914841693505050506104c0516104e051838283098460038683860908858384091484169350508160005280602052505061050051610520518382830984600386838609088583840914841693505050506105405161056051838283098460038683860908858384091484169350505050610580516105a0518382830984600386838609088583840914841693505050506105c0516105e05183828309846003868386090885838409148416935050505061060051610620518382830984600386838609088583840914841693505050506106405161066051838283098460038683860908858384091484169350505050610680516106a0518382830984600386838609088583840914841693505050506106c0516106e05183828309846003868386090885838409148416935050505061070051610720518382830984600386838609088583840914841693505050506107405161076051838283098460038683860908858384091484169350505050610780516107a0518382830984600386838609088583840914841693505050506107c0516107e05183828309846003868386090885838409148416935050505061080051610820518382830984600386838609088583840914841693505050506108405161086051838283098460038683860908858384091484169350505050610880516108a0518382830984600386838609088583840914841693505050506108c0516108e05183828309846003868386090885838409148416935050505061090051610920518382830984600386838609088583840914841693505050506109405161096051838283098460038683860908858384091484169350505050610980516109a05183828309846003868386090885838409148416935050505080610af357637e5769bf60e01b60005260046000fd5b5050612cea80610b046000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063937f6a101461003b578063ea50d0e41461006e575b600080fd5b6040517fc2b7a5cda87168515dc27c8fa0d5c9b61636428a1235f13396507553f296259081526020015b60405180910390f35b61008161007c366004612bef565b610091565b6040519015158152602001610065565b61040061038081905260026103a0527f06fd19c17017a420ebbebc2bb08771e339ba79c0a8d2d7ab11f995e1bc2e59126103c0527f3058355f447953c1ade231a513e0f80710e9db4e679b02351f90fd168b0400016103e0527f18c1374945378ca52d8c278cbe9f1b1b434556a5455af4d439bfda1cc6afbaf990527f0e0e833036da060172af01f456e419e3ff23f27385fc9e2682063060ec4f66ba610420527f2bedcc0698bdb910b6808a7828ab46326e6c0517f39f233cfb4dcc780b2d6e19610440527f0340901ce3c42e61ef4da2f3981bc0fd80c868864191f863aad9f10a2cc2d302610460527f1f0e6b151ae6542ed493eef710b3b98405e1732ac97adff2e1a5cce4ec4873ca610480527f1cc05f3e751cbdf16ff8aee174dc0ba81786aed30ffb2ab551f68e3a7d6fa4a96104a0527f2c4101f56cdb73dd71cf2c33dff7c0ab74a083d3a46608012ed00fc101a8c22d6104c0527f137f51c2eb46e1ba1568048b5c15dbca3fdb8bbfebf30e34589a648cb3be2a736104e0527f2e981c6a754cb3306a2de2c6cb4ee20517a0a91b022d800acc5dc8ca532bc9a5610500527f0d137947c6dd16b259f124962ecd4690a13785865b3cd2cc51d747c9ea9852cf610520527f2ddae387c5716a33d94380dc75305c72fbb7449150dc2117bb478b895ba676c8610540527f2f580b738716d9b90707c15e121479963dede1ce7087d6d76f079e19fbb0dba0610560527f0516cbe34fada755d126cf09a0f2d433bb0b540cc4d58a94b7abca09d0d36a11610580527f2bc118e3407a483993d34dd4c74d3d7df661fccd579ccce74d73377234979e4e6105a0527f2fc2c90af75adec629642a12c906af7780c889438a32f99c937df845312ed4d56105c0527f2e2e3d00aef0d583e95ac7b554bd8d5091169a86aee5114d156ec8df37bcd6cf6105e0527f273d40dd3bce751580483c8ead88f94535448de8088456fe83376e05cccbdc98610600527f2be69038eb9852beb166fd7755183ce25790491400ac1b7fc47628525702f1c3610620527f0b75803d020993aae12fff4b302511645807e72d327c5926373e9e8020dd24c2610640527f24c953be9c18ddcafc2845fa8b22fb449ff1e375e71f9a4f199f390aba584c4e610660527ee62a2e568366b4a09e9986c2c269ce07d2c434ac856581f3dda8f7d8436114610680527f0eb1af547727e1e43ec53837958947355ebf817c770e724cb8066f1325fc14666106a0527f0434698126b44de01d4bdd6336d51316e75c31721e0f1bdcc4ba2b7a2acb0bef6106c0527f0923101b70557ac8732fef0265938d1f2fdb7821f4624789948bcd30d09643316106e0527f2fa9b5ac13eff27575e40dcf5ee416bf3732dcbd9e1365010a5d5dc3431dfd74610700527f09676ab6a62f771bf08bd7e61cb057ddd85e0b7d92a18951e9ad6d0e9559af59610720527f1ed35e584f3df002ec044d11a84164e8b141a2db2a373a0e9120d51aa434051b610740527f154d097a9483c627637bfbe5fd291c364bc5031a38711ed2542e83a596016c4c610760527f2a8f38a4936cba151811671d5afeec5d7466709833ba96686626ff1ad1da4b7b610780527f0146ad4600c8edb6d0e56554c645120149cf7845ed8d2934f882de29bf3d05a66107a0527f0108ef8c537ae19c420007cfcacf061de82808857de55bb1c111540df0f49ac86107c0527f0446adf3fc100bbb58aeccf275df0982d9b2eaf43d36d15127b44975069cc00d6107e0527f19c364f5c0a4b4ab46439ec4f6b41e85bcb447b3b3d56c498fffb24a8e17803c610800527f261fa22dc105a5fb00af42838f77daf11f3dbfbc45adb698569860513d115f0b610820527f1e500c8c409983cf62fa4a2a223db1e322b5e25669fa77f09677ea7d4bea1271610840527f12a6c081b534d611b686901b6ffed9897e341d3b9ba734b7a2c51c3cd5d05ccb610860527f1c10d1c88a68ba01fa9f6c3010e9ae93892ca0617b390ccac9c78d9835e993ef610880527f0462aba4c9975a98994d929f88cbc50b4f6eb3a942f6a6948fac6ba0edc8557c6108a0527f153c176afd9b727ec7f102d92322c680f40d2cbbb24ad5892adb12685da98c676108c0527f111c7eaf020ad257cc40327014599baf5df8d7c2292bf84873fd717dfab854156108e0527f031499d486bb10f77240ee1257b39b308de6a57cab60804648505aa080cc88fa610900527f0c2a3d970c396b7c05e6a17d0c498748300aa952fedc9df5a33863493ac6462b610920527f1fb4ba826a8319abf23ad86553349c4fbfeb88283de440768a5e7626e871dfb4610940527f0fd6897962fcb5c94e14ad50758020526021fd2b3d027670c7b1485fd9122c31610960527f10882e38b0769a32f366fe3acbe3fcd34cc4baea98b8a3a9ae304785353fdeda610980527f292314299a613ead2d28f9e8bbc749c07389cd8af1c1a25598c53bbf8133ded86109a05260006109c08190526109e08190527f260e01b251f6f1c7e7ff4e580791dee8ea51d87a358e038b4efe30fac09383c1610a00527f0118c4d5b837bcc2bc89b5b398b5974e9f5944073b32078b7e231fec938883b0610a20527f04fc6369f7110fe3d25156c1bb9a72859cf2a04641f99ba4ee413c80da6a5fe4610a40527f22febda3c0c0632a56475b4214e5615e11e6dd3f96e6cea2854a87d4dacc5e55610a60527f1c4042c7de3c86d66ed809157a2c7f0aed42b68e6e43404ecaa2e1e9b2e5cc71613300526103a05182811461089f576040517f7667dc9b000000000000000000000000000000000000000000000000000000008152600481018290526024810184905260440160405180910390fd5b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd477f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000016024600435018281350661122052826020820135066112005282604082013506611260528260608201350661124052826080820135066112a0528260a082013506611280528260c0820135066112e0528260e0820135066112c05282610100820135066113205282610120820135066113005282610140820135066113605282610160820135066113405282610180820135066113a052826101a08201350661138052826101c0820135066113e052826101e0820135066113c05282610200820135066114205282610220820135066114005282610240820135066114605282610260820135066114405282610280820135066114a052826102a08201350661148052816102c08201350661160052816102e0820135066116205281610300820135066116405281610320820135066116605281610340820135066116805281610360820135066116a05281610380820135066116c052816103a0820135066116e052816103c08201350661170052816103e0820135066117205281610400820135066117405281610420820135066117605281610440820135066117805281610460820135066117a05281610480820135066117c052816104a0820135066117e052816104c08201350661180052816104e0820135066119605281610500820135066119805281610520820135066119a05281610540820135066119c052816105608201350661184052816105808201350661186052816105a08201350661188052816105c0820135066118a052816105e0820135066118c05281610600820135066118e05281610620820135066119005281610640820135066119205281610660820135066119405281610680820135066119e052816106a08201350661200052816106c08201350661202052816106e0820135066120405281610700820135066120605281610720820135066120805281610740820135066120a05281610760820135066120c05281610780820135066120e052816107a08201350661210052816107c08201350661212052826107e08201350661232052826108008201350661230052826108208201350661236052826108408201350661234052506109c05115610d1a576024803501806109e05160051b0190508035602082013560441b81019050604082013560881b81019050606082013560cc1b81019050608082013560a083013560441b8101905060c083013560881b8101905060e083013560cc1b8101905061010083013561012084013560441b8101905061014084013560881b8101905061016084013560cc1b810190506101808401356101a085013560441b810190506101c085013560881b810190506101e085013560cc1b810190508361340052826134205281613440528061346052868110878410168783108886101616610d14577feba9f4a60000000000000000000000000000000000000000000000000000000060005260046000fd5b50505050505b6103805160e01b6000526103a05160e01b60045260086000208061348052602480350160206103a05102808260206134800137600435602401915060c0826134a083013760e0016134802083810661266081905290925090508281800961268052828161268051096126a05250806000526112e0516020526112c051604052611320516060526113005160805260a0600020905081810661260052806000526001602053506021600090812082810661262052815261136051602052611340516040526113a0516060526113805160805260a09020818106612640819052828180096133205282816133205109613340528281613340510961336052806133805250806000526113e0516020526113c05160405261142051606052611400516080526114605160a0526114405160c0526114a05160e052611480516101005261012060002090508181066126c052806126e0525061260051612620516103c051600180856001602480350160206103a0510281018360058a0984600c8b0999505b81831015610eda57823585811085169450858a82089050858183018909975085818c01880996505084888209905084888b099950602083019250610e9b565b50505080610f0c577f374a972f0000000000000000000000000000000000000000000000000000000060005260046000fd5b50508161300052806130205250505050508081600161260051086126205109806103805160015b81811015610f48578483840992508001610f33565b5050613100528181800990508181820961312052506126c05161038051819060015b81811015610f7f578483840992508001610f6a565b50508061304052826001840382089050613300518084036103e051858286088684840992508687848808820990508684840992508687848808820990508687888686098808820990506103c051925086828609915086600188038708878485099450876001890389898b888d8b8c0909090896506130205194508493508782860994508488878709955085898388099650868a61312051890997508760206000526020805260206040528b8b8a0960605260028c036080528b60a0526020600060c0600060055afa611075577ff894a7bc0000000000000000000000000000000000000000000000000000000060005260046000fd5b60005198508b818a0990508b8b8a0998508b828a0991508b613120518a0998508b838a0992508b858a0998508b848a0993508b8a8a0998508b888a0997508b868a0998508b613020518d8b8c090998508b896130005109613060528b888b09613080528b848709613680528b8388096130a0528b826131005109613140528b8188096130c052505050505050505050505061264051506126005161262051828361190051840982611620510101846118e051850983611600510101098384611940518509836116605101018561192051860984611640510101098485868385096116a051096133805109858661198051870985611620510101876119605188098661160051010109925085866119c051870985611660510101876119a0518809866116405101010991508586878885870961208051096133805109870382089050856126405161338051096133805285868788613060518a0361208051086130c0510961338051098208905085612640516133805109613380528586878860018a036116a051086130a05109613380510982086135005250505050508061264051613380510961338052806117205161266051098182836120205161178051096116405108820890508161266051820990508182836120005161176051096116205108820890508161266051820990508182836119e0516117005109611600510882089050816118405183846126605161186051098586612680516118805109876126a0516118a05109080808826120c0518485612660516120e051098687612680516121005109886126a051612120510908080883846001612600510861262051098461262051866118c051870908935084818687612600518609860808925084838509935084856001612600510885099350846130a05161264051099250848385089350846116c0518509935084838603850893508481868761260051612060510961168051080892505050826130c05161332051098381850383089150836120a05183099150838461314051830983089150508261338051848386038508096135205250508061334051613380510961338052806116e0516116005109816117005161162051098261172051611640510983611740516116605109847f183227397098d014dc2822db40c0ac2e9419f4243cdcb848a1f0fac9f80000008687600389036117a0510888611760518a6116205161160051090909098586878889858a08880886088408611780510894505050505081828384856116605161160051086119e051870308611760510884600286036117a05108096126405109828384858685612040510887600189036117a051080985086117a05109613380510961354052505080613320516133805109613380526002810360038203826116005184036116205108836116205185036116405108846116405186036116605108856116605187036119e05108866133805188898888088a8b8b8a088c8a8e038e8c8d09080909099350868788612640516133805109898a8988088b8c8c8a088d8a8f038f8c8d090809090985089350868788613320516133805109898a8987088b8c8c89088d898f038f8b8c090809090985089350868788613340516133805109898a8986088b8c8c88088d888f038f8a8b090809090985089350505050836117c051820961356052505061336051613380518392500961338052806116205182036119e051088161204051612040510982611640516116405109836116e05185612040516116405109098485868384088785870888030886878788098889611620516119e0510861200051080908925050508261338051848561176051870360010884090990508261202051611640510883611640518503856116e05161204051090884858287611620518903612000510809868685090893505050828361264051613380510984856117605187036001088509099150826117e0518484840809613580525050806116205161162051098161164051611640510982611620518460118408098360048309915083600982099050836003840992508381850385848788611620516116205108612000510809089150508283846120205161164051088561164051611640510809840384856120005187036116205108850908915082613380518209905082836126405161338051098309915082611760518209905082611760518309915082836117e0518585850809613580510861358052505080613360516133805109613380528081611620516119e05109826120005161160051090881612020518303838461164051611620510985611660516116005109080882681000000000000000008209905082612040518403820890508282820890508261174051820990508268100000000000000000830991508283612000516119e05109830891508261172051848561166051611640510886038508098361176051858661204051612020510887038761166051880808099250836117005185858786860808096135c0525050612000518291506140009009816119e0518208905081614000820990508161164051820890508161400082099050816116205182089050816140008209905081611600518208905081611660518303820890508161174051820990508161400061202051098261200051820890508261400082099050826119e05182089050826140008209905082611660518208905082614000820990508261164051820890508261204051840382089050826117605182099050826117205184838508096135e0525050806126605161164051098161162051820890508161266051820990508161160051820890508161266051820990508161178051820890508082611660518403830891508161364052826116005184036119e05108836116605185036120405108848560018703840883098586848803600108830991508585876126405189858b61264051890908090861362052856126605161202051099450856120005186089450856126605186099450856119e0518608945085612660518609945085858703612040510894508561164051870361202051089150858687878903600108840987858903600108099150858487036116605108868760018903830882099050868760018903880887099550866126405184099250868284089250866126405184099250868684089250866126405184099250868184089250508161360052505083611620518503612000510892508361164051850385868488036001088609089250836117005161362051099150838461174051850983089150838461176051613640510983089150836116e0518309915083846117a051613600510983089150836135c05183089250836135e05184089250836118005184099250836133805184099250826135a05283613340516133805109613380525050508061368051826135a0518461358051866135605188613540518a61352051613500510808080808096136608190526126e0516136a08190526136c0919091526102e460043501610520816136e03750506105606136a020818106612700526000819052600160205381602160002006612720526002602053816021600020066127405260036020538160216000200661276052600460205381602160002006612780526005602053816021600020066127a0526006602053816021600020066127c0526007602053816021600020066127e0526008602053816021600020066128005260096020538160216000200661282052600a6020538160216000200661284052600b6020538160216000200661286052600c6020538160216000200661288052600d602053816021600020066128a052600e602053816021600020066128c052600f602053816021600020066128e05260106020538160216000200661290052601160205381602160002006612920526012602053816021600020066129405260136020538160216000200661296052601460205381602160002006612980526015602053816021600020066129a0526016602053816021600020066129c0526017602053816021600020066129e052601860205381602160002006612a0052601960205381602160002006612a2052601a60205381602160002006612a4052601b60205381602160002006612a6052601c60205381602160002006612a8052601d60205381602160002006612aa052601d6020535060216000908120828106612ac05281526123205160205261230051604052612360516060526123405160805260a08120829006612b00526113c0516113e0518482800985600387838609088683840914611ce6576328f6b59560e21b60005260046000fd5b50613160919091526131805261140051611420518482800985600387838609088683840914611d20576328f6b59560e21b60005260046000fd5b50816000528060205250506130405160405260406131a06060600060075afa90506040613160608061316060065afa8116905061144051611460518482830985600387838609088683840914611d81576328f6b59560e21b60005260046000fd5b50600091909152602052613040518290800960405260406131a06060600060075afa16604061316060808160065afa81169050611480516114a0518482830985600387838609088683840914611de2576328f6b59560e21b60005260046000fd5b50600091909152602052613040518290818180090960405260406131a06060600060075afa16604061316060808160065afa8116905061120051611220518482830985600387838609088683840914611e46576328f6b59560e21b60005260046000fd5b50816000528060205250508161270051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061124051611260518482830985600387838609088683840914611eae576328f6b59560e21b60005260046000fd5b50816000528060205250508161272051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611280516112a0518482830985600387838609088683840914611f16576328f6b59560e21b60005260046000fd5b50816000528060205250508161274051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506112c0516112e0518482830985600387838609088683840914611f7e576328f6b59560e21b60005260046000fd5b50816000528060205250508161276051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061130051611320518482830985600387838609088683840914611fe6576328f6b59560e21b60005260046000fd5b50816000528060205250508161278051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506113405161136051848283098560038783860908868384091461204e576328f6b59560e21b60005260046000fd5b5081600052806020525050816127a051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050611380516113a05184828309856003878386090886838409146120b6576328f6b59560e21b60005260046000fd5b5081600052806020525050816127c051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506104005161042051816000528060205250506127e05160405260406131a06060600060075afa16604061316060808160065afa811690506104405161046051816000528060205250506128005160405260406131a06060600060075afa16604061316060808160065afa81169050610480516104a051816000528060205250506128205160405260406131a06060600060075afa16604061316060808160065afa811690506104c0516104e051816000528060205250506128405160405260406131a06060600060075afa16604061316060808160065afa811690506105005161052051816000528060205250506128605160405260406131a06060600060075afa16604061316060808160065afa811690506105405161056051816000528060205250506128805160405260406131a06060600060075afa16604061316060808160065afa81169050610580516105a051816000528060205250506128a05160405260406131a06060600060075afa16604061316060808160065afa811690506105c0516105e051816000528060205250506128c05160405260406131a06060600060075afa16604061316060808160065afa811690506106005161062051816000528060205250506128e05160405260406131a06060600060075afa16604061316060808160065afa811690506106405161066051816000528060205250506129005160405260406131a06060600060075afa16604061316060808160065afa81169050610680516106a051816000528060205250506129205160405260406131a06060600060075afa16604061316060808160065afa811690506106c0516106e051816000528060205250506129405160405260406131a06060600060075afa16604061316060808160065afa811690506107005161072051816000528060205250506129605160405260406131a06060600060075afa16604061316060808160065afa811690506107405161076051816000528060205250506129805160405260406131a06060600060075afa16604061316060808160065afa81169050610780516107a05181600052806020525050816129a051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa811690506107c0516107e05181600052806020525050816129c051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050610800516108205181600052806020525050816129e051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa8116905061084051610860518160005280602052505081612a0051836001612b0051080960405260406131a06060600060075afa16604061316060808160065afa81169050610880516108a05181600052806020525050612a205160405260406131a06060600060075afa16604061316060808160065afa811690506108c0516108e05181600052806020525050612a405160405260406131a06060600060075afa16604061316060808160065afa81169050610900516109205181600052806020525050612a605160405260406131a06060600060075afa16604061316060808160065afa81169050610940516109605181600052806020525050612a805160405260406131a06060600060075afa16604061316060808160065afa81169050610980516109a05181600052806020525050612aa05160405260406131a06060600060075afa16604061316060808160065afa8116905081826116005184612b00516119e051090861270051098283846116205186612b00516120005109086127205109820890508283846116405186612b00516120205109086127405109820890508283846116605186612b00516120405109086127605109820890508283846116805186612b00516120605109086127805109820890508283846116a05186612b00516120805109086127a05109820890508283846116c05186612b00516120a05109086127c051098208905082836116e0516127e051098208905082836117005161280051098208905082836117205161282051098208905082836117405161284051098208905082836117605161286051098208905082836117805161288051098208905082836117a0516128a051098208905082836117c0516128c051098208905082836117e0516128e051098208905082836118005161290051098208905082836119605161292051098208905082836119805161294051098208905082836119a05161296051098208905082836119c0516129805109820890508283846118405186612b00516120c05109086129a05109820890508283846118605186612b00516120e05109086129c05109820890508283846118805186612b00516121005109086129e05109820890508283846118a05186612b0051612120510908612a0051098208905082836118c051612a2051098208905082836118e051612a40510982089050828361190051612a60510982089050828361192051612a80510982089050828361194051612aa0510982089050826136605182089050600160005260026020528083036040525060406131a06060600060075afa16604061316060808160065afa16806128ae577f4e7197630000000000000000000000000000000000000000000000000000000060005260046000fd5b612b00516126c051612300516123205186828309876003898386090888838409146128e4576328f6b59560e21b60005260046000fd5b50816000528060205250508060405260406131a06060600060075afa92506040613160608061316060065afa8316925061234051612360518682830987600389838609088883840914612942576328f6b59560e21b60005260046000fd5b5081600052806020525050836103c05185838509096040525060406131a06060600060075afa821691506040613220608061316060065afa8216915061230051600052612320516020526123405160405261236051606052806080526040806060604060075afa8216915060406131e06080600060065afa82169150613200518403613200526109c05115612aa357613400516134205185828309866003888386090887838409146129ff576328f6b59560e21b60005260046000fd5b50600091909152602052828180096040526040606080600060075afa8216915061344051613460518582830986600388838609088783840914612a4d576328f6b59560e21b60005260046000fd5b50600091825260205260409060608160075afa821691506132205160a0526132405160c05260406132206080606060065afa821691506131e0516040526132005160605260406131e06080600060065afa821691505b5080612ad3577f01882d810000000000000000000000000000000000000000000000000000000060005260046000fd5b61322051600052613240516020527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c26040527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed6060527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b6080527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa60a0526131e05160c0526132005160e052610a005161010052610a205161012052610a405161014052610a60516101605260206000610180600060085afa90506000518116612be1577fd71fd2630000000000000000000000000000000000000000000000000000000060005260046000fd5b505050600160005260206000f35b60008060008060408587031215612c0557600080fd5b843567ffffffffffffffff80821115612c1d57600080fd5b818701915087601f830112612c3157600080fd5b813581811115612c4057600080fd5b886020828501011115612c5257600080fd5b602092830196509450908601359080821115612c6d57600080fd5b818701915087601f830112612c8157600080fd5b813581811115612c9057600080fd5b8860208260051b8501011115612ca557600080fd5b9598949750506020019450505056fea26469706673582212202c3afaf2ebe595d19832cfb10581f8641bd099139221697c0f8462367c3cc8b264736f6c63430008180033";

type NoteVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NoteVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NoteVerifier__factory extends ContractFactory {
  constructor(...args: NoteVerifierConstructorParams) {
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
      NoteVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NoteVerifier__factory {
    return super.connect(runner) as NoteVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NoteVerifierInterface {
    return new Interface(_abi) as NoteVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): NoteVerifier {
    return new Contract(address, _abi, runner) as unknown as NoteVerifier;
  }
}
