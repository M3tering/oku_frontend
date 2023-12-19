"use client";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  safeWallet,
  localWallet,
} from "@thirdweb-dev/react";

import { IotexNetworkTestnet, Goerli } from "@thirdweb-dev/chains";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThirdwebProvider
      activeChain={IotexNetworkTestnet}
      clientId="f9e23b13e2e92ee6bfd0f9c9120eae2e"
      supportedWallets={[
        localWallet(),
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect({
          projectId: "201917a2025863fe8645dc20748efd8d",
        }),
        safeWallet(),
      ]}
      supportedChains={[IotexNetworkTestnet]}
    >
      <ToastContainer />
      {children}
    </ThirdwebProvider>
  );
};

export default Providers;
