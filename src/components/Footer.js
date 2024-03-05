import React, {useContext} from "react";
import "../index.css";
import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const isSmallScreen = window.innerWidth <= 665;
  const {cart} =useContext(CartContext);

  return (
    <>
      <div className="footer_1">
        <div className="footer_1_left">
          Login Join My Accout Order list Notice QnA Review
        </div>
      <div className="footer_1_right"><div className="cartNum">{cart.length}</div><Link to="/Cart">Shopping cart</Link></div>
      </div>
      <div className="footer_2">
        <div style={{ marginLeft: "2%" }}>
          owner 신다빈 business no652-56-00598 mail-order no 2022-서울중구-1420
          address 03968 서울 마포구 성미산로5안길 4 성산 지오 202호
        </div>
      </div>
    </>
  );
};

export default Footer;
