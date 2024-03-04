import React from "react";
import top1 from "../img/top1.webp";

const TopItem = () => {
  const importImages = () => {
    let images = {};
    for (let i = 1; i <= 40; i++) {
      images[`top1_${i}`] = require(`../img/top1_${i}.jpg`);
    }
    return images;
  };

  const images = importImages();

  return (
    <div id="container" style={{ marginTop: "4%" }}>
      <div
        id="contents"
        style={{
          width: "96%",
          margin: "0 auto",
          // clear: "both",
          // paddingTop: "6px",
          // overflowX: "hidden",
        }}
      >
        <div
          className="section_left"
          style={{
            borderRight: "0px solid #efefef",
            clear: "both",
            textAlign: "center",
            margin: "10px 0 0 0px",
          }}
        >
          <img src={top1} alt="top1" className="BigImage" style={{width: "100%"}} />
          <div className="section_right" style={{textAlign: "start"}}>
            <h2 style={{ fontWeight: "400", fontSize: "5rem" }}>
              미유 체크 셔츠
            </h2>
            <table summary>
              <tbody>
                {/* <tr>
                  <td>
                    <span style={{ fontSize: "18px", color: "#000000" }}>
                      미유 체크 셔츠
                    </span>
                  </td>
                </tr> */}
                <tr>
                  <td style={{ whiteSpace: "pre-line" }}>
                    <span style={{ fontSize: "3rem", color: "#000000" }}>
                      <strong>44,000원</strong>
                      <input
                        id="product_price"
                        name="product_price"
                        value
                        type="hidden"
                      ></input>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "pre-line" }}>
                    <span style={{ fontSize: "2.5rem", color: "#555555" }}>
                      택배
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style={{ whiteSpace: "pre-line" }}>
                    <span style={{ fontSize: "2.5rem", color: "#555555" }}>
                      <input
                        id="delivery_cost_prepaid"
                        name="delivery_cost_prepaid"
                        value="P"
                        type="hidden"
                      ></input>
                      <strong>3,000원</strong>
                      (100,000원 이상 구매 시 무료)
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="detail_section" style={{ marginTop: "30px" }}>
            <div className="prdDetail">
              <div>
                <br />
                <br />
                <br />
                체크를 사랑하시는 서둥이들 꼭 주목해주셔야 할 셔츠입니다
                <br />
                <br />
              </div>
              <div>
                윈도페인 체크원단에 크링클로 편직된 원단을 사용하여 자연스럽고
                독특한 주름이 들어가 있으며
              </div>
              <div>
                크링클이 잡힌 원단으로 세탁 후에도 툭툭 털어서 주름걱정 없이
                착용 가능합니다
                <br />
                <br />
              </div>
              <div>
                단품 또는 여름철에는 이너 위에 툭 걸쳐 아우터로도
                <br />
                활용하기 좋은 제품입니다
              </div>
              <div>
                <br />
                <br />
                <br />
                <br />
                Texture - cotton 100
                <br />
                <br />
                <br />
                Size - 어깨 51.5 가슴 55 암홀 25 팔길이 63 총장 77
                <br />
                <br />
                Fitting color: all
                <br />
                Fitting size : FREE
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <div style={{ content: " ", height: "40px! important" }}></div>
            {Object.keys(images).map((key, index) => (
              <div>
                <div
                  key={index}
                  style={{
                    display: "block",
                    content: " ",
                    height: "40px",
                  }}
                ></div>
                <img src={images[key]} alt={"image" + key} style={{width: "50%"}} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopItem;
