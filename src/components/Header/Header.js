import React from "react";
import "./Header.css";
import { FiFramer } from "react-icons/fi";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__wrapper">
        <IconContext.Provider value={{ color: "black", size: "50px" }}>
          <FiFramer />
          <h1>Nagłówek 1</h1>
          <h1>Nagłówek 2</h1>
          <h1>Nagłówek 3</h1>
          <h1>Nagłówek 4</h1>
        </IconContext.Provider>
      </div>
      <div className="header__wrapper">
        <button className="header__button__black">Przycisk 1</button>
        <button className="header__button__white">Przycisk 2</button>
      </div>
    </div>
  );
};

export default Header;
