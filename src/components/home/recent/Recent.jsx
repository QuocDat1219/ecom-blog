import axios from "axios";
import React from "react";
import react, { useState, useEffect, useRef } from "react";

import Heading from "../../common/Heading";
import "./recent.css";
import Slider from "react-slick";
import imgGirl from "./images.png";
import { dataDigitalBestSeller } from "./data";
import "./recent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Recent = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [defaultImage, setDefaultImage] = useState({});

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    fade: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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

  useEffect(() => {
    const calldata1 = async () => {
      await axios.get(
        "https://ecom-oto.vercel.app/api/category/"
      ).then((response) => {
        const data = response.data.category
        if (data)
          setCategory(data)
      })
    }


    const calldata = async () => {
      await axios.get(
        "https://ecom-oto.vercel.app/api/products/getall"
      ).then((response) => {
        const data = response.data.products

        if (data)
          setProduct(data)
      })
    }

    calldata();
    calldata1();


  }, [])
  function categoryProduct(item) {
    const categoryProduct = category.find((categorys) => categorys._id === item);

    if (categoryProduct)
      return categoryProduct.name;
  };

  return (
    <>
      <section className="recent padding">
        <div className="containers ">
          <Heading
            className=""
            title="Sản phẩm"
            subtitle="“EverEV là nhà phân phối chính hãng của các thương hiệu sạc ô tô hàng đầu thế giới như Starcharge, COSTEL, FIRMER.. được chia thành 2 dòng sản phẩm:"
          />
          <div className="recent-info ">
            <div className="flex justify-between flex-col md:flex-row  gap-2 mt-10">
              <div className="bg-[#97DEFF]  w-[100%] p-10 flex flex-col justify-center shadow-md shadow-offset-x-2 shadow-offset-y-2 shadow-blur-2 shadow-color-gray-500 rounded-[10px] ">
                <div className="flex flex-col justify-center items-center ">
                  <img
                    className="w-[100px] h-[70px] "
                    src="	https://everev.vn/wp-content/uploads/2022/11/AC-500-%C3%97-350-px.png"
                    alt=""
                  />
                  <p className="text-2xl font-bold">Các hệ thống sạc ô tô AC</p>
                  <p>
                    Dòng sản phẩm dành cho gia đình, doanh nghiệp quy mô nhỏ
                  </p>
                </div>
              </div>
              <div className="bg-[#97DEFF] w-[100%]  p-10 flex flex-col justify-center shadow-md shadow-offset-x-2 shadow-offset-y-2 shadow-blur-2 shadow-color-gray-500 rounded-[10px] ">
                <div className="flex flex-col justify-center items-center">
                  <img
                    className="w-[100px] h-[70px] "
                    src="	https://everev.vn/wp-content/uploads/2022/11/AC-500-%C3%97-350-px.png"
                    alt=""
                  />
                  <p className="text-2xl font-bold">Các hệ thống sạc ô tô AC</p>
                  <p>
                    Dòng sản phẩm dành cho gia đình, doanh nghiệp quy mô nhỏ
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="slider-title pt-5 pb-5 text-center bg-color-button flex justify-center">
                <span className="text-2xl text-center font-bold text-white">
                  {" "}
                  <i class="fa fa-angle-down" aria-hidden="true"></i> Tất cả sản phẩm
                </span>
                <div className="brick"></div>
              </div>
              <div className="text-center p-5">Hãy chọn sản phẩm cho chính mình</div>
              <div className="slider bg-white ">
                <Slider {...settings} ref={sliderRef}>
                  {product.map((item) => (
                    <Link to={`/productdetail/${item._id}`}>
                      <div className="card overflow-auto" key={item._id}>
                        <div className="card-top ">
                          <img
                            className="object-cover "
                            src={
                              item.imagesDefault
                            }
                            alt={item.name}
                            onError={handleErrorImage}
                          />
                        </div>{" "}
                        <div className="card-bottom flex flex-col items-start justify-center">
                          <span className="category text-3xl">{item.name}</span>
                          <h4 className="mt-5">{item.title}</h4>
                          <h4 className="mt-4">Danh mục : {categoryProduct(item.idCategory)}</h4>
                          <h4 className="mt-4">Xem chi tiết</h4>
                          <Link to={`/productdetail/${item._id}`}></Link>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Slider>
                <div>
                  <span className="next cursor-pointer" onClick={gotoPrev}></span>
                  <span className="prew cursor-pointer" onClick={gotoNext}></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
