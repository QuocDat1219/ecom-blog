import React from "react";
import Back from "../common/Back";
import HeadingAbout from "./HeadingAbout/HeadingAbout";
import img from "../images/Panel.jpg";
import imgAb from "../images/imgAb_1.png";
import "./about.css";
import SimpleSlider from "./SliderImage";
import Infomation from "./AboutInfomation";
import Sliderimg from "./Slide";
const About = () => {
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
          <div className="text-container text-text-color bg-color-card break-words overflow-y-scroll shadow">
            <p>
              EverEV là một trong những đơn vị tiên phong trong lĩnh vực sạc ô
              tô điện. Công ty là nhà phân phối chính hãng của nhiều thương hiệu
              sạc ô tô hàng đầu trên thế giới như Starcharge.
            </p>
            <p>
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
          <div class="text-container text-text-color bg-color-card break-words overflow-y-scroll shadow" >
            <p>
              EverEV là một trong những đơn vị tiên phong trong lĩnh vực sạc ô
              tô điện. Công ty là nhà phân phối chính hãng của nhiều thương hiệu
              sạc ô tô hàng đầu trên thế giới như Starcharge.
            </p>
            <p>
              Được sự ủy quyền của Starchage, EverEV chính thức trở thành đơn vị
              thực hiện công tác bảo trì và sửa chữa các sạc ô Starcharge trên
              toàn bộ lãnh thổ Việt Nam.
            </p>
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
