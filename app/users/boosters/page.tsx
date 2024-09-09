import React from "react";
import BoosterNav from "../../components/BoosterNav";
import BoosterDash from "../../components/BoosterDash";
import styles from "../../components/BoosterBG.module.css";

const BoosterDashboard = () => {
  return (
    <div className={styles.BoosterBackground}>
      <BoosterNav />
      <BoosterDash />
    </div>
  );
};

export default BoosterDashboard;
