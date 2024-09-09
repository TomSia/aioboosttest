import React from "react";
import Image from "next/image";
import tfticon from "./../../images/tfticon.png";
import styles from "./ActiveBoostBox.module.css";

const ActiveBoostBox = () => {
  return (
    <div className={styles.ABoostCon}>
      <div className={styles.ABoostBox}>
        <Image
          src={tfticon}
          width={70}
          height={70}
          alt="dashicon"
          className="mt-5 m-auto"
        />
        <h1 className={styles.ABTitle}>Teamfight Tatics</h1>
        <p className={styles.ProgText}>Progress: 63%</p>
        <div className={styles.ProgBar}></div>
        <h1 className={styles.CostText}>$212.22</h1>
        <p className={styles.BoostID}>Boost ID#122031</p>
      </div>
    </div>
  );
};

export default ActiveBoostBox;
