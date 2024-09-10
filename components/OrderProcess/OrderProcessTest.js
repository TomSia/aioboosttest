'use cilent'
import React, { useEffect, useState } from "react";
import base from "../../api/base";
import OrderProcess from "./OrderProcessBox";
import ActiveBoostBox from "./OrderProcessBox";

function Orders() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    base("BoosterDash")
      .select({ view: "Grid View" })
      .eachPage((records, fetchNextPage) => {
        setEmployees(records);
        fetchNextPage();
      });
  });
  return (
    <div className="Home">
      {employees.length > 0 (
        <>
        {employees.map((e) => (
            <OrderProcess key={e.id} employee={e} />
          ))}
        </>
      )};

    </div>
  )
}

export default Orders;
