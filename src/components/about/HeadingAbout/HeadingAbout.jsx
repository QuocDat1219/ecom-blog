import React from "react";

const HeadingAbout = ({ title, subtitle }) => {
  return (
    <>
      <div className="headingAbout">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
};

export default HeadingAbout;
