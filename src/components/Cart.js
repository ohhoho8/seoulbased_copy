import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "../index.css";

const Cart = () => {
  const isSmallScreen = window.innerWidth <= 665;
  const {cart, addToCart} =useContext(CartContext);

  const cartlist = cart.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <div id="container">
        <div id="wrap">
          <div id="container" style={{ marginTop: "4%" }}>
            <div  style={{ width: "96%", margin: "0 auto" }}>
              <table border="1">
              {Object.keys(cartlist).map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={`../img/${item}_1.jpg`} alt={item} />
                    </td>
                    <td>{cartlist[item]}</td>
                  </tr>
                ))}
              </table>
            </div>
            <hr className="layout" />
            {isSmallScreen ? <div style={{height: "5vh"}}></div> : <div style={{height: "15vh"}}></div>}
          </div>
          <hr className="layout" />
        </div>
        <hr className="layout" />
      </div>
    </div>
  );
};

export default Cart;
