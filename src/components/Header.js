import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import search_img from "../img/search.png";

const Header = () => {
  return (
    <>
      <div className="header_1">
        <style>
          @import url('https://fonts.cdnfonts.com/css/rosehot-free-version');
        </style>
        <a href="/" className="logo">
          SEOULBASED
        </a>
      </div>
      <div className="header_2">
        <img
          src={search_img}
          alt="search"
          style={{ width: "5%", verticalAlign: "middle" }}
        />
        <a
          href="https://www.instagram.com/seoulbased.kr"
          target="_blank"
          className="logo"
          rel="noopener noreferrer"
          style={{ fontFamily: "roboto", fontWeight: "700", fontSize: "7rem" }}
        >
          Instagram
        </a>
      </div>
      <div className="category">
        <div className="sidebar_cate_big">
          <Link to="/MADE">MADE</Link>
          <Link to="/NEW-IN">NEW IN</Link>
          <Link to="/BASIC">BASIC</Link>
          <Link to="/UNISEX">UNISEX</Link>
          <Link to="/OUTER">OUTER</Link>
          <Link to="/TOP">TOP</Link>
          <Link to="/BOTTOM">BOTTOM</Link>
          <Link to="/DRESS">DRESS</Link>
          <Link to="/SHOES-BAG-ACC">SHOES / BAG / ACC</Link>
          <Link to="/당일출고">당일출고</Link>
          <Link to="/SALE">SALE</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
