/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Errors__factory>;
    getContractFactory(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Errors__factory>;
    getContractFactory(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Errors__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "Create2",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Create2__factory>;
    getContractFactory(
      name: "BaseUltraVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUltraVerifier__factory>;
    getContractFactory(
      name: "UltraVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UltraVerifier__factory>;
    getContractFactory(
      name: "BaseUltraVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUltraVerifier__factory>;
    getContractFactory(
      name: "UltraVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UltraVerifier__factory>;
    getContractFactory(
      name: "BaseUltraVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUltraVerifier__factory>;
    getContractFactory(
      name: "UltraVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UltraVerifier__factory>;
    getContractFactory(
      name: "BaseUltraVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseUltraVerifier__factory>;
    getContractFactory(
      name: "UltraVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UltraVerifier__factory>;
    getContractFactory(
      name: "MerkleTreeWithHistory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MerkleTreeWithHistory__factory>;
    getContractFactory(
      name: "Pool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pool__factory>;
    getContractFactory(
      name: "StealthAddress",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StealthAddress__factory>;
    getContractFactory(
      name: "Poseidon2Test",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Poseidon2Test__factory>;
    getContractFactory(
      name: "USDC",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.USDC__factory>;
    getContractFactory(
      name: "Hash2Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hash2Verifier__factory>;
    getContractFactory(
      name: "NoteVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NoteVerifier__factory>;
    getContractFactory(
      name: "SplitJoin16Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SplitJoin16Verifier__factory>;
    getContractFactory(
      name: "SplitJoin32Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SplitJoin32Verifier__factory>;

    getContractAt(
      name: "IERC1155Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Errors>;
    getContractAt(
      name: "IERC20Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Errors>;
    getContractAt(
      name: "IERC721Errors",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Errors>;
    getContractAt(
      name: "ERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "Create2",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Create2>;
    getContractAt(
      name: "BaseUltraVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUltraVerifier>;
    getContractAt(
      name: "UltraVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.UltraVerifier>;
    getContractAt(
      name: "BaseUltraVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUltraVerifier>;
    getContractAt(
      name: "UltraVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.UltraVerifier>;
    getContractAt(
      name: "BaseUltraVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUltraVerifier>;
    getContractAt(
      name: "UltraVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.UltraVerifier>;
    getContractAt(
      name: "BaseUltraVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseUltraVerifier>;
    getContractAt(
      name: "UltraVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.UltraVerifier>;
    getContractAt(
      name: "MerkleTreeWithHistory",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MerkleTreeWithHistory>;
    getContractAt(
      name: "Pool",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Pool>;
    getContractAt(
      name: "StealthAddress",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.StealthAddress>;
    getContractAt(
      name: "Poseidon2Test",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Poseidon2Test>;
    getContractAt(
      name: "USDC",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.USDC>;
    getContractAt(
      name: "Hash2Verifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Hash2Verifier>;
    getContractAt(
      name: "NoteVerifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.NoteVerifier>;
    getContractAt(
      name: "SplitJoin16Verifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SplitJoin16Verifier>;
    getContractAt(
      name: "SplitJoin32Verifier",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SplitJoin32Verifier>;

    deployContract(
      name: "IERC1155Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "Create2",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Create2>;
    deployContract(
      name: "BaseUltraVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseUltraVerifier>;
    deployContract(
      name: "UltraVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UltraVerifier>;
    deployContract(
      name: "BaseUltraVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseUltraVerifier>;
    deployContract(
      name: "UltraVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UltraVerifier>;
    deployContract(
      name: "BaseUltraVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseUltraVerifier>;
    deployContract(
      name: "UltraVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UltraVerifier>;
    deployContract(
      name: "BaseUltraVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseUltraVerifier>;
    deployContract(
      name: "UltraVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UltraVerifier>;
    deployContract(
      name: "MerkleTreeWithHistory",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MerkleTreeWithHistory>;
    deployContract(
      name: "Pool",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Pool>;
    deployContract(
      name: "StealthAddress",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.StealthAddress>;
    deployContract(
      name: "Poseidon2Test",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Poseidon2Test>;
    deployContract(
      name: "USDC",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.USDC>;
    deployContract(
      name: "Hash2Verifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Hash2Verifier>;
    deployContract(
      name: "NoteVerifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.NoteVerifier>;
    deployContract(
      name: "SplitJoin16Verifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SplitJoin16Verifier>;
    deployContract(
      name: "SplitJoin32Verifier",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SplitJoin32Verifier>;

    deployContract(
      name: "IERC1155Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC1155Errors>;
    deployContract(
      name: "IERC20Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Errors>;
    deployContract(
      name: "IERC721Errors",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC721Errors>;
    deployContract(
      name: "ERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ERC20>;
    deployContract(
      name: "IERC20Metadata",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20Metadata>;
    deployContract(
      name: "IERC20",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IERC20>;
    deployContract(
      name: "Create2",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Create2>;
    deployContract(
      name: "BaseUltraVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseUltraVerifier>;
    deployContract(
      name: "UltraVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UltraVerifier>;
    deployContract(
      name: "BaseUltraVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseUltraVerifier>;
    deployContract(
      name: "UltraVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UltraVerifier>;
    deployContract(
      name: "BaseUltraVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseUltraVerifier>;
    deployContract(
      name: "UltraVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UltraVerifier>;
    deployContract(
      name: "BaseUltraVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.BaseUltraVerifier>;
    deployContract(
      name: "UltraVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.UltraVerifier>;
    deployContract(
      name: "MerkleTreeWithHistory",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MerkleTreeWithHistory>;
    deployContract(
      name: "Pool",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Pool>;
    deployContract(
      name: "StealthAddress",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.StealthAddress>;
    deployContract(
      name: "Poseidon2Test",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Poseidon2Test>;
    deployContract(
      name: "USDC",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.USDC>;
    deployContract(
      name: "Hash2Verifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Hash2Verifier>;
    deployContract(
      name: "NoteVerifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.NoteVerifier>;
    deployContract(
      name: "SplitJoin16Verifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SplitJoin16Verifier>;
    deployContract(
      name: "SplitJoin32Verifier",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SplitJoin32Verifier>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}