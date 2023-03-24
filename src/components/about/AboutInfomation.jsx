import React from "react";
import Heading from "../../components/common/Heading";
import { team } from "../../components/data/Data";
import "./AboutInfomation.css";
import { Link } from "react-router-dom";
const Infomation = () => {
  return (
    <>
      <section className="team background">
        <div className="containers">
          {/* <Heading title="Our Featured Agents" subtitle="Ban điều hành" /> */}
          <div className="col-inner">
            <div className="row">
              <div className="col">
                <i className="fas fa-map-marker-alt text-blue"></i>
                <span className="text-lg">
                  300B Minh Khai, Phường Minh Khai, Quận Hai Bà Trưng, Hà Nội,
                  Việt Nam
                </span>
              </div>
              <div className="col">
                <i className="fas fa-building text-blue"></i>
                <span className="text-lg">Công ty cổ phần EverEV</span>
              </div>
              <div className="col">
                <i className="fas fa-id-card text-blue"></i>
                <span className="text-lg">
                  Mã số thuế công ty EverEV 0316709177
                </span>
              </div>
            </div>
            <p className="title-col">Ban điều hành </p>
          </div>

          <div className="content mtop grid3">
            {team.map((val, index) => (
              <div className="box" key={index}>
                {/* <button className="btn3">{val.list} Listings</button> */}
                <div className="details">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    {/* <i className="fa-solid fa-circle-check"></i> */}
                  </div>
                  {/* <i className="fa fa-location-dot"></i> */}
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  {/* <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul> */}
                  <div className="">
                    <button className="btn_gmail">
                      <a className="fa fa-envelope fa-lg" href="mailto:#"></a>
                    </button>
                    <button className="btn4">
                      <a className="fa fa-phone-alt fa-lg" href="tel:#"></a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Infomation;
