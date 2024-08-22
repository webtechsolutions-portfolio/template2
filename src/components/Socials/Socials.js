import React from "react";
import "./Socials.css";
import { IconContext } from "react-icons";
import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io";
import { FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="socials__container">
      <div className="socials__wrapper">
        <div className="socials__wrapper__row">
          <h1>Polityka plików cookies</h1>
          <h1>Warunki prawne</h1>
          <h1>Polityka prywatności</h1>
        </div>
        <div className="socials__wrapper__row">
          <div className="socials__icon__wrapper">
            <IconContext.Provider value={{ color: "black", size: "20px" }}>
              <IoLogoInstagram />
            </IconContext.Provider>
            <h1>Instagram</h1>
          </div>

          <div className="socials__icon__wrapper">
            <IconContext.Provider value={{ color: "black", size: "20px" }}>
              <FaLinkedin />
            </IconContext.Provider>
            <h1>LinkedIn</h1>
          </div>

          <div className="socials__icon__wrapper">
            <IconContext.Provider value={{ color: "black", size: "20px" }}>
              <FaSquareXTwitter />
            </IconContext.Provider>
            <h1>Twitter</h1>
          </div>

          <div className="socials__icon__wrapper">
            <IconContext.Provider value={{ color: "black", size: "20px" }}>
              <IoLogoYoutube />
            </IconContext.Provider>
            <h1>YouTube</h1>
          </div>
          <div className="socials__icon__wrapper">
            <IconContext.Provider value={{ color: "black", size: "20px" }}>
              <FaTiktok />
            </IconContext.Provider>
            <h1>TikTok</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
