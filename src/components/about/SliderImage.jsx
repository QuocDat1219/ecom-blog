import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Slider.css";
const Example = () => {
  const Arrow = ({ direction, clickFunction, glyph }) => (
    <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
      {glyph}
    </div>
  );
  const images = [
    "https://everev.vn/wp-content/uploads/2022/11/de4bc02058319e6fc720.jpg",
    "https://everev.vn/wp-content/uploads/2022/11/a519bd762567e339ba76-1-1.jpg",
    "https://everev.vn/wp-content/uploads/2022/11/fd738d1fb90f7f51261e-1-1.jpg",
  ];
  const properties = {
    duration: 4000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    prevArrow: <Arrow direction="prev" />,
    nextArrow: <Arrow direction="next" />,
    arrows: true,
    pauseOnHover: true,
  };
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[0]})` }}>
            <span>
              <strong>Chất lượng: </strong> EverEV khẳng định sẽ luôn cung cấp
              tới khách hàng các sản phẩm chính hãng từ các thương hiệu uy tín
              hàng đầu.
              <br />
              <strong>Chuyên nghiệp: </strong> Mọi sản phẩm phải có các quy
              trình chuẩn mực từ khâu lắp đặt, vận hành và bảo trì. Đội ngũ cán
              bộ, nhân viên EverEV được đào tạo kỹ và trang bị đúng tiêu chuẩn
              nghề nghiệp.
              <br />
              <strong>Tiên phong: </strong> EverEV thành lập với tâm thế nhà
              tiên phong trong lĩnh vực sạc ô tô và sẽ nỗ lực không ngừng duy
              trì tâm thế đó thông qua việc học hỏi, cập nhật không ngừng về
              công nghệ và xu thế.
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[1]})` }}>
            <span>
              <strong>Tầm nhìn</strong>: EverEV sẽ trở thành một trong những
              công ty hàng đầu về phân phối, lắp đặt và cung ứng các dịch vụ vận
              hành, bảo trì, sửa chữa sạc ô tô trên phạm vi cả nước.
            </span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[2]})` }}>
            <span>
              <strong>Sứ mệnh:</strong> Góp phần thúc đẩy nhanh sự phát triển
              của ngành ô tô điện Việt Nam vì một tương lai phát triển bền vững
              của đất nước.
            </span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Example;
