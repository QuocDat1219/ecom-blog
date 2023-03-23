import React from "react";
import Back from "../common/Back";
import RecentCard from "../home/recent/RecentCard";
import "../home/recent/recent.css";
import "./Blog.css";
import Side from "./Side";
const Blog = () => {
  return (
    <>
      <main>
        <div className="containers">
          <section className="mainContent">
            {/* <Popular /> */}
            <RecentCard />
            {/* <Life />
            <Music /> */}
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
