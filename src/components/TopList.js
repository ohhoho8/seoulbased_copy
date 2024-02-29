import React from "react";
import { Link } from "react-router-dom";
import top1 from "../img/top1.webp";
import top2 from "../img/top2.webp";
import top3 from "../img/top3.webp";
import top4 from "../img/top4.webp";
import top5 from "../img/top5.webp";
import top6 from "../img/top6.webp";
import top7 from "../img/top7.webp";
import top8 from "../img/top8.webp";
import top9 from "../img/top9.webp";
import top10 from "../img/top10.webp";
import top11 from "../img/top11.webp";
import top12 from "../img/top12.webp";

const TopList = () => {
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
              <Link to="/TOP_1">
                <img
                  src={top1}
                  alt="top1"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>미유체크 셔츠</div>
                <div>44,000원</div>
              </div>
            </td>
            <td>
              <Link to="/TOP_1">
                <img
                  src={top2}
                  alt="top2"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>미드90's 롱슬리브</div>
                <div>37,000원</div>
              </div>
            </td>
            <td>
              <Link to="/TOP_1">
                <img
                  src={top3}
                  alt="top3"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>하이 워크 데님 셔츠</div>
                <div>68,000원</div>
              </div>
            </td>
            <td>
              <Link to="/TOP_1">
                <img
                  src={top4}
                  alt="top4"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>런 티셔츠</div>
                <div>17,000원</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/TOP_1">
                <img
                  src={top5}
                  alt="top5"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>가니쉬 배색 스웻 셔츠</div>
                <div>49,000원</div>
              </div>
            </td>
            <td>
              <Link to="/TOP_1">
                <img
                  src={top6}
                  alt="top6"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>시스루 오프 숄더 탑</div>
                <div>26,000원</div>
              </div>
            </td>
            <td>
              <Link to="/TOP_1">
                <img
                  src={top7}
                  alt="top7"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>허그 하프 니트</div>
                <div>44,000원</div>
              </div>
            </td>
            <td>
              <Link to="/TOP_1">
                <img
                  src={top8}
                  alt="top8"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>엠마 레이스 슬리브리스</div>
                <div>22,000원</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Link to="/TOP_1">
                <img
                  src={top9}
                  alt="top9"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>리보 배색 가디건</div>
                <div>32,000원</div>
              </div>
            </td>
            <td>
              <Link to="/TOP_1">
                <img
                  src={top10}
                  alt="top10"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>하임 랩 탑</div>
                <div>27,000원</div>
              </div>
            </td>
            <td>
              <Link to="/TOP_1">
                <img
                  src={top11}
                  alt="top11"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>로쉐 체크 가디건</div>
                <div>32,000원</div>
              </div>
            </td>
            <td>
              <Link to="/TOP_1">
                <img
                  src={top12}
                  alt="top12"
                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                />
              </Link>
              <div className="description">
                <div>오에프 시스루 탑</div>
                <div>24,000원</div>
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

export default TopList;
