import React, { useEffect, useRef, useState } from "react";
import { featured } from "../../data/Data";
import Slider from "react-slick";
import { dataDigitalBestSeller } from "./data";
import imgGirl from "./images.png";
import "./FeaturedCard.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedCard = ({data,dataCate}) => {
  
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    fade: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 

  function categoryPosts(item) {
    const categoryBlog = dataCate.find((category) => category._id === item);
    if (categoryBlog)
      return categoryBlog.title;
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
  };
  const sliderRef = useRef();
  const gotoNext = () => {
    sliderRef.current.slickNext();
  };
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <>
      <div className="slider">
        <Slider {...settings} ref={sliderRef}>
          {data.map((item) => (
            <div className="card flex flex-col">
              <div className="card-top">
                <img
                  src={
                    item.imageThumbnail
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
              </div>
              <div className="card-bottom">
                <span className="category">{categoryPosts(item.category)}</span>
                <h1 className="mt-5">{item.title}</h1>
                <h3>{item.description.slice(0,40)}...</h3>
              </div>
            </div>
          ))}
        </Slider>
        <div>
          <span className="next cursor-pointer" onClick={gotoPrev}></span>
          <span className="prew cursor-pointer" onClick={gotoNext}></span>
        </div>
      </div>
    </>
  );
};

export default FeaturedCard;
