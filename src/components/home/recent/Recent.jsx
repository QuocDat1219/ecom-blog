import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Heading from "../../common/Heading";
import "./recent.css";
import SliderRecent from "./SliderRecent";
const Recent = () => {
  const [category, setCategory] = useState([]);
  const [categoriesCTNID, setCategoriesCTNID] = useState([]);
  const [product, setProduct] = useState([]);
const data={

}
  useEffect(() => {

    const calldata = async () => {
      await axios.get("https://ecom-oto.vercel.app/api/category/").then((response) => {
        setCategory(response.data.category);
      })
    }

    const calldata1 = async () => {
      await axios.get("https://ecom-oto.vercel.app/api/products/getall").then((response) => {
        setProduct(response.data.products);
      })
    }

    const calldata2 = async () => {
      await axios.get(
        "https://ecom-oto.vercel.app/api/categorycontainer/"
      ).then((response) => {
        const data = response.data;
        setCategoriesCTNID(data)
        console.log(data);
        // if (data) {
        //   const categoryId = data.find((categoryId) => categoryId.slug === id);
        //   setCategoriesCTNID(categoryId._id)

        // }

      })
    }
    calldata1();
    calldata2();
    calldata();
  },[])
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
            <SliderRecent
              title={"SẠC DC"}
              des={"Dòng sản phẩm dành cho gia đình, doanh nghiệp quy mô nhỏ"}
              data={data}
            />
            <SliderRecent
              title={"SẠC DC"}
              des={"Dòng sản phẩm dành cho gia đình, doanh nghiệp quy mô nhỏ"}
              data={data}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
