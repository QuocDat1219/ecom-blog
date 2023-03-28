import React from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import RecentCard from "./RecentCard";
import SliderRecent from "./SliderRecent";
const Recent = () => {
  const data = {};
  return (
    <>
      <section className="recent padding ">
        <div className="containers">
          <Heading
            className=""
            title="Sản phẩm"
            subtitle="“EverEV là nhà phân phối chính hãng của các thương hiệu sạc ô tô hàng đầu thế giới như Starcharge, COSTEL, FIRMER.. được chia thành 2 dòng sản phẩm:"
          />
          <div className="recent-info ">
            <div className="flex justify-between flex-col md:flex-row  gap-2 mt-10">
              <div className="bg-[#97DEFF] w-[100%] p-10 flex flex-col justify-center  ">
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="w-[100px] h-[70px] "
                    src="	https://everev.vn/wp-content/uploads/2022/11/AC-500-%C3%97-350-px.png"
                    alt=""
                  />
                  <p className="text-2xl font-bold">Các hệ thống sạc ô tô AC</p>
                  <p>
                    Dòng sản phẩm dành cho gia đình, doanh nghiệp quy mô nhỏ
                  </p>
                </div>
              </div>
              <div className="bg-[#97DEFF] w-[100%]  p-10 flex flex-col justify-center  ">
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="w-[100px] h-[70px] "
                    src="	https://everev.vn/wp-content/uploads/2022/11/AC-500-%C3%97-350-px.png"
                    alt=""
                  />
                  <p className="text-2xl font-bold">Các hệ thống sạc ô tô AC</p>
                  <p>
                    Dòng sản phẩm dành cho gia đình, doanh nghiệp quy mô nhỏ
                  </p>
                </div>
              </div>
            </div>
            <SliderRecent
              title={"SẠC AC"}
              des={"Dòng sản phẩm dành cho gia đình, doanh nghiệp quy mô nhỏ"}
              data={data}
            />
            <SliderRecent
              title={"SẠC DC"}
              des={"Dòng sản phẩm dành cho gia đình, doanh nghiệp quy mô nhỏ"}
              data={data}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
