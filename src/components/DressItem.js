import React from "react";
import dress1 from "../img/dress1.webp";

const DressItem = () => {
  const importImages = () => {
    let images = {};
    for (let i = 1; i <= 28; i++) {
      images[`dress1_${i}`] = require(`../img/dress1_${i}.jpg`);
    }
    return images;
  };

  const images = importImages();

  return (
    <div id="container" style={{ marginTop: "4%" }}>
      <div
        id="contents"
        style={{
          display: "flex",
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
          <img src={dress1} alt="dress1" className="BigImage" />
          <div className="detail_section" style={{ marginTop: "30px" }}>
            <div className="prdDetail">
              <div>
                <br />
                <br />
                <br />
                * 긴 기장감으로 고급스러운 분위기 연출 가능
                <br />
                * 차분한 컬러 구성
                <br />
                * 코튼 원단을 사용하여 무게감있고 탄탄한 핏감 연출 가능
                <br />
                * 허리벨트 포인트
                <br />
                * 레이어드 / 단독 등으로 활용도 높은 롱원피스
                <br />
                <br />
              </div>
              <div>
                <br />
                <br />
                Texture - cotton 100
                <br />
                <br />
                <br />
                Size - 어깨 37.5 가슴 46 허리 41.5 총장 125
                <br />
                <br />
                Fitting color:
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
                <img src={images[key]} alt={"image" + key} />
              </div>
            ))}
          </div>
        </div>
        <div className="section_right">
          <h2 style={{ fontWeight: "400", fontSize: "17px" }}>
            실비아 벨트 롱 원피스
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
                  <span style={{ fontSize: "14px", color: "#000000" }}>
                    <strong>62,000원</strong>
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
                  <span style={{ fontSize: "12px", color: "#555555" }}>
                    택배
                  </span>
                </td>
              </tr>
              <tr>
                <td style={{ whiteSpace: "pre-line" }}>
                  <span style={{ fontSize: "12px", color: "#555555" }}>
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
      </div>
    </div>
  );
};

export default DressItem;
