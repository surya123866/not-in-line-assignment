import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";

import "./headerSection.scss";

import logo from "../../images/logo.png";
import logoText from "../../images/logoText.png";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const onClickOption = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="top-navigation-bar">
      <div className="logo-container">
        <img className="logo" src={`${logo}`} alt="logoImage" />
        <img className="logo-text" src={`${logoText}`} alt="logoText" />
      </div>
      <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={34} color="#fff" />
        ) : (
          <CgMenuRight size={24} color="#000" />
        )}
      </div>
      <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span className="navigation-item" onClick={onClickOption}>
          Home
        </span>
        <span className="navigation-item" onClick={onClickOption}>
          Health Conditions
        </span>
        <span className="navigation-item" onClick={onClickOption}>
          Lab tests
        </span>
        <span className="navigation-item" onClick={onClickOption}>
          Medicines
        </span>
      </div>
      <div className="buttons-container">
        <Link to="/patients" style={{ textDecoration: "none" }}>
          <button>For patients</button>
        </Link>
        <Link to="/doctors" style={{ textDecoration: "none" }}>
          <button>For doctors</button>
        </Link>
      </div>
      <Link
        to="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <button className="playbutton">
          <BiLogoPlayStore className="playstore-icon" />
          Play
        </button>
      </Link>
    </div>
  );
};

export default Header;
