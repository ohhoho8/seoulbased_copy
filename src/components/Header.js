import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Header = () => {
  const isSmallScreen = window.innerWidth <= 665;

  return (
    <>
      <div className="header_1">
        <style>
          @import url('https://fonts.cdnfonts.com/css/rosehot-free-version');
          fontSize: "3vw"
        </style>
        <a href="/" className="logo">
          SEOULBASED
        </a>
      </div>
      <div className="header_2">
        <a
          href="https://www.instagram.com/seoulbased.kr"
          target="_blank"
          className="logo"
          rel="noopener noreferrer"
          style={{ fontFamily: "roboto", fontWeight: "700", fontSize: "3vw" }}
        >
          Instagram
        </a>
      </div>
      <div className="category">
        <div className="sidebar_cate_big">
          <Link to="/MADE">MADE  </Link>
          <Link to="/NEW-IN">NEW IN  </Link>
          <Link to="/BASIC">BASIC  </Link>
          <Link to="/UNISEX">UNISEX  </Link>
          <Link to="/OUTER">OUTER  </Link>
          <Link to="/TOP">TOP</Link>
          {isSmallScreen&&<br />}
          <Link to="/BOTTOM">  BOTTOM</Link>
          <Link to="/DRESS">  DRESS</Link>
          <Link to="/SHOES-BAG-ACC">  SHOES / BAG / ACC</Link>
          <Link to="/당일출고">  당일출고</Link>
          <Link to="/SALE">  SALE</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
