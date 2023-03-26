import React from "react";
import "../home/recent/recent.css";
import "./contentsBlog.css";
import Side from "../blog/Side";
import { contentBlog } from "../data/Data";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import { FaFacebook,FaTwitter,FaEnvelope,FaPinterest,FaLinkedin} from 'react-icons/fa';
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
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
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
                  <div className="pt-10 flex justify-center items-center">
                    <div className="contentBlog_diveder "></div>                   
                  </div>
                  <div className="pt-5 pb-5 flex justify-center items-center">
                    <a className="pr-2" href="https://www.facebook.com/sharer.php?u=https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/">
                      <FaFacebook className="hover:text-sky-600 text-gray-400" size={32} />
                    </a>
                    <a className="pr-2" href="https://twitter.com/share?url=https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/">
                      <FaTwitter className="hover:text-sky-600 text-gray-400" size={32} />
                    </a>
                    <a className="pr-2" href="mailto:enteryour@addresshere.com?subject=S%E1%BA%A1c%20xe%20%C4%91i%E1%BB%87n%20KIA%2C%20Huyndai%20b%E1%BA%B1ng%20s%E1%BA%A1c%20EverEV%20t%E1%BA%A1i%20H%C3%A0n%20Qu%E1%BB%91c&body=Check%20this%20out:%20https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/">
                      <FaEnvelope className="text-gray-400 hover:text-black" size={32} />
                    </a>
                    <a className="pr-2" href="https://pinterest.com/pin/create/button/?url=https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/&media=https://everev.vn/wp-content/uploads/2023/03/Screenshot-2023-03-24-111735.png&description=S%E1%BA%A1c%20xe%20%C4%91i%E1%BB%87n%20KIA%2C%20Huyndai%20b%E1%BA%B1ng%20s%E1%BA%A1c%20EverEV%20t%E1%BA%A1i%20H%C3%A0n%20Qu%E1%BB%91c">
                      <FaPinterest className="hover:text-[#e60023] text-gray-400" size={32} />
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://everev.vn/sac-xe-dien-kia-bang-sac-everev-tai-han-quoc/&title=S%E1%BA%A1c%20xe%20%C4%91i%E1%BB%87n%20KIA%2C%20Huyndai%20b%E1%BA%B1ng%20s%E1%BA%A1c%20EverEV%20t%E1%BA%A1i%20H%C3%A0n%20Qu%E1%BB%91c">
                      <FaLinkedin className="hover:text-[#0073b1] text-gray-400" size={32} />
                    </a>
                  </div>
                  <hr />
                  <Comment/>
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
