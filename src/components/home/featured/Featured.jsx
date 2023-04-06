import React from "react";
import Heading from "../../common/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";

const Featured = ({data,dataCate}) => {
  return (
    <>
      <section className="featured backgrounds">
        <div className="containers-full">
          <Heading title="Tin tức" subtitle="" />
          <FeaturedCard data={data} dataCate={dataCate}/>
        </div>
      </section>
    </>
  );
};

export default Featured;
