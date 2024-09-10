import React, { useEffect, useState } from "react";
import Orders from "./OrderProcessTest";
import Image from "next/image";
import searchicon from "./../../images/search.png";
import plusicon from "./../../images/plus.png";
import lolicon from "./../../images/lolicon.png";
import viewicon from "./../../images/view.png";
import styles from "./OrderProcessBox.module.css";
import base from "../../api/base";

function ActiveBoostBox() {
  return (
    <div className={styles.OrderProCon}>
      <div className={styles.FilterOrders}>
        <div className={styles.SearchBar}>
          <Image
            src={searchicon}
            width={17}
            height={17}
            alt="dashicon"
            className="float-left mt-3 ml-4"
          />
          <h1 className="float-left mt-2 ml-2 opacity-0.1">Search</h1>
        </div>
        <div className={styles.FilterGame}>
          <Image
            src={plusicon}
            width={12}
            height={12}
            alt="dashicon"
            className="float-left mt-3 ml-4"
          />
          <h1 className="mt-1.5 ml-10">Select Game</h1>
        </div>
        <div className={styles.FilterGame}>
          <Image
            src={plusicon}
            width={12}
            height={12}
            alt="dashicon"
            className="float-left mt-3 ml-4"
          />
          <h1 className="mt-1.5 ml-10">Select Queue</h1>
        </div>
      </div>
      <div className={styles.OrderContainer}>
        <table className={styles.OrderBox}>
          <tbody>
            <tr className={styles.RowHeading}>
              <th className={styles.BoostID}>
                <h1 className={styles.OrderHeading}>BOOST ID</h1>
              </th>
              <th className={styles.OrderGame}>
                <h1 className={styles.OrderHeading}>GAME</h1>
              </th>
              <th className={styles.OrderQueue}>
                <h1 className={styles.OrderHeading}>QUEUE</h1>
              </th>
              <th className={styles.OrderBooster}>
                <h1 className={styles.OrderHeading}>BOOSTER</h1>
              </th>
              <th className={styles.OrderStatus}>
                <h1 className={styles.OrderHeading}>STATUS</h1>
              </th>
              <th className={styles.OrderAction}>
                <h1 className={styles.OrderHeading}>ACTION</h1>
              </th>
            </tr>
            <tr className={styles.NewOrders}>
              <th className={styles.BoostID}>
                <h1 className={styles.OrderID}>#122031</h1>
                <h1 className={styles.OrderDate}>21/02/2024 09:00</h1>
              </th>
              <th className={styles.OrderGame}>
                <h1 className={styles.GameText}>
                  <Image
                    src={lolicon}
                    width={42}
                    height={42}
                    alt="dashicon"
                    className="float-left"
                  />
                  Silver&nbsp;I&nbsp;(0-20LP)&nbsp;→&nbsp;Gold&nbsp;IV
                </h1>
              </th>
              <th className={styles.OrderQueue}>
                <h1 className={styles.TextQueue}>Rank Boosting</h1>
              </th>
              <th className={styles.OrderBooster}>
                <h1 className={styles.BoosterText}>Unassigned</h1>
              </th>
              <th className={styles.OrderStatus}>
                <h1 className={styles.StatusText}>Missing account details</h1>
              </th>
              <th className={styles.OrderAction}>
                <h1 className={styles.ViewOrder}>
                  {" "}
                  <Image
                    src={viewicon}
                    width={23}
                    height={23}
                    alt="dashicon"
                    className="float-left"
                  />
                  &nbsp;&nbsp; View Order
                </h1>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActiveBoostBox;
