import React from "react";
import { tpost } from "../data/Data";
import "./Tpost.css";

const Tpost = () => {
  return (
    <>
      <section className="tpost">
        {tpost.map((val) => {
          return (
            <div className="box flexSB">
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <div className="text">
                <h1 className="title">{val.title.slice(0, 40)}...</h1>
                {/* <span>a year ago</span> */}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Tpost;
