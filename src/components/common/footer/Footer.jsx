import React from "react"

const Footer = () => {
  return (
    <>
      <div className="bg-color-basic w-[100%] h-[200px] text-text-color">Hello liên hệ </div>
      <hr className="text-text-color"/>
      <footer>
        <div className="bg-color-basic p-3">
          <div className="footer-content flex flex-col md:flex-row md:justify-center md:items-center text-center md:text-left">
            <div className="company-info md:mr-8">
              <div className="w-[120px] h-[80px] ml-auto mr-auto sm:w-[230px] sm:h-[150px]">
                <img
                  src="https://everev.vn/wp-content/uploads/2023/03/everev-logo-1-e1678267237257.png"
                  alt=""
                />
              </div>
              <h3 className="font-medium text-color-title text-center text-[20px]">Công ty Cổ phần EverEV</h3>
              <p className="text-text-color">Ever Ev là công ty phân phối, lắp đặt và vận hành sạc ô tô điện hàng đầu Việt Nam</p>
            </div>

            <div className="md:mr-8">
              <h3 className="text-color-title text-center text-[20px]">Liên hệ</h3>
              <div className="text-text-color">
                <p>300B Minh Khai, Phường Minh Khai, Quận Hai Bà Trưng, Hà Nội, Việt Nam</p>
                <p>0909184567</p>
                <p>info@everev.vn</p>
              </div>
            </div>

            <div className="justify-center items-center">
              <h3 className="text-color-title text-center text-[20px]">Địa chỉ</h3>
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
        <div className="bg-gray-600 w-100% h-0.5"></div>
        <div className="p-3 bg-color-basic">
          <p className="text-center text-text-color">&copy; 2023 EverEV. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;
