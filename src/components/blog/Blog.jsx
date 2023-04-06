import React, { useState } from "react";
import RecentCard from "./RecentCard";
import "../home/recent/recent.css";
import "./Blog.css";
import Side from "./Side";
import { DataObject } from "@mui/icons-material";

const Blog = () => {
  const [dataBlog, setDataBlog] = useState()
  console.log(dataBlog);
  return (
    <>
      <main>
        <div className="containers">
          <section className="sideContenthide ">
            <Side />
          </section>
          <section className="mainContent">
            <RecentCard dataBlog={dataBlog} />
          </section>
          <section className="sideContent">
            <Side setDataBlog={setDataBlog} />
          </section>
        </div>
      </main>
    </>
  );
};

export default Blog;
