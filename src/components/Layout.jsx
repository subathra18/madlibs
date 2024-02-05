import React from "react";
import Hero from "./Hero";
import CardContainer from "./CardContainer";
import Poem from "./Poem";

const Layout = () => {
  return (
    <div className="hero min-h-screen w-84 bg-base-200 bg-cl-white">
      <div className="hero-content gap-12 flex-col lg:flex-row">
        <Hero></Hero>
        <CardContainer></CardContainer>
      </div>
    </div>
    //<Poem></Poem>
  );
};

export default Layout;
