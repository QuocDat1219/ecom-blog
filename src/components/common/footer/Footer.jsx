import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaFacebookSquare } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <div className="logo-footer">
              <img src="https://everev.vn/wp-content/uploads/2023/03/everev-logo-1-e1678267237257.png" alt="" />
            </div>
            <h3 className="title-footer">Công ty Cổ phần EverEV</h3>
            <p>Ever Ev là công ty phân phối, lắp đặt và vận hành sạc ô tô điện hàng đầu Việt Nam</p>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <h3 className="title-footer">Liên hệ</h3>
            <p>300B Minh Khai, Phường Minh Khai, Quận Hai Bà Trưng, Hà Nội, Việt Nam</p>
            <p>0909184567</p>
            <p>info@everev.vn</p>
            <FaFacebookSquare size={30}/>
          </Col>
          <Col xs={12} sm={4} md={4} lg={4} xl={4}>
            <h3 className="title-footer">Địa chỉ</h3>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14899.705121178167!2d105.86054900000002!3d20.995592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac0e30147693%3A0x9affe13d92e5bf4c!2zMzAwIFAuIE1pbmggS2hhaSwgTWFpIMSQ4buZbmcsIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2sus!4v1679312280942!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              className="w-100"
              height="200"
              frameBorder="0"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
