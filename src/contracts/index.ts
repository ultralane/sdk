import { ContractRunner } from 'ethers';

import SepoliaPool from './deployments/sepolia/Pool.json';
import SepoliaUSDC from './deployments/sepolia/USDC.json';

import ArbsepPool from './deployments/arbsep/Pool.json';
import ArbsepUSDC from './deployments/arbsep/USDC.json';

import OpsepPool from './deployments/opsep/Pool.json';
import OpsepUSDC from './deployments/opsep/USDC.json';

import { Pool__factory, USDC__factory } from './typechain-types';

export async function getContracts(runner: ContractRunner) {
  const network = await runner.provider?.getNetwork();
  const addresses = getAddresses(network!.chainId);
  return {
    pool: Pool__factory.connect(addresses.pool, runner),
    usdc: USDC__factory.connect(addresses.usdc, runner),
  };
}

export function getAddresses(chainId: bigint) {
  switch (chainId) {
    case 11155111n:
      return {
        pool: SepoliaPool.address,
        usdc: SepoliaUSDC.address,
      };
    case 421614n:
      return {
        pool: ArbsepPool.address,
        usdc: ArbsepUSDC.address,
      };
    case 11155420n:
      return {
        pool: OpsepPool.address,
        usdc: OpsepUSDC.address,
      };
    default:
      throw new Error(`ChainId ${chainId} not supported`);
  }
}
