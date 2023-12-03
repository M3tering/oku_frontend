"use client";
import {
  ConnectWallet,
  useSigner,
  useWallet,
  useConnectionStatus,
  useChainId,
  useSwitchChain,
  useDisconnect,
  useNetworkMismatch,
} from "@thirdweb-dev/react";
import styles from "./styles/navbar.module.scss";

const Navbar = () => {
  const connectionStatus = useConnectionStatus();
  return (
    <div className={styles.navbar_container}>
      <div className="container">
        <div className={styles.navbar}>
          <h3>
            Keza<span>ya</span>
          </h3>

          <div>
            <ConnectWallet
              className={
                connectionStatus == "disconnected" ? styles.connect_button : ""
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
