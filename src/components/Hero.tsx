"use client";
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import styles from "./styles/hero.module.scss";
import Link from "next/link";
import { approve, getAllowance } from "@/utils/tokens";
import { DIA_ADDRESS, METERING_ADDRESS } from "@/utils/constants";
import { Kezayapay } from "@/utils/Kezayapay";
import { getBalance } from "@/utils/tokens";
import { useAddress } from "@thirdweb-dev/react";

export function hasEthereum() {
  return window.ethereum ? true : false;
}
const Hero = () => {
  const [allowance, setAllowance] = useState("0");
  const [balance, setBalance] = useState("");
  const address = useAddress();
  const [state, setState] = useState<any>({
    meterId: 0,
    isLoading: false,
    tokeAmount: 0,
  });
  useEffect(() => {
    _checkAllowance();
    _checkBalance();
  }, [address, DIA_ADDRESS]);
  async function _checkAllowance() {
    if (address) {
      const _allowance = await getAllowance(
        DIA_ADDRESS,
        address,
        METERING_ADDRESS
      );
      setAllowance(_allowance.toFixed());
    } else {
      return;
    }
  }
  async function _checkBalance() {
    if (address) {
      const _allowance = await getBalance(DIA_ADDRESS, address);
      setBalance(_allowance.toFixed());
    } else {
      return;
    }
  }
  async function _approveToken() {
    if (!hasEthereum()) return false;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    try {
      setState({ ...state, isLoading: true });
      const trx = await approve(
        DIA_ADDRESS,
        METERING_ADDRESS,
        ethers.constants.MaxUint256,
        signer
      );
      await trx.wait(1);
      setState({ ...state, isLoading: false });
      _checkAllowance();
    } catch (err) {
      console.log("Error", err);
      toast.error("Couldn't approve!");
      setState({ ...state, isLoading: false });
    }
  }
  const payForLight = async () => {
    if (!hasEthereum()) return false;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    try {
      setState({ ...state, isLoading: true });
      const trx = await Kezayapay(
        signer,
        ethers.utils.parseEther(state.tokeAmount),
        state.meterId
      );
      await trx.wait(1);
      setState({ ...state, isLoading: false });
      toast.success("Payment of Light Successful");
      //  props.setTransactionHash(trx.hash);
    } catch (err) {
      console.log(err);
      setState({ ...state, isLoading: false });
      toast.error("Sorry, something went wrong");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (parseFloat(allowance) < parseFloat(state.tokeAmount)) {
      _approveToken();
      return;
    } else {
      payForLight();
    }
  };

  function disabledBtn() {
    if (parseFloat(balance) < parseFloat(state.tokeAmount)) {
      return true;
    }
    if (!address) {
      return true;
    }
    if ((state.meterId && state.tokeAmount) <= 0) {
      return true;
    }
    if (state.isLoading) {
      return true;
    }
    return false;
  }
  function buttonDisplay() {
    if (parseFloat(balance) < parseFloat(state.tokeAmount)) {
      return "Insufficient Dia Balance";
    }
    if (!address) {
      return "Connect Wallet to Pay";
    }
    if (parseFloat(allowance) > parseFloat(state.tokeAmount)) {
      return "Pay";
    }
    return "Approve Dia";
  }

  return (
    <div className={styles.hero_container}>
      <div className="container">
        <h2>Safe and Fast Energy Meter Subscription</h2>
        <div className={styles.hero}>
          <form onSubmit={handleSubmit}>
            <div className={styles.form_inputs}>
              <label>Enter SmartMeter ID</label>
              <input
                placeholder="2"
                type="number"
                value={state.meterId}
                onChange={(e) =>
                  setState({ ...state, meterId: e.target.value })
                }
                min={1}
              />
            </div>
            <div className={styles.form_inputs}>
              <label>Enter Amount to Pay</label>
              <input
                placeholder="10"
                type="number"
                min={1}
                value={state.tokeAmount}
                onChange={(e) =>
                  setState({ ...state, tokeAmount: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              disabled={disabledBtn()}
              className={disabledBtn() ? styles.disabled : ""}
            >
              {state.isLoading ? "Loading" : buttonDisplay()}
            </button>
          </form>
          <div className={styles.hero_footer}>
            <p>
              {" "}
              powered by
              <Link href="https://github.com/M3tering" target="_blank">
                <span>metering protocol</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
