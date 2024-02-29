import React from "react";
import "./index.css"
import Header from "./Header";
import Footer from "./Footer";
import main_img from "./img/main.jpg"

const Main = () => {
    return(
        <div>
            <div id="container">
                <Header />
                <div id="wrap">
                    <div id="container" style={{marginTop:'4%'}}>
                        <div id="contents" style={{width:'96%', margin: "0 auto"}}>
                            <div className="swiper-slide">
                                <img src={main_img} alt="main.jpg" width="100%" />
                            </div>
                            <div style={{fontSize: "3vw", fontWeight: "700", width: "84%", margin: "40px auto"}}>
                                @SEOULBASED STUDIO. We make something cool. since 2021 based in seoul. 2ND floor, 4,Seongmisan-ro 5-an-gil, Mapo-gu, Seoul
                            </div>
                        </div>
                        <hr className="layout" />
                        <div style={{height:"100px"}}></div>
                    </div>
                    <hr className="layout" />
                </div>
                <hr className="layout" />
                <Footer />
            </div>
        </div>
    )
}

export default Main;