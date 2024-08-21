import React from "react";
import "./Title.css";
import logo from "../../assets/webtech.png";
const Title = (props) => {
  return (
    <div className="title__container">
      <h3>{props.text1}</h3>
      <h1>{props.text2}</h1>
      <div className="title__wrapper">
        <img src={logo} />
        <h2>{props.text3}</h2>
      </div>
    </div>
  );
};

export default Title;
