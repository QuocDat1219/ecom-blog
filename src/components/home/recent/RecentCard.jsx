import React from "react";
import { list } from "../../data/Data";
import "./recent.css";
import { Link } from "react-router-dom";
const RecentCard = () => {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type, date } = val;
          return (
            <div className="recentCard" key={index}>
              <div className="RecentC_img">
                <Link to="/tintuc1">
                  <img src={cover} alt="" />
                </Link>
              </div>
              <div className="text">
                <div className="category flexs">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>

                  <span
                    style={{
                      background: "#007bff",
                      color: "#fff",
                    }}
                  >
                    {date}
                  </span>
                </div>
                <h4 className="h5_location">{name}</h4>
                <div className="is-divider"></div>
                <Link to="/tintuc1">
                  <span className="p_location">
                    {location.slice(0, 40)}...
                    {/* <i className='fa fa-location-dot'></i>  */}
                  </span>
                </Link>
              </div>
              {/* <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>{" "}
                  <label htmlFor="">/sqft</label>
                </div>
                <span>{type}</span>
              </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
