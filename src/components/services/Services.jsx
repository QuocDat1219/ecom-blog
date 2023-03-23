import React from "react";
import img from "../images/sacdien.jpg";
import Back from "../common/Back";
import "../home/featured/Featured.css";
import FeaturedCard from "../home/featured/FeaturedCard";
import img2 from "../images/linkkien.jpg";
import img3 from "../images/tramsac.jpg";
import "./Services.css";
const Services = () => {
  return (
    <>
      <section className="services mb">
        <Back name="Dịch vụ" title="Các dịch vụ của chúng tôi" cover={img} />
        <div class="containers">
          <div class="row">
            <div class="flex justify-center pt-3 pl-4">
              <img class="anh" src={img2} alt="linh kien" />
            </div>
            <div class="col-sm" id="text1">
              <p>
                <h2 class="tieude">
                  Một hệ thống sạc cần đảm bảo sạc nhanh, sạc an toàn và luôn
                  sẵn sàng
                </h2>
                <br />
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
        </div>{" "}
        <div class="imgdai">
          <Back cover={img3} />
        </div>
        <div class="flex justify-center gap-4 grid gird-col-1 text-center">
          <div>
            <img src={img2} alt="" class="imgblog" />
            <p>Tên gì đó</p>
          </div>
          <div>
            <img src={img2} alt="" class="imgblog" />
            <p>Tên gì đó</p>
          </div>
          <div>
            <img src={img2} alt="" class="imgblog" />
            <p>Tên gì đó</p>
          </div>
        </div>

      </section>
    </>
  );
};

export default Services;
