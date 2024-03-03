import React from "react";
import { Link } from "react-router-dom";
import dress1 from "../img/dress1.webp";
import dress2 from "../img/dress2.webp";
import dress3 from "../img/dress3.webp";
import dress4 from "../img/dress4.webp";

const DressList = () => {
  return (
    <div id="container" style={{ marginTop: "4%" }}>
      <div
        id="contents"
        style={{
          width: "96%",
          margin: "0 auto",
          clear: "both",
          paddingTop: "6px",
          overflowX: "hidden",
        }}
      >
        <table style={{ width: "100%" }}>
          <tr>
            <td style={{ width: "25%", maxWidth: "25%" }}>
              <Link to="/dress_1">
                <img
                  src={dress1}
                  alt="dress1"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>미유체크 셔츠</div>
                <div>44,000원</div>
              </div>
            </td>
            <td>
              <Link to="/dress_1">
                <img
                  src={dress2}
                  alt="dress2"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>미드90's 롱슬리브</div>
                <div>37,000원</div>
              </div>
            </td>
            <td>
              <Link to="/dress_1">
                <img
                  src={dress3}
                  alt="dress3"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>하이 워크 데님 셔츠</div>
                <div>68,000원</div>
              </div>
            </td>
            <td>
              <Link to="/dress_1">
                <img
                  src={dress4}
                  alt="dress4"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>런 티셔츠</div>
                <div>17,000원</div>
              </div>
            </td>
          </tr>
        </table>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default DressList;
