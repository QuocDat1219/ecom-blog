import React, { useState, useEffect } from "react";
import { tpost } from "../data/Data";
import "./Tpost.css";
import axios from "axios";
import moment from "moment";
const Tpost = () => {
  const [data, setData] = useState([]);
  const [dataCate, setDataCate] = useState([]);

  useEffect(() => {
    axios("https://ecom-oto.vercel.app/api/blog/").then((response) => {
      const blog = response.data;
      setData(blog);
      console.log(blog);
    });
    axios("https://ecom-oto.vercel.app/api/blogcategory/").then((response) => {
      const blogcate = response.data;
      setDataCate(blogcate);
    });
  }, []);
  function categoryPosts(item)  {
    const categoryBlog = dataCate.find((category) => category._id === item);
    if(categoryBlog)
    return categoryBlog.title;
  };

  
  return (
    <>
      <section className="tpost">
        {data.map((val) => {
          return (
            <a href={`blogdetail/${val._id}`}>
            <div className="box flexSB">
              <div className="img">
                <img src={val.imageThumbnail} alt="" />
              </div>
              <div className="text">
                <h1 className="title">{val.title.slice(0, 40)}...</h1>
                {/* <span>a year ago</span> */}
              </div>
            </div>
            </a>
          );
        })}
      </section>
    </>
  );
};

export default Tpost;
