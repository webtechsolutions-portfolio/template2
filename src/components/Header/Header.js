import React, { useState } from "react";
import "./Header.css";
import { FiFramer, FiMenu } from "react-icons/fi";
import { IconContext } from "react-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header__container">
      <div className="header__wrapper">
        <IconContext.Provider value={{ color: "black", size: "50px" }}>
          <FiFramer />
          <div className="header__headings">
            <h1>Nagłówek 1</h1>
            <h1>Nagłówek 2</h1>
            <h1>Nagłówek 3</h1>
            <h1>Nagłówek 4</h1>
          </div>
        </IconContext.Provider>
      </div>
      <div className="header__wrapper">
        <button className="header__button__black">Przycisk 1</button>
        <button className="header__button__white">Przycisk 2</button>
        <IconContext.Provider value={{ color: "black", size: "35px" }}>
          <FiMenu className="menu__icon" onClick={toggleMenu} />
        </IconContext.Provider>
      </div>

      {/* Side Menu */}
      {isMenuOpen && (
        <div className="side__menu">
          <button className="close__button" onClick={toggleMenu}>
            X
          </button>
          <h1>Nagłówek 1</h1>
          <h1>Nagłówek 2</h1>
          <h1>Nagłówek 3</h1>
          <h1>Nagłówek 4</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
