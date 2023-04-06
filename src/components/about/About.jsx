import React, { useState } from "react";
import Back from "../common/Back";
import HeadingAbout from "./HeadingAbout/HeadingAbout";
import img from "../images/Panel.jpg";
import imgAb from "../images/imgAb_1.png";
import "./about.css";
import SimpleSlider from "./SliderImage";
import Infomation from "./AboutInfomation";
import Sliderimg from "./Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  const [showText, setShowText] = useState(false);
  const [showTexFirst, setShowTextFirst] = useState(false);
  const [showTexSecond, setShowTextSecond] = useState(false);
  const handleClick = () => {
    setShowText(!showText);
  };
  const handleClickFirst = () => {
    showTexFirst(!setShowTextFirst);
  };
  const handleClickLast = () => {
    showTexSecond(!setShowTextSecond);
  };
  return (
    <>
      <section className="about">
        <Back cover={img} />
        <div className="HeadingA ">
          <HeadingAbout title="Chúng tôi là ai" />
        </div>
        <div className="containers flexs ">
          <div class="image-container py-2">
            <img src={imgAb} />
          </div>
          <div className="text-container text-text-color bg-color-card break-words overflow-y-hidden shadow">
            <p className="mt-5 ml-5 mr-5 lg-text-[15px] ">
              EverEV là một trong những đơn vị tiên phong trong lĩnh vực sạc ô
              tô điện. Công ty là nhà phân phối chính hãng của nhiều thương hiệu
              sạc ô tô hàng đầu trên thế giới như Starcharge.
            </p>
            <p className="ml-5 mr-5 mb-5">
              Được sự ủy quyền của Starchage, EverEV chính thức trở thành đơn vị
              thực hiện công tác bảo trì và sửa chữa các sạc ô Starcharge trên
              toàn bộ lãnh thổ Việt Nam.
            </p>
          </div>
        </div>
        <div className="HeadingA_2">
          <HeadingAbout title="Câu chuyện khởi nghiệp" />
        </div>

        <div className="containers flexs mtop">
          <div
            className="text-container text-text-color bg-color-card break-words overflow-y-scroll shadow"
            style={{ height: "480px" }}
          >
            <div className="about_diveder"></div>

            <div className="btn_show">
              <div
                className="toggle-button-container"
                style={{ display: "inline-flex" }}
              >
                <p
                  className="toggle-button"
                  onClick={() => setShowText(!showText)}
                  style={{ flexDirection: "row-reverse" }}
                >
                  {showText ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-up"
                    >
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-down"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </p>
              </div>
              <p>
                <span className="arrow">
                  Năm 2019, nắm bắt xu thế chuyển dịch toàn cầu sang sử dụng
                  năng lượng tái tạo thay cho năng lượng có nguồn gốc hóa thạch
                  cùng với rất nhiều chính sách khuyến khích từ Chính phủ, công
                  ty EverSolar (www.eversolar.vn) đã được thành lập
                </span>
              </p>
            </div>
            {showText && (
              <div className="div_show">
                <span className="text_show">
                  và tập trung đầu tư vào các hệ thống điện mái nhà. Chỉ trong
                  thời gian chưa đầy 1 năm, công ty đã nhanh chóng đầu tư gần
                  20mwp điện mặt trời mái nhà.
                </span>
              </div>
            )}

            <div className="about_diveder"></div>

            <div className="btn_showFirst">
              <div
                className="toggle-button-container"
                style={{ display: "inline-flex" }}
              >
                <p
                  className="toggle-button"
                  onClick={() => setShowTextFirst(!showTexFirst)}
                  style={{ flexDirection: "row-reverse" }}
                >
                  {showTexFirst ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-up"
                    >
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-down"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </p>
              </div>
              <p>
                <span className="arrow">
                  Cùng thời gian đó, ban lãnh đạo công ty cũng đã nhận thức rõ
                  về xu thế phát triển tất yếu của thị trường ô tô điện cùng với
                  các dịch vụ đi kèm.
                </span>
              </p>
            </div>
            {showTexFirst && (
              <div className="div_show">
                <span className="text_show">
                  Công ty đã trúng thầu dự án lắp đặt 2 sạc ô tô xe điện tại
                  siêu thị Aeon Hà Đông. Có thể xem đây là hai trong số những
                  sạc ô tô xe điện đầu tiên tại Việt Nam. Với tiền đề này, công
                  ty tiếp tục nghiên cứu sâu và mở rộng tiếp xúc với các đối tác
                  về sạc ô tô lớn trên thế giới.
                </span>
              </div>
            )}

            <div className="about_diveder"></div>

            <div className="btn_showFirst">
              <div
                className="toggle-button-container"
                style={{ display: "inline-flex" }}
              >
                <p
                  className="toggle-button"
                  onClick={() => setShowTextSecond(!showTexSecond)}
                  style={{ flexDirection: "row-reverse" }}
                >
                  {showTexSecond ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-up"
                    >
                      <path d="M18 15l-6-6-6 6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-down"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </p>
              </div>
              <p>
                <span className="arrow">
                  Cùng thời gian đó, ban lãnh đạo công ty cũng đã nhận thức rõ
                  về xu thế phát triển tất yếu của thị trường ô tô điện cùng với
                  các dịch vụ đi kèm.
                </span>
              </p>
            </div>
            {showTexSecond && (
              <div className="div_show">
                <span className="text_show">
                  Công ty đã trúng thầu dự án lắp đặt 2 sạc ô tô xe điện tại
                  siêu thị Aeon Hà Đông. Có thể xem đây là hai trong số những
                  sạc ô tô xe điện đầu tiên tại Việt Nam. Với tiền đề này, công
                  ty tiếp tục nghiên cứu sâu và mở rộng tiếp xúc với các đối tác
                  về sạc ô tô lớn trên thế giới.
                </span>
              </div>
            )}
          </div>
          <div class="image-container">
            <img src={imgAb} />
            <div class="image-container-two">
              <img src={imgAb} />
            </div>
          </div>
        </div>
      </section>
      <div className="slider">
        <SimpleSlider />
      </div>
      <div className="HeadingA_3">
        <HeadingAbout title="Thông tin về công ty" />
      </div>
      <div>
        <Infomation />
      </div>
      <div className="py-[50px]">
        <HeadingAbout title="Đối tác chiến lược" />
        <div className="About_slide">
          <Sliderimg />
        </div>
      </div>
    </>
  );
};

export default About;
