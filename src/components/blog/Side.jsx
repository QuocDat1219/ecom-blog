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
      <div class="grid grid-cols-1">
        <div class="grid-row">
          <Heading title="Tìm kiếm" />
          <section class="subscribe">
            <form action="">
              <div class="flex items-center">
                <div>
                  <div class="px-4 sm:px-6 lg:px-8">
                    <div class="relative">
                      <input
                        type="text"
                        class="pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                        placeholder="Nhập từ khóa..."
                      />
                      <div class="absolute top-4 right-3">
                        <i class="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
        <div class="grid-row">
          <div>
            <Heading title="Bài viết mới" />
            <Tpost />
          </div>
        </div>
      </div>
    </>
  );
};

export default Side;
