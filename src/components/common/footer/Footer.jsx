import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/contact');
  };
  return (
    <footer>
    <div className="footer-content">
      <div className="company-info">
        <div className="logo">
          <img src="https://everev.vn/wp-content/uploads/2023/03/everev-logo-1-e1678267237257.png" alt="" />
        </div>
        <h3>Công ty Cổ phần EverEV</h3>
        <p>Ever Ev là công ty phân phối, lắp đặt và vận hành sạc ô tô điện hàng đầu Việt Nam</p>
      </div>

      <div className="contact-info">
        <h3>Liên hệ</h3>
        <p>300B Minh Khai, Phường Minh Khai, Quận Hai Bà Trưng, Hà Nội, Việt Nam</p>
        <p>0909184567</p>
        <p>info@everev.vn</p>
        
      </div>
      <FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "#0643ac",}} />
      <div className="map-container">
        <h3>Địa chỉ</h3>
        <iframe
          title="EverEV Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3723.0780830673913!2d105.857308!3d20.998565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314aba8fbcfd8217%3A0x10473b8a8bceda35!2zMTY1IFbDqiBNaW5oIEtoYWksIFBoxrDhu51uZyBNaW5oIEtoYWksIEjDoCBOaHXhur8sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1648017403731!5m2!1svi!2s"
          width="300"
          height="160"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2023 EverEV. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer;
