import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

import "./footerSection.scss";

import footerLogo from "../../images/NIL_logo.png";

const FooterSection = () => {
  return (
    <div className="footer-container">
      <div className="footer-info-container">
        <div className="info-container">
          <img className="logo" src={`${footerLogo}`} alt="logoImage" />
          <p>
            Book doctor appointments online and get your ailments treated in no
            time with our expert medical support systems. Get rid of all your
            medical problem with our expert panel of doctors who guide you
            towards a healthier life
          </p>
          <div className="footer-input-container ">
            <div className="prefix-container">
              <h1>+91</h1>
            </div>
            <input type="text" />
            <div className="phoneIcon-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
              >
                <mask
                  id="mask0_1_82"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="39"
                  height="39"
                >
                  <rect width="39" height="39" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_82)">
                  <path
                    d="M32.4188 34.125C29.0333 34.125 25.6885 33.387 22.3844 31.9109C19.0802 30.4349 16.074 28.3427 13.3656 25.6344C10.6573 22.926 8.5651 19.9198 7.08906 16.6156C5.61302 13.3115 4.875 9.96667 4.875 6.58125C4.875 6.09375 5.0375 5.6875 5.3625 5.3625C5.6875 5.0375 6.09375 4.875 6.58125 4.875H13.1625C13.5417 4.875 13.8802 5.00365 14.1781 5.26094C14.476 5.51823 14.6521 5.82292 14.7063 6.175L15.7625 11.8625C15.8167 12.2958 15.8031 12.6615 15.7219 12.9594C15.6406 13.2573 15.4917 13.5146 15.275 13.7313L11.3344 17.7125C11.876 18.7146 12.5193 19.6828 13.2641 20.6172C14.0089 21.5516 14.8281 22.4521 15.7219 23.3188C16.5615 24.1583 17.4417 24.937 18.3625 25.6547C19.2833 26.3724 20.2583 27.0292 21.2875 27.625L25.1062 23.8063C25.35 23.5625 25.6682 23.3797 26.0609 23.2578C26.4536 23.1359 26.8396 23.1021 27.2188 23.1562L32.825 24.2937C33.2042 24.4021 33.5156 24.5984 33.7594 24.8828C34.0031 25.1672 34.125 25.4854 34.125 25.8375V32.4188C34.125 32.9063 33.9625 33.3125 33.6375 33.6375C33.3125 33.9625 32.9063 34.125 32.4188 34.125Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="widgets-container">
          <div className="widget">
            <h1>Services</h1>
            <ul className="widgets-list-container">
              <li>Appointments</li>
              <li>Lab tests</li>
              <li>A-Z medicine</li>
              <li>Doctor support</li>
            </ul>
          </div>
          <div className="widget">
            <h1>Legal</h1>
            <ul className="widgets-list-container">
              <li>General info</li>
              <li>Privacy policy</li>
              <li>Terms of services</li>
              <li>Consultation</li>
              <li>How it works</li>
            </ul>
          </div>
          <div className="widget">
            <h1>Talk to us</h1>
            <ul className="widgets-list-container">
              <li>support@notinline.com</li>
              <li>appointment@notinline.com</li>
              <li>+91 12345 67899</li>
              <li>+91 97642 09752</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyrightText-container">
        <AiOutlineCopyrightCircle className="copyright-icon" />
        <p>2021-2023 All Rights Reserved</p>
      </div>
    </div>
  );
};

export default FooterSection;
