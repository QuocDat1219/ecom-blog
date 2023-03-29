import React from "react";
import "./Footer.css";
import logo from "../../images/logo.jpg";
const Footer = () => {
  return (
    <>
      <div className="bg-color-card w-100% h-0.5"></div>
      <footer>
        <div className="bg-color-card p-3">
          <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="company-info md:mr-8 text-center">
              <div className="w-[120px] h-[120px] ml-auto mr-auto sm:w-[230px] sm:h-[150px]">
                <img src={logo} alt="" />
              </div>
              <h3 className="text-color-title text-[50px] font-bold mt-2 ">
                THÀNH ĐẠT
              </h3>
            </div>
            <div className="contact-info ">
              <h3 className="text-color-title text-2xl font-bold text-center">
                Liên hệ
              </h3>
              <div className="text-text-color">
                <p>
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Địa chỉ liên hệ: 92 Tổ 3, Ấp 1, Xã Sông Trầu, Huyện Trảng Bom,
                  Tỉnh Đồng Nai.
                </p>
                <a href="tel:#" className="text-text-color ">
                  <i className="fas fa-phone-alt fa-rotate-90 fa-xs mr-2"></i>
                  Điện thoại: 0931116080
                </a>
              </div>
            </div>
            <div className="address-info text-center">
              <h3 className="text-color-title text-2xl font-bold">Địa chỉ</h3>
              <iframe
                title="EverEV Map"
                className="w-[200] h-[150] mr-auto ml-auto"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3723.0780830673913!2d105.857308!3d20.998565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314aba8fbcfd8217%3A0x10473b8a8bceda35!2zMTY1IFbDqiBNaW5oIEtoYWksIFBoxrDhu51uZyBNaW5oIEtoYWksIEjDoCBOaHXhur8sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1648017403731!5m2!1svi!2s"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="bg-color-title w-100% h-0.5"></div>
        <div className="p-3 bg-color-title">
          <p className="text-center text-text-cl font-bold">
            &copy; 2023 THÀNH ĐẠT. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
