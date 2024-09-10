import React from "react";
import WalletIcon from "../images/walleticon.png";
import OrderIcon from "../images/ordercomp.png";
import BoostIcon from "../images/activeboost.png";
import ActiveBoostBox from "./ActiveBoost/ActiveBoostBox";
import OrderProcess from "./OrderProcess/OrderProcessBox";
import styles from "./BoosterDash.module.css";
import Image from "next/image";

const BoosterDash = () => {
  return (
    <div className={styles.DashContainer}>
      <h1 className="text-xl pt-8">Dashboard</h1>
      <div className={styles.AmountEarn}>
        <div className="px-2.5">
          <Image
            src={WalletIcon}
            width={20}
            height={20}
            alt="dashicon"
            className="float-left mt-2.5 mx-4"
          />
          <h1 className={styles.TextComp}>Amount Earned</h1>
          <h1 className={styles.MoneyEarn}>$1,112.65</h1>
        </div>
        <div className={styles.ExtraInfo}>
          This represents the total amount earned by you on this platform.
        </div>
      </div>
      <div className={styles.OrdersComp}>
        <div className="px-2.5">
          <Image
            src={OrderIcon}
            width={20}
            height={20}
            alt="dashicon"
            className="float-left mt-2.5 mx-4"
          />
          <h1 className={styles.TextComp}>Orders Completed</h1>
          <h1 className={styles.OrderDone}>206</h1>
        </div>
        <div className={styles.ExtraInfo}>
          This represents the total orders completed by you on this platform.
        </div>
      </div>
      <div className={styles.ActiveBoost}>
        <Image
          src={BoostIcon}
          width={20}
          height={20}
          alt="dashicon"
          className="float-left mt-2.5 mx-4"
        />
        <h1 className={styles.TextComp}>Active Boosts</h1>
        <ActiveBoostBox />
      </div>
      <div className={styles.OrderProc}>
        <OrderProcess />
      </div>
    </div>
  );
};

export default BoosterDash;
