import React from "react";
import Heading from "../../common/Heading";
import { dataDigitalBestSeller } from "../../data/Data";
import "./awards.css";

const Awards = () => {
  return (
    <>
      <div className="relative awards">
        <img
          src="https://everev.vn/wp-content/uploads/2022/11/de4bc02058319e6fc720.jpg"
          alt=""
          srcset=""
        />
        <div className="awards-title absolute md:top-[30%] ">
          <Heading
            title="Dịch vụ vận hành và bảo trì sản phẩm"
            subtitle="Mọi sản phẩm phải có các quy trình chuẩn mực từ khâu lắp đặt, vận hành và bảo trì. Đội ngũ cán bộ, nhân viên EverEV được đào tạo kỹ và trang bị đúng tiêu chuẩn nghề nghiệp"
          />
          <button className="mt-5 bg-color-button">Tìm hiểu thêm</button>
        </div>{" "}
      </div>
    </>
  );
};

export default Awards;
