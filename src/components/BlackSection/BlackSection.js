import React from "react";
import "./BlackSection.css";
import { FaCamera } from "react-icons/fa";
import { IconContext } from "react-icons";

const BlackSection = () => {
  return (
    <div className="blacksection__container">
      <div className="blacksection__wrapper">
        <div className="blacksection__item">
          <IconContext.Provider value={{ color: "black", size: "40%" }}>
            <FaCamera />
          </IconContext.Provider>
          <h1>Nazwa</h1>
          <h2>Opis</h2>
          <h3>Cena</h3>
        </div>
        <div className="blacksection__item">
          <IconContext.Provider value={{ color: "black", size: "40%" }}>
            <FaCamera />
          </IconContext.Provider>
          <h1>Nazwa</h1>
          <h2>Opis</h2>
          <h3>Cena</h3>
        </div>
        <div className="blacksection__item">
          <IconContext.Provider value={{ color: "black", size: "40%" }}>
            <FaCamera />
          </IconContext.Provider>
          <h1>Nazwa</h1>
          <h2>Opis</h2>
          <h3>Cena</h3>
        </div>
        <div className="blacksection__item">
          <IconContext.Provider value={{ color: "black", size: "40%" }}>
            <FaCamera />
          </IconContext.Provider>
          <h1>Nazwa</h1>
          <h2>Opis</h2>
          <h3>Cena</h3>
        </div>
        <div className="blacksection__item">
          <IconContext.Provider value={{ color: "black", size: "40%" }}>
            <FaCamera />
          </IconContext.Provider>
          <h1>Nazwa</h1>
          <h2>Opis</h2>
          <h3>Cena</h3>
        </div>
        <div className="blacksection__item">
          <IconContext.Provider value={{ color: "black", size: "40%" }}>
            <FaCamera />
          </IconContext.Provider>
          <h1>Nazwa</h1>
          <h2>Opis</h2>
          <h3>Cena</h3>
        </div>
        <div className="blacksection__item">
          <IconContext.Provider value={{ color: "black", size: "40%" }}>
            <FaCamera />
          </IconContext.Provider>
          <h1>Nazwa</h1>
          <h2>Opis</h2>
          <h3>Cena</h3>
        </div>
        <div className="blacksection__item">
          <IconContext.Provider value={{ color: "black", size: "40%" }}>
            <FaCamera />
          </IconContext.Provider>
          <h1>Nazwa</h1>
          <h2>Opis</h2>
          <h3>Cena</h3>
        </div>
        <div className="blacksection__item">
          <IconContext.Provider value={{ color: "black", size: "40%" }}>
            <FaCamera />
          </IconContext.Provider>
          <h1>Nazwa</h1>
          <h2>Opis</h2>
          <h3>Cena</h3>
        </div>
      </div>
    </div>
  );
};

export default BlackSection;
