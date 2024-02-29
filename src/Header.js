import React from "react";
import './index.css';
import search_img from "./img/search.png";

const Header = () => {
    return (
        <>
            <div className="header_1">
                <style>
                    @import url('https://fonts.cdnfonts.com/css/rosehot-free-version'); 
                </style>
                <a href="/" className="logo" >SEOULBASED</a>
            </div>
            <div className="header_2">
                <img src={search_img} alt="search" style={{width: '15px', verticalAlign: 'middle'}} />
                <a href="https://www.instagram.com/seoulbased.kr" target="_blank" className="logo" rel="noopener noreferrer" style={{fontFamily: 'roboto', fontWeight: '700'}}>
                    Instagram
                </a>
            </div>
            <div className="category" >
                <div className="sidebar_cate_big">
                    <a href="/MADE">MADE</a>
                    <a href="/NEW-IN">NEW IN</a>
                    <a href="/BASIC">BASIC</a>
                    <a href="/UNISEX">UNISEX</a>
                    <a href="/OUTER">OUTER</a>
                    <a href="/TOP">TOP</a>
                    <a href="/BOTTOM">BOTTOM</a>
                    <a href="/DRESS">DRESS</a>
                    <a href="/SHOES-BAG-ACC">SHOES / BAG / ACC</a>
                    <a href="/당일출고">당일출고</a>
                    <a href="/SALE">SALE</a>
                </div>
            </div>
        </>
    )
}

export default Header;