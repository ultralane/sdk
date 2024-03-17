import { ContractRunner } from 'ethers';

import SepoliaUltralane from './deployments/sepolia/Ultralane.json';
import SepoliaUSDC from './deployments/sepolia/USDC.json';

import ArbsepUltralane from './deployments/arbsep/Ultralane.json';
import ArbsepUSDC from './deployments/arbsep/USDC.json';

import OpsepUltralane from './deployments/opsep/Ultralane.json';
import OpsepUSDC from './deployments/opsep/USDC.json';

import MumbaiUltralane from './deployments/mumbai/Ultralane.json';
import MumbaiUSDC from './deployments/mumbai/USDC.json';

import { Ultralane__factory, USDC__factory } from './typechain-types';

export async function getContracts(runner: ContractRunner) {
  const network = await runner.provider?.getNetwork();
  const addresses = getAddresses(network!.chainId);
  return {
    ultralane: Ultralane__factory.connect(addresses.ultralane, runner),
    usdc: USDC__factory.connect(addresses.usdc, runner),
  };
}

export function getAddresses(chainId: bigint) {
  switch (chainId) {
    case 11155111n:
      return {
        ultralane: SepoliaUltralane.address,
        usdc: SepoliaUSDC.address,
      };
    case 421614n:
      return {
        ultralane: ArbsepUltralane.address,
        usdc: ArbsepUSDC.address,
      };
    case 11155420n:
      return {
        ultralane: OpsepUltralane.address,
        usdc: OpsepUSDC.address,
      };
    case 80001n:
      return {
        ultralane: MumbaiUltralane.address,
        usdc: MumbaiUSDC.address,
      };
    default:
      throw new Error(`ChainId ${chainId} not supported`);
  }
}
