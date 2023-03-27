import React from "react";
import "./side.css";
import Slider from "react-slick";
import Heading from "./Heading";
import Tpost from "./Tpost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // const catgeory = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"]
  return (
    <>
      {/* <Heading title='Stay Connected' /> */}
      {/* <SocialMedia /> */}

      <Heading title="Tìm kiếm" />

      <section className="subscribe mx-auto">
        {/* <h1 className="title">Nhập từ khóa tìm kiếm</h1> */}
        <form action="">
          <div className="flex items-center">
            <div>
              <div className="justify-center items-center px-4 sm:px-6 lg:px-8 ">
                <div className="relative">
                  <input
                    type="text"
                    className="pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                    placeholder="Nhập từ khóa..."
                  />
                  <div class="absolute top-4 right-3">
                    <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* <button className="bg-color-button w-[60%] rounded-md text-text-color">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button> */}
          </div>
        </form>
      </section>

      {/* <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt='' />
      </section> */}
      <div className="Hide">
        <Heading title="Bài viết mới" />
        <Tpost />
      </div>
    </>
  );
};

export default Side;
