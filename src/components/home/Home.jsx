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
 



  return (

    <>
      <Itop />
      <Hero />
      <Recent />
      <Featured  />
      <Awards />
      {/* <Location /> */}
      {/* <Price />P */}
    </>
  );
};

export default Home;
