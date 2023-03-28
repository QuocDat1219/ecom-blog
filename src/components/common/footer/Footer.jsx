import React from "react";
const Footer = () => {
  return (
    <>
      <div className="bg-color-card w-100% h-0.5"></div>
      <footer>
        <div className="bg-color-basic pt-3 pb-3">
          <div className="footer-content flex flex-col md:flex-row  md:justify-around md:items-center text-center md:text-left">
            <div className="company-info md:mr-8 md:flex  gap-4">
              <div className="w:20 sm:w-100% h-24 flex justify-center">
                <img
                  className="w-40"
                  src="https://everev.vn/wp-content/uploads/2023/03/everev-logo-1-e1678267237257.png"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h3 className=" text-color-title text-center text-[20px] font-bold">
                  Công ty Cổ phần EverEV
                </h3>
                <p className="text-text-color">
                  Ever Ev là công ty phân phối, lắp đặt và vận hành sạc ô tô
                  điện hàng đầu Việt Nam
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-color-title text-center text-[20px] font-bold">
                  Liên hệ
                </h3>
                <div className="text-text-color">
                  <p>
                    300B Minh Khai, Phường Minh Khai, Quận Hai Bà Trưng, Hà Nội,
                    Việt Nam
                  </p>
                  <p>0909184567</p>
                  <p>info@everev.vn</p>
                </div>
              </div>
              <div className="">
                <h3 className="text-color-title text-center text-[20px] font-bold">
                  Địa chỉ
                </h3>
                <iframe
                  title="EverEV Map"
                  className=""
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3723.0780830673913!2d105.857308!3d20.998565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314aba8fbcfd8217%3A0x10473b8a8bceda35!2zMTY1IFbDqiBNaW5oIEtoYWksIFBoxrDhu51uZyBNaW5oIEtoYWksIEjDoCBOaHXhur8sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1648017403731!5m2!1svi!2s"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-color-card w-100% h-0.5"></div>
        <div className="p-3 bg-color-basic">
          <p className="text-center text-text-title font-bold">
            &copy; 2023 EverEV. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
