import React, { useEffect, useState } from "react";
import "./Footer.css";
import logo from "../../images/logomoi.png";
import axios from "axios";
const Footer = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const getInfoweb = async () => {
      await axios.get("https://ecom-oto.vercel.app/api/info/").then((response) => {

        setInfo(response.data);

      })
    }
    getInfoweb()
  }, [])
  return info.length != 0 ? (
    <>
      <div className="bg-color-card w-100% h-0.5"></div>
      <footer>
        <div className="bg-color-footer p-3">
          <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="company-info md:mr-8 text-center">
              <div className="w-[80px] h-[80px] ml-auto mr-auto sm:w-[250px] sm:h-[250px] md:w-[100px] md:h-[100px] xl:w-[150px] xl:h-[150px]">
                <img src={logo} alt="" />
              </div>

              <span>{info[0].slogan}</span>
            </div>
            <div className="contact-info ">
              <h3 className="text-color-title text-2xl font-bold text-center">
                Liên hệ
              </h3>
              <div className="text-text-color">
                <p>
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Địa chỉ liên hệ: {info[0].address}.
                </p>
                <a href="tel:#" className="text-text-color ">
                  <i className="fas fa-phone-alt fa-rotate-90 fa-xs mr-2"></i>
                  Điện thoại: {info[0].hotline}
                </a>
              </div>
            </div>
            <div className="address-info text-center">
              <h3 className="text-color-title text-2xl font-bold">Địa chỉ</h3>
              <div dangerouslySetInnerHTML={info[0].i}></div>
              <iframe
                title="EverEV Map"
                className="w-[250px] h-[100px] sm:w-[150px] sm:h-[100px] md:w-[200px] md:h-[130px] xl:w-[400px] xl:h-[180px] mr-auto ml-auto"
                src="https://www.google.com/maps/place/B%C3%BAn+ch%E1%BA%A3+H%C6%B0%C6%A1ng+Li%C3%AAn/@21.0091018,105.8606125,14z/data=!4m6!3m5!1s0x3135abf2a4ba685d:0x7e67963f30fa90e7!8m2!3d21.0181373!4d105.8538926!16s%2Fg%2F1hm5x9fjz?hl=vi"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                width="500"
                height="250"

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
  ) : <></>;
};

export default Footer;
