import React from "react";
import img from "../images/sacdien.jpg";
import Back from "../common/Back";
import "../home/featured/Featured.css";
import img2 from "../images/linkkien.jpg";
import img3 from "../images/tramsac.jpg";
import "./Services.css";
import { tpost } from "../data/Data";

const Services = () => {
  return (
    <>
      <section className="services mb ">
        <Back name="Dịch vụ" title="Các dịch vụ của chúng tôi" cover={img} />
        <div className="containers mx-auto sm:px-4 justify-items-center">
          <div className="flex flex-wrap justify-items-center justify-center items-center">
            <div className="relative  sm:flex-1.5 sm:w-[400px] py-4">
              <img
                className="lg:h-[650px] lg:w-[800px] sm:h-[500px] rounded-[20px]"
                src={img2}
                alt="linh kien"
              />
            </div>
            <div
              className="flex justify-center items-center sm:flex-grow sm:flex-1 w-[300px] sm:h-[250px] mx-auto  sm:ml-[30px] overflow-y-scroll shadow bg-color-card rounded-lg"
            >

              <div className="p-4 ">
                <h2 className="tieude font-bold text-[20px] text-color-title">
                  Một hệ thống sạc cần đảm bảo sạc nhanh, sạc an toàn và luôn
                  sẵn sàng
                </h2>
                <br />
                <p className="text-text-color ">
                  Hệ thống sạc ô tô có tần suất sử dụng cao, do đó khâu bảo trì
                  bảo dưỡng vô cùng quan trọng để có thể đảm bảo độ sẵn sàng của
                  hệ thống cũng như hệ số an toàn tối đa cho người sử dụng và
                  phương tiện. <br /> EverEV là đơn vị uy tín trong việc cung cấp
                  các dịch vụ lắp đặt, vận hành và bảo trì các hệ thống sạc ô tô.
                  EverEV được ủy quyền là đơn vị bảo trì toàn bộ sạc ô tô của
                  Vinfast trên cả nước.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="imgdai">
          <Back cover={img3} />
        </div>
        <div className="containers text-center pt-[20px]">
          <h3 className="text-[24px] pb-[20px] text-text-title">
            Dịch vụ vận hành và bảo hành
          </h3>
          <div class="flex flex-wrap justify-between">
            {tpost.map((val) => (
              <div class="w-full md:w-1/3 px-4 mb-8 md:mb-0 ">
                <div class="relative h-0 pb-[100%] mb-4">
                  <img
                    src={val.cover}
                    alt="Item 3"
                    class="absolute inset-0 w-full h-full object-cover rounded-[20px] shadow"
                  />
                </div>
                <p class="text-text-color leading-relaxed text-center mt-4">
                  {val.title}
                </p>
              </div>
            )).slice(-3)}

          </div>
        </div>

      </section>
    </>
  );
};

export default Services;
