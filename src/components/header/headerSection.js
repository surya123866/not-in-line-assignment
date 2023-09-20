import React from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import "./headerSection.scss";

import logo from "../../images/logo.png";
import logoText from "../../images/logoText.png";

const HeaderSection = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={`${logo}`} alt="logoImage" />
        <img className="logo-text" src={`${logoText}`} alt="logoText" />
      </div>
      <ul className="navigation-container">
        <li>Home</li>
        <li>Health Conditions</li>
        <li>Lab test</li>
        <li>Medicins</li>
      </ul>
      <div className="buttons-container">
        <div className="button">
          <button>For patients</button>
        </div>
        <div className="button">
          <button>For hospitals</button>
        </div>
      </div>
      <div className="playbutton-container">
        <BiLogoPlayStore className="icon" />
        <button>Play</button>
      </div>
    </div>
  );
};

export default HeaderSection;
