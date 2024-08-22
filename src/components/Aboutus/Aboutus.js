import React from "react";
import "./Aboutus.css";
import { IconContext } from "react-icons";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";

const Aboutus = () => {
  return (
    <div className="aboutus__container">
      <div className="aboutus__wrapper">
        <div className="aboutus__wrapper__column">
          <h1>Przykładowy tekst Przykładowy tekst</h1>
          <h2>
            Przykładowy tekst Przykładowy tekst Przykładowy tekst Przykładowy
            tekst
          </h2>
          <div className="aboutus__wrapper__row">
            <IconContext.Provider value={{ color: "black", size: "50px" }}>
              <FaLongArrowAltRight />
              <p>Więcej informacji</p>
            </IconContext.Provider>
          </div>
        </div>
        <div className="aboutus__wrapper__column">
          <IconContext.Provider value={{ color: "black", size: "100%" }}>
            <IoMdPhotos />
          </IconContext.Provider>
        </div>
      </div>
      <div className="aboutus__wrapper">
        <div className="aboutus__wrapper__column">
          <IconContext.Provider value={{ color: "black", size: "100%" }}>
            <IoMdPhotos />
          </IconContext.Provider>
        </div>
        <div className="aboutus__wrapper__column">
          <h1>Przykładowy tekst Przykładowy tekst</h1>
          <h2>
            Przykładowy tekst Przykładowy tekst Przykładowy tekst Przykładowy
            tekst
          </h2>
          <div className="aboutus__wrapper__row">
            <IconContext.Provider value={{ color: "black", size: "50px" }}>
              <FaLongArrowAltRight />
              <p>Więcej informacji</p>
            </IconContext.Provider>
          </div>
        </div>
      </div>
      <div className="aboutus__wrapper">
        <div className="aboutus__wrapper__column">
          <h1>Przykładowy tekst Przykładowy tekst</h1>
          <h2>
            Przykładowy tekst Przykładowy tekst Przykładowy tekst Przykładowy
            tekst
          </h2>
          <div className="aboutus__wrapper__row">
            <IconContext.Provider value={{ color: "black", size: "50px" }}>
              <FaLongArrowAltRight />
              <p>Więcej informacji</p>
            </IconContext.Provider>
          </div>
        </div>
        <div className="aboutus__wrapper__column">
          <IconContext.Provider value={{ color: "black", size: "100%" }}>
            <IoMdPhotos />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
