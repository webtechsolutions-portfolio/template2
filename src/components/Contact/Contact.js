import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact__container">
      <h1>SKONTAKTUJ SIĘ Z NAMI !</h1>
      <div className="contact__wrapper__row">
        <div className="contact__wrapper__column">
          <h2>Przykładowy tekst Przykładowy tekst Przykładowy tekst </h2>
          <h3>
            Przykładowy tekst Przykładowy tekst Przykładowy tekst Przykładowy
            tekst Przykładowy tekst
          </h3>
        </div>
        <div className="contact__wrapper__column">
          <form className="contact__form">
            <label>text</label>
            <input></input>
            <label>text</label>
            <input></input>
            <label>text</label>
            <input></input>
            <label>text</label>
            <textarea></textarea>
          </form>
          <div className="contact__wrapper">
            <input type="checkbox" />
            <p>
              Przeczytałem i zaakceptowałem <b>Regulamin</b> oraz{" "}
              <b>Politykę Prywatności</b>
            </p>
          </div>
          <div className="contact__wrapper">
            <button className="header__button__black">WYŚLIJ WIADOMOŚĆ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
