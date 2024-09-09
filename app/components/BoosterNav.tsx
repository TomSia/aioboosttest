"use client";

import React from "react";
import styles from "./BoosterNav.module.css";
import DashIcon from "../images/dashicon.png";
import BoostIcon from "../images/boosticon.png";
import OrderIcon from "../images/3d-cube-scan.png";
import WalletIcon from "../images/walleticon.png";
import LogIcon from "../images/logout.png";
import Image from "next/image";
import ChangePage from "./Functions/ChangePage";

const items = ["Dashboard", "Boosting Area", "My Orders", "Wallet"];
console.log(items);

const BoosterNav = () => {
  return (
    <div className={styles.NavContainer}>
      <h1 className={styles.Logo}></h1>
      <ul className={styles.NavList}>
        <li
          className={styles.ListSelected}
          key={items[0]}
          onClick={() => console.log()}
        >
          <Image
            src={DashIcon}
            width={20}
            height={20}
            alt="dashicon"
            className="float-left mt-2.5 mx-4"
          />
          <h1>{items[0]}</h1>
        </li>
        <li className={styles.ListSelect}>
          <Image
            src={BoostIcon}
            width={20}
            height={20}
            alt="dashicon"
            className="float-left mt-2.5 mx-4"
          />
          {items[1]}
        </li>
        <li className={styles.ListSelect}>
          <Image
            src={OrderIcon}
            width={20}
            height={20}
            alt="dashicon"
            className="float-left mt-2.5 mx-4"
          />
          {items[2]}
        </li>
        <li className={styles.ListSelect}>
          <Image
            src={WalletIcon}
            width={20}
            height={20}
            alt="dashicon"
            className="float-left mt-2.5 mx-4"
          />
          {items[3]}
        </li>
      </ul>
      <div className={styles.NavFiller}></div>
      <div id="NavProfile" className={styles.NavProfile}>
        <div id="ProfileBox" className={styles.ProfileBox}></div>
        TFTBooster
      </div>
      <div id="LogOut" className={styles.NavLogOut}>
        <Image
          src={LogIcon}
          width={20}
          height={20}
          alt="dashicon"
          className="float-left mt-2.5 mx-4"
        />
        Log Out
      </div>
    </div>
  );
};

export default BoosterNav;