import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import { SearchOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from "antd";
const Hero = () => {
  return (
    <>
      <section className=" flex text-center flex-col justify-center  bg-slate-500">
        <div className="hero relative"></div>
        <div className="absolute flex flex-col sm:w-[50%] md:w-[40%]  xl:w-[40%] justify-center text-start left-[5%] top-[25%]">
          <h1 className="text-white text-[53px]  font-bold">
            Cuộc cách mạng về công nghệ sạc xe điện
          </h1>
          <div className="mt-4">
            <button className="btn-watch">
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
          <div className="gap-2 flex mt-4">
            <button className="btn-nobg">Tìm hiểu thêm</button>
            <button className="bg-color-button">Liên hệ ngay</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
