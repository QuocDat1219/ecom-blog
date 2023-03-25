import React from "react";
import Back from "../common/Back";
import RecentCard from "../home/recent/RecentCard";
import "../home/recent/recent.css";
import "./contentsBlog.css";
import Side from "../blog/Side";
import { contentBlog } from "../data/Data";
import { Link } from "react-router-dom";
const contentsBlog = () => {
  return (
    <>
      <div>
        {contentBlog.map((val, index) => {
          const { title, poster } = val;
          return (
            <main>
              <div className="containers" key={index}>
                <section className="contentsBlog mtop">
                  <Link to="/blog">
                    <h6 className="contentBlog_h6">NEWS</h6>
                  </Link>
                  <div className="titleBlog">
                    <h1 className="contentBlog_h1">{title}</h1>
                    <div className="contentBlog_diveder"></div>
                    <h6 className="contentBlog_poster">{poster}</h6>
                  </div>
                  <div className="contentBlog_video">
                    <iframe
                      width="100%"
                      height="574"
                      src="https://www.youtube.com/embed/gecOcAL_VUo"
                      title="Trạm sạc tư nhân 22kw chuẩn IEC61851 đầu tiên tại Hà Nội giá điện chỉ 3500 vnd/1kw"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="contentBlog_span">
                    <span>
                      The electric car charger is an important device to
                      maintain the energy of an electric vehicle. Ensuring safe
                      charging is very important. If not used properly, the
                      charger may cause danger to the user. Moreover, it also
                      damages the charging system and battery of electric
                      vehicles. So, in this article, we will show you how to use
                      the features of an electric car charger to ensure safe and
                      optimal charging efficiency of the car battery.
                    </span>
                  </div>
                </section>
                <section className="sideContent">
                  <Side />
                </section>
              </div>
            </main>
          );
        })}
      </div>
    </>
  );
};

export default contentsBlog;
