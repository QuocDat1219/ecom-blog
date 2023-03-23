import React from "react";
import "./side.css";
import Slider from "react-slick";
import Heading from "./Heading";
import Tpost from "./Tpost";

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

      <section className="subscribe">
        {/* <h1 className="title">Nhập từ khóa tìm kiếm</h1> */}
        <form action="">
          <input type="search" placeholder="Nhập từ khóa tìm kiếm" />
          {/* <button>
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button> */}
        </form>
      </section>

      {/* <section className='banner'>
        <img src='./images/sidebar-banner-new.jpg' alt='' />
      </section> */}
      <Heading title="Bài viết mới" />
      <Tpost />
    </>
  );
};

export default Side;
