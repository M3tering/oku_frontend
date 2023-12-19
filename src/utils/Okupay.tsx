import { ethers } from "ethers";
import {
  PROTOCOL_METERING_ABI,
  PROTOCOL_METERING_ADDRESS,
  M3TER_ADDRESS,
  M3TER_ABI,
} from "./constants";

function createPublicProtocolWriteInstance(signer: any) {
  const instance = new ethers.Contract(
    PROTOCOL_METERING_ADDRESS,
    PROTOCOL_METERING_ABI,
    signer
  );
  return instance;
}

export async function Okupay(
  signer: any,
  tokenAmount: ethers.BigNumber,
  meterId: string
): Promise<ethers.ContractTransaction> {
  const publicSaleInstance = createPublicProtocolWriteInstance(signer);
  try {
    return await publicSaleInstance.pay(meterId, tokenAmount);
  } catch (err) {
    throw err;
  }
}

function createPublicM3terWriteInstance(signer: any) {
  const instance = new ethers.Contract(M3TER_ADDRESS, M3TER_ABI, signer);
  return instance;
}

export async function validateMeterID(signer: any, meterId: string) {
  const publicInstance = createPublicM3terWriteInstance(signer);
  try {
    return await publicInstance.tokenRegistry(meterId);
  } catch (err) {
    throw err;
  }
}
