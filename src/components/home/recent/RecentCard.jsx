import React from "react";
import { list } from "../../data/Data";
import "./recent.css";
const RecentCard = () => {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type, date } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="RecentC_img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
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
                      background: "#25b579",
                      color: "#fff",
                    }}
                  >
                    {date}
                  </span>
                </div>
                <h5 className="h5_location">{name}</h5>
                <p className="p_location">
                  {/* <i className='fa fa-location-dot'></i>  */}
                  {location}
                </p>
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
