import React from "react";
import "./side.css";
import Slider from "react-slick";
import Heading from "./Heading";
import Tpost from "./Tpost";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

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

      <section className="subscribe mx-auto" >
        {/* <h1 className="title">Nhập từ khóa tìm kiếm</h1> */}
        <form action="">
          <div class="flex items-center">
            <input type="text" class="flex-grow border-gray-400 border-2 p-2 rounded-md mr-4 " placeholder="Tìm kiếm..." />
            <button class="bg-color-basic w-[60%] rounded-md text-text-color"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>


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
