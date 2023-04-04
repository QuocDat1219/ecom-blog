import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Awards from "./awards/Awards";
import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Location from "./location/Location";
import Price from "./price/Price";
import Recent from "./recent/Recent";
import Team from "./team/Team";
import Itop from "./Itop/Itop.js";
const Home = () => {
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
      <Itop />
      <Hero />
      <Featured data={data} dataCate={dataCate} />
      <Recent />
      <Awards />
      {/* <Location /> */}
      {/* <Price />P */}
    </>
  );
};

export default Home;
