import React, { useState, useEffect } from "react";
import { list } from "../../data/Data";
import "./recent.css";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const RecentCard = () => {
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
      {dataCate.length != 0 ? (
        <div className="content grid3 mtop md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 ">
          {data.map((val, index) => (
            <a href={`blogdetail/${val._id}`}>
              <div className="recentCard bg-color-card" key={index}>
                <div className="RecentC_img">
                  <img src={val.imageThumbnail} className="rounded-md" alt="" />
                </div>
                <div className="text pt-1">
                  <div className="category flexs rounded-md">
                    <span className="bg-color-basic text-text-color rounded-md p-1">
                      {categoryPosts(val.category)}
                    </span>

                    <span className="bg-color-basic text-text-color rounded-md p-1">
                      {moment(val.createdAt).format("DD-MM-YYYY")}
                    </span>
                  </div>
                  <h4 className="h5_location text-text-color pt-3">
                    {val.title}
                  </h4>
                  <div className="is-divider "></div>
                  <Link to={`/${val._id}`}>
                    <span className="p_location text-text-color hover:text-color-title">
                      {val.description.slice(0, 40)}...
                      {/* <i className='fa fa-location-dot'></i>  */}
                    </span>
                  </Link>
                </div>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default RecentCard;
