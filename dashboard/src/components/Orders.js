import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    //Fetch all orders
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log("Error fetching orders:", err);
      });
  }, []);

  return (
    // <div className="orders">
    //   <div className="no-orders">
    //     <p>You haven't placed any orders today</p>

    //     <Link to={"/"} className="btn">
    //       Get started
    //     </Link>
    //   </div>
    // </div>
    <div className="order-table">
      <h3 className="title">Orders ({orders.length})</h3>
      <table>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td
                  style={{
                    color: order.mode === "BUY" ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {order.mode}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No orders placed yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
