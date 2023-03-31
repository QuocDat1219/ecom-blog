import React from "react";
import RecentCard from "../home/recent/RecentCard";
import "../home/recent/recent.css";
import "./Blog.css";
import Side from "./Side";

const Blog = () => {
  return (
    <>
      <main>
        <div className="containers">
          <section className="sideContenthide ">
            <Side />
          </section>
          <section className="mainContent">
         
            <RecentCard />
        
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Blog;
