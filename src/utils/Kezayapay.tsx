import { ethers } from "ethers";
import { METERING_ABI, METERING_ADDRESS } from "./constants";

function createPublicSaleWriteInstance(signer: any) {
  const instance = new ethers.Contract(METERING_ADDRESS, METERING_ABI, signer);
  return instance;
}

export async function Kezayapay(
  signer: any,
  tokenAmount: ethers.BigNumber,
  meterId: string
): Promise<ethers.ContractTransaction> {
  const publicSaleInstance = createPublicSaleWriteInstance(signer);
  try {
    return await publicSaleInstance.pay(meterId, tokenAmount);
  } catch (err) {
    throw err;
  }
}
