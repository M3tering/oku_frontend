"use client";
// import { DAI_Contract_Address, ERC20_ABI } from "./constants";

import { IOTEX_RPC, DIA_ABI } from "./constants";

import { ethers } from "ethers";

export function createTokenReadInstance(tokenAddress: string) {
  const instance = new ethers.Contract(
    tokenAddress,
    DIA_ABI,
    new ethers.VoidSigner(
      "0xc690051f53700752eb21365d569c30BA0F3B063d",
      ethers.getDefaultProvider(IOTEX_RPC)
    )
  );

  return instance;
}

export function hasEthereum() {
  return window.ethereum ? true : false;
}
function createTokenWriteInstance(tokenAddress: string, signer: any) {
  const instance = new ethers.Contract(tokenAddress, DIA_ABI, signer);

  return instance;
}

export async function symbol(tokenAddress: string): Promise<string> {
  const token = createTokenReadInstance(tokenAddress);
  try {
    return await token.symbol();
  } catch (err) {
    throw err;
  }
}

export async function getBalance(tokenAddress: string, user: string) {
  const token = createTokenReadInstance(tokenAddress);
  let val = 0;
  try {
    val = await token.balanceOf(user);
    return +ethers.utils.formatEther(val);
  } catch (err) {
    return val;
  }
}

export async function getAllowance(
  tokenAddress: string,
  user: string,
  operator: string
) {
  const token = createTokenReadInstance(tokenAddress);
  let val = 0;
  try {
    val = await token.allowance(user, operator);
    return +ethers.utils.formatEther(val);
  } catch (err) {
    return 0;
  }
}

export async function approve(
  tokenAddress: string,
  operator: string,
  amount: ethers.BigNumber,
  signer: any
): Promise<ethers.ContractTransaction> {
  const token = createTokenWriteInstance(tokenAddress, signer);
  try {
    return await token.approve(operator, amount);
  } catch (err) {
    throw err;
  }
}
