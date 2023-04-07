import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Heading from "../../common/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  const [data, setData] = useState([]);
  const [dataCate, setDataCate] = useState([]);


  useEffect(() => {
    const calldata3 = async () => {
      axios.get("https://ecom-oto.vercel.app/api/blog/").then((response) => {
        const blog = response.data;
        if (blog)
          setData(blog);
      });
    }

    const calldata4 = async () => {
      axios.get("https://ecom-oto.vercel.app/api/blogcategory/").then((response) => {
        const blogcate = response.data;
        if (blogcate)
          setDataCate(blogcate);
      });
    }

    calldata3();
    calldata4();
  }, []);
  return (
    <>
      <section className="featured backgrounds">
        <div className="containers-full">
          <Heading title="Tin tức" subtitle="" />
          <FeaturedCard data={data} dataCate={dataCate} />
        </div>
      </section>
    </>
  );
};

export default Featured;
