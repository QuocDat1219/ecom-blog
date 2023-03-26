import React from "react";
import Heading from "../../common/Heading";
import { dataDigitalBestSeller } from "../recent/data.js";
import "./style.css";

const Location = () => {
  return (
    <>
      <section className="p-20 bg-[#97deff] ">
        <div className=" flex flex-col md:flex-row  justify-around items-center  h-[100[px]  text-white">
          <div className="">
            <p className="text-4xl">Nếu bạn cần</p>
            <p className="text-xl mt-3">
              Đừng ngần ngại liên hệ với chúng tôi để biết thêm thông tin về
              công ty hoặc dịch vụ
            </p>
          </div>
          <button className="mt-3 md:mt-0">Liên hệ</button>
        </div>
      </section>
    </>
  );
};

export default Location;
