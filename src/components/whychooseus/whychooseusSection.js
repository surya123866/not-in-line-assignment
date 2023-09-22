import React from "react";

import "./whychooseusSection.scss";

import womanPosingImg from "../../images/expressive-young-woman-posing.png";
import eclipse16 from "../../images/Ellipse 16.jpg";
import eclipse15 from "../../images/Ellipse 15.jpg";
import eclipse14 from "../../images/Ellipse 14.jpg";
import eclipse13 from "../../images/Ellipse 13.jpg";

const WhychooseusSection = () => {
  return (
    <div className="Whychooseus-container">
      <div className="title-container">
        <div>
          <h1>
            Why
            <span>
              choose
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="265"
                height="21"
                viewBox="0 0 265 21"
                fill="none"
              >
                <path
                  d="M1 8.36268C17.3852 6.61131 34.3483 5.55603 51.0368 4.41552C62.5882 3.62607 73.949 3.00499 85.6431 2.85026C98.0116 2.68661 109.667 1.01279 122.197 1.01279C146.396 1.01279 170.136 0.772597 194.106 2.37388C207.379 3.2606 220.395 4.44926 233.506 5.6405C239.003 6.13989 244.256 7.1628 249.686 7.68213C254.135 8.10768 256.876 7.51359 260.472 8.97517C268.229 12.128 256.12 9.82949 251.109 9.31544C215.456 5.65823 177.002 6.10555 140.549 6.55923C125.823 6.7425 111.061 7.35134 96.3545 7.75019C78.7676 8.22715 62.3332 11.4996 45.6436 13.807C44.9907 13.8973 14.006 18.2861 14.7826 18.6389C15.6802 19.0467 19.3213 18.775 20.4754 18.775C31.8966 18.775 42.8334 17.7224 53.9581 16.6313C68.6659 15.1887 82.9019 15.1001 97.7777 15.1001C130.275 15.1001 163.226 14.3815 195.454 16.1889C202.773 16.5994 221.491 16.9781 224.817 20"
                  stroke="#008DD9"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            us?
          </h1>
        </div>
        <p>
          We want you and your heart to be healthy so you can live a happy life!
        </p>
      </div>
      <div className="whychooseUs-cards-container">
        <div className="whychooseUs-cards">
          <div>
            <div className="whychooseUs-card card-1">
              <img src={`${eclipse16}`} alt="eclipse16" />
              <div>
                <img src={`${eclipse16}`} alt="eclipse16" />
                <h1>NABL Accredited Labs</h1>
                <p>
                  Get accurate and safe results from our NABL-certified lab
                  partners.
                </p>
              </div>
            </div>
            <div className="whychooseUs-card card-2">
              <img src={`${eclipse15}`} alt="eclipse15" />
              <div>
                <h1>Value experience</h1>
                <p>
                  Experience seamless care without the hassle of waiting in long
                  lines for an appointment. Book with us for a
                  healthier lifestyle.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="whychooseUs-card card-3">
              <img src={`${eclipse14}`} alt="eclipse14" />
              <div>
                <h1>Timely collections</h1>
                <p>
                  We collect samples timely to prevent treatment delays and
                  ensure your continued well-being.
                </p>
              </div>
            </div>
            <div className="whychooseUs-card card-4">
              <img src={`${eclipse13}`} alt="eclipse13" />
              <div>
                <h1>Transparency</h1>
                <p>
                  Enjoy hassle free medical assistance with our transparent
                  approach. We prioritize transparency for your smooth
                  medical journey.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={`${womanPosingImg}`} alt="womanPosingImg" />
      </div>
      <div className="bg-text">
        <h2>NotInLine</h2>
        <h2>NotInLine</h2>
        <h2>NotInLine</h2>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1440"
        height="1274"
        viewBox="0 0 1440 1274"
        fill="none"
      >
        <path
          d="M-38 99.1443L242.008 17.9024C333.134 -8.5368 430.469 -3.87164 518.649 31.1613L926.518 193.205C1020.85 230.684 1127.29 221.848 1214.16 169.327C1480.24 8.44727 1798.35 277.853 1683.49 566.795L1402.35 1274H-38V99.1443Z"
          fill="#00A6FF"
          fillOpacity="0.09"
        />
      </svg>
    </div>
  );
};

export default WhychooseusSection;
