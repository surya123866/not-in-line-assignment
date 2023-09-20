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
                width="212"
                height="19"
                viewBox="0 0 212 19"
                fill="none"
              >
                <path
                  d="M1 7.58766C14.0706 6.02065 27.6023 5.07645 40.9148 4.05599C50.1295 3.34964 59.1922 2.79394 68.5206 2.6555C78.3871 2.50907 87.6845 1.01145 97.6799 1.01145C116.984 1.01145 135.922 0.796534 155.043 2.22926C165.631 3.02265 176.013 4.08618 186.473 5.15202C190.857 5.59885 195.047 6.51409 199.379 6.97875C202.929 7.3595 205.115 6.82795 207.984 8.13568C214.171 10.9567 204.512 8.90007 200.514 8.44013C172.073 5.16789 141.398 5.56812 112.319 5.97405C100.573 6.13803 88.7967 6.68278 77.0652 7.03964C63.036 7.4664 49.9261 10.3944 36.6126 12.4589C36.0918 12.5397 11.375 16.4665 11.9945 16.7822C12.7106 17.147 15.6151 16.904 16.5357 16.904C25.6465 16.904 34.3709 15.9622 43.2452 14.9859C54.9778 13.6952 66.3339 13.6159 78.2005 13.6159C104.124 13.6159 130.409 12.9729 156.118 14.5901C161.957 14.9574 176.888 15.2962 179.541 18"
                  stroke="#008DD9"
                  strokeWidth="2"
                  stroke-linecap="round"
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
              <h1>NABL Accredited Labs</h1>
              <p>
                Get accurate and safe results from our NABL-certified lab
                partners.
              </p>
            </div>
            <div className="whychooseUs-card card-2">
              <img src={`${eclipse15}`} alt="eclipse15" />
              <h1>Value experience</h1>
              <p>
                Experience seamless care without the hassle of waiting in long
                lines for an appointment. Book with us for a
                healthier lifestyle.
              </p>
            </div>
          </div>
          <div>
            <div className="whychooseUs-card card-3">
              <img src={`${eclipse14}`} alt="eclipse14" />
              <h1>Timely collections</h1>
              <p>
                We collect samples timely to prevent treatment delays and ensure
                your continued well-being.
              </p>
            </div>
            <div className="whychooseUs-card card-4">
              <img src={`${eclipse13}`} alt="eclipse13" />
              <h1>Transparency</h1>
              <p>
                Enjoy hassle free medical assistance with our transparent
                approach. We prioritize transparency for your smooth
                medical journey.
              </p>
            </div>
          </div>
        </div>
        <img src={`${womanPosingImg}`} alt="womanPosingImg" />
      </div>
    </div>
  );
};

export default WhychooseusSection;
