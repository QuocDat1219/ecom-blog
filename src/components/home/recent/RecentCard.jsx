import React from "react";
import { list } from "../../data/Data";
import "./recent.css";
import { Link } from "react-router-dom";
const RecentCard = () => {
  return (
    <>
      <div className="content grid3 mtop md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 ">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type, date } = val;
          return (
            <div className="recentCard bg-color-card" key={index}>
              <div className="RecentC_img">
                <Link to="/tintuc1">
                  <img src={cover} className="rounded-md" alt="" />
                </Link>
              </div>
              <div className="text pt-1">
                <div className="category flexs rounded-md">
                  <span className="bg-color-basic text-text-color rounded-md p-1">
                    {category}
                  </span>

                  <span className="bg-color-basic text-text-color rounded-md p-1">
                    {date}
                  </span>
                </div>
                <h4 className="h5_location text-text-color pt-3">{name}</h4>
                <div className="is-divider "></div>
                <Link to="/tintuc1">
                  <span className="p_location text-text-color hover:text-color-title">
                    {location.slice(0, 40)}...
                    {/* <i className='fa fa-location-dot'></i>  */}
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
