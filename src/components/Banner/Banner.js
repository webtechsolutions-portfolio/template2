import React from "react";
import "./Banner.css";

const Banner = ({ text }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        {text} &nbsp; {text} &nbsp; {text}
      </div>
    </div>
  );
};

export default Banner;
