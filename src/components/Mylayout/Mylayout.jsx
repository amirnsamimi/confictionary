import React from "react";
import Myheader from "../myheader/Myheader";
import Slideshow from "../slide show/slideshow";
import Mypic from "../mypic/mypic";
import FooterOption from "../FooterOption/FooterOption";
import "./Mylayout.style.scss";

const Mylayout = () => {
  return (
    <div className="fullpage">
      <div className="hder">
        <Myheader></Myheader>
      </div>
      <div className="abs">
        <Slideshow></Slideshow>
        <Mypic></Mypic>
      </div>
      <div className="fter">
        <FooterOption></FooterOption>
      </div>
    </div>
  );
};

export default Mylayout;
