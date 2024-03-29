import React from "react";
import "../index.css";
import main_img from "../img/main.jpg";

const Main = () => {
  const isSmallScreen = window.innerWidth <= 665;

  return (
    <div>
      <div id="container">
        <div id="wrap">
          <div id="container" style={{ marginTop: "4%" }}>
            <div  style={{ width: "96%", margin: "0 auto" }}>
              <div className="swiper-slide">
                <img src={main_img} alt="main.jpg" width="100%" />
              </div>
              
              <div
                style={{
                  fontSize: "3vw",
                  fontWeight: "700",
                  width: "84%",
                  margin: "40px auto",
                }}
              >
                @SEOULBASED STUDIO. We make something cool. since 2021 based in
                seoul. 2ND floor, 4,Seongmisan-ro 5-an-gil, Mapo-gu, Seoul
              </div>
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

export default Main;
