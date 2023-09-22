import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../actions";
import Cookies from "js-cookie";
import { v4 as uuid } from "uuid";

import "./heroSection.scss";

import image from "../../images/woman-microscop.png";
import bloodTesTimg from "../../images/blood-test-man-clinic.webp";
import examiningBrainImg from "../../images/examining-brain-x-ray-doctor.webp";
import medicalReportImg from "../../images/medical-examination-report.webp";
import Rectangle80 from "../../images/Rectangle 80.jpg";
import Rectangle81 from "../../images/Rectangle 81.jpg";

const HeroSection = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    location: "",
    allowNotifications: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Update the form data based on the input type
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email format";
    }

    // Validate mobile number
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/i.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Invalid mobile number format (10 digits)";
    }

    if (!formData.name.trim()) {
      newErrors.name = "location is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      //console.log("Registration data:", formData);
      dispatch(addUser(formData));
      setSubmitted(true);
      Cookies.set("Token", uuid(), { expires: 2 });
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-title-container">
        <h1>
          Best in class <span>lab tests!</span>
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="316"
          height="21"
          viewBox="0 0 316 21"
          fill="none"
        >
          <path
            d="M1 8.36268C20.6372 6.61131 40.967 5.55603 60.9677 4.41552C74.8119 3.62607 88.4275 3.00499 102.442 2.85026C117.266 2.68661 131.234 1.01279 146.251 1.01279C175.253 1.01279 203.705 0.772597 232.432 2.37388C248.34 3.2606 263.939 4.44926 279.653 5.6405C286.24 6.13989 292.535 7.1628 299.043 7.68213C304.376 8.10768 307.661 7.51359 311.97 8.97517C321.267 12.128 306.755 9.82949 300.749 9.31544C258.019 5.65823 211.933 6.10555 168.245 6.55923C150.598 6.7425 132.905 7.35134 115.28 7.75019C94.2024 8.22715 74.5062 11.4996 54.5042 13.807C53.7216 13.8973 16.5874 18.2861 17.5181 18.6389C18.5939 19.0467 22.9576 18.775 24.3407 18.775C38.0287 18.775 51.1362 17.7224 64.4689 16.6313C82.0958 15.1887 99.1572 15.1001 116.986 15.1001C155.933 15.1001 195.423 14.3815 234.048 16.1889C242.82 16.5994 265.253 16.9781 269.239 20"
            stroke="#008DD9"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="left-and-right-container">
        <div className="left-section">
          <form className="form-container" onSubmit={handleSubmit}>
            <h1>Fill in the details to get a call!</h1>
            <div className="input-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
              >
                <mask
                  id="mask0_1_120"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="46"
                  height="46"
                >
                  <rect width="46" height="45.0213" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_120)">
                  <path
                    d="M23 21.3563C21.4188 21.3563 20.0651 20.8053 18.9391 19.7032C17.8131 18.6011 17.25 17.2763 17.25 15.7287C17.25 14.181 17.8131 12.8562 18.9391 11.7541C20.0651 10.652 21.4188 10.101 23 10.101C24.5813 10.101 25.9349 10.652 27.061 11.7541C28.187 12.8562 28.75 14.181 28.75 15.7287C28.75 17.2763 28.187 18.6011 27.061 19.7032C25.9349 20.8053 24.5813 21.3563 23 21.3563ZM34.4263 34.9204H11.5737C11.011 34.9204 10.5386 34.7334 10.1565 34.3594C9.77442 33.9855 9.58337 33.5231 9.58337 32.9724V31.8324C9.58337 31.058 9.81374 30.3335 10.2745 29.6589C10.7352 28.9843 11.3551 28.4606 12.134 28.0878C13.9426 27.2389 15.7523 26.6022 17.5633 26.1777C19.3743 25.7532 21.1866 25.541 23 25.541C24.8135 25.541 26.6257 25.7532 28.4368 26.1777C30.2478 26.6022 32.0575 27.2389 33.8661 28.0878C34.645 28.4606 35.2649 28.9843 35.7256 29.6589C36.1863 30.3335 36.4167 31.058 36.4167 31.8324V32.9724C36.4167 33.5231 36.2257 33.9855 35.8436 34.3594C35.4615 34.7334 34.989 34.9204 34.4263 34.9204ZM11.5 33.0445H34.5V31.8324C34.5 31.4164 34.363 31.0255 34.0891 30.66C33.8151 30.2944 33.436 29.9854 32.952 29.7329C31.3744 28.9849 29.7479 28.4119 28.0723 28.0139C26.3968 27.6159 24.706 27.4168 23 27.4168C21.294 27.4168 19.6033 27.6159 17.9278 28.0139C16.2522 28.4119 14.6257 28.9849 13.0481 29.7329C12.564 29.9854 12.185 30.2944 11.911 30.66C11.637 31.0255 11.5 31.4164 11.5 31.8324V33.0445ZM23 19.4804C24.0542 19.4804 24.9566 19.1131 25.7073 18.3784C26.458 17.6436 26.8334 16.7604 26.8334 15.7287C26.8334 14.6969 26.458 13.8137 25.7073 13.079C24.9566 12.3442 24.0542 11.9769 23 11.9769C21.9459 11.9769 21.0434 12.3442 20.2927 13.079C19.5421 13.8137 19.1667 14.6969 19.1667 15.7287C19.1667 16.7604 19.5421 17.6436 20.2927 18.3784C21.0434 19.1131 21.9459 19.4804 23 19.4804Z"
                    fill="#138ED1"
                  />
                </g>
              </svg>

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
              />
            </div>
            <div className="input-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
              >
                <mask
                  id="mask0_1_121"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="46"
                  height="46"
                >
                  <rect width="46" height="46" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_121)">
                  <path
                    d="M36.284 38.3333C33.0527 38.3333 29.7403 37.5242 26.3468 35.9061C22.9533 34.288 19.8006 32.0169 16.8888 29.0928C13.9769 26.1686 11.7119 23.0159 10.0939 19.6347C8.47574 16.2535 7.66669 12.9473 7.66669 9.71597C7.66669 9.13043 7.85835 8.6425 8.24169 8.25217C8.62502 7.86181 9.10419 7.66663 9.67919 7.66663H14.4192C14.9402 7.66663 15.3948 7.83064 15.7831 8.15868C16.1713 8.48672 16.4342 8.90752 16.5718 9.42109L17.5228 13.9916C17.6112 14.5273 17.5953 14.9954 17.4748 15.396C17.3544 15.7965 17.1419 16.1245 16.8372 16.3801L12.6316 20.3019C13.4179 21.7296 14.2872 23.0559 15.2394 24.2808C16.1916 25.5058 17.207 26.6662 18.2857 27.7622C19.3989 28.8753 20.5968 29.9104 21.8795 30.8675C23.1622 31.8246 24.5702 32.7283 26.1035 33.5785L30.2023 29.406C30.5143 29.0694 30.8651 28.8476 31.2546 28.7408C31.644 28.6338 32.0747 28.6123 32.5465 28.6762L36.5789 29.5019C37.0998 29.6296 37.5225 29.892 37.8468 30.2888C38.1712 30.6856 38.3334 31.1409 38.3334 31.6544V36.3208C38.3334 36.8958 38.1382 37.375 37.7478 37.7583C37.3575 38.1416 36.8695 38.3333 36.284 38.3333ZM11.7322 18.5032L15.4107 15.1195C15.5336 15.0212 15.6135 14.8861 15.6503 14.7141C15.6872 14.542 15.6811 14.3823 15.6319 14.2349L14.7804 10.1731C14.7313 9.97646 14.6453 9.82903 14.5225 9.73073C14.3996 9.63244 14.2399 9.58329 14.0433 9.58329H10.1104C9.96301 9.58329 9.84016 9.63244 9.74186 9.73073C9.64357 9.82903 9.59442 9.95188 9.59442 10.0993C9.63129 11.409 9.83647 12.7765 10.21 14.2017C10.5835 15.6269 11.0909 17.0608 11.7322 18.5032ZM27.9281 34.4778C29.2231 35.1192 30.6034 35.5934 32.0692 35.9006C33.5349 36.2078 34.8121 36.3724 35.9007 36.3945C36.0481 36.3945 36.171 36.3454 36.2692 36.2471C36.3675 36.1488 36.4167 36.0259 36.4167 35.8785V32.0304C36.4167 31.8338 36.3675 31.6741 36.2692 31.5513C36.171 31.4284 36.0235 31.3424 35.8269 31.2932L32.2811 30.5671C32.1337 30.518 32.0047 30.5118 31.8941 30.5487C31.7835 30.5855 31.6668 30.6654 31.5439 30.7883L27.9281 34.4778Z"
                    fill="#138ED1"
                  />
                </g>
              </svg>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
              />
            </div>

            {/* Location Field */}
            <div className="input-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
              >
                <mask
                  id="mask0_1_122"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="46"
                  height="46"
                >
                  <rect width="46" height="46" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_122)">
                  <path
                    d="M23 41.2083C19.9087 41.2083 17.379 40.7654 15.4107 39.8795C13.4424 38.9937 12.4583 37.8394 12.4583 36.4166C12.4583 35.6671 12.7802 34.9816 13.424 34.3599C14.0678 33.7382 14.9586 33.2 16.0963 32.7454L16.6455 34.581C15.9796 34.8636 15.4599 35.1616 15.0864 35.4749C14.7129 35.7882 14.4831 36.1021 14.3971 36.4166C14.6158 37.2717 15.5434 37.9647 17.18 38.4955C18.8165 39.0262 20.7565 39.2916 23 39.2916C25.2189 39.2916 27.1546 39.0262 28.8071 38.4955C30.4596 37.9647 31.3952 37.2717 31.6139 36.4166C31.5279 36.1021 31.2982 35.7943 30.9246 35.4933C30.5511 35.1923 30.0314 34.8882 29.3655 34.581L29.9516 32.7454C31.0893 33.2 31.9721 33.7382 32.5999 34.3599C33.2277 34.9816 33.5416 35.6671 33.5416 36.4166C33.5416 37.8394 32.5575 38.9937 30.5893 39.8795C28.621 40.7654 26.0912 41.2083 23 41.2083ZM23 31.3632C23.575 30.2354 24.2556 29.0848 25.0419 27.9114C25.8283 26.7381 26.6355 25.6169 27.4636 24.5481C28.6947 22.941 29.68 21.4795 30.4197 20.1637C31.1593 18.8478 31.5291 17.2057 31.5291 15.2375C31.5291 12.8834 30.6961 10.8734 29.0301 9.20734C27.3641 7.54131 25.354 6.70829 23 6.70829C20.6459 6.70829 18.6359 7.54131 16.9699 9.20734C15.3038 10.8734 14.4708 12.8834 14.4708 15.2375C14.4708 17.2057 14.8468 18.8478 15.5987 20.1637C16.3506 21.4795 17.3298 22.941 18.5364 24.5481C19.3644 25.6169 20.1717 26.7381 20.958 27.9114C21.7443 29.0848 22.425 30.2354 23 31.3632ZM23 34.2788C22.7223 34.2788 22.4643 34.175 22.2259 33.9674C21.9876 33.7597 21.8045 33.5048 21.6768 33.2025C20.8437 31.1802 19.9051 29.4823 18.8607 28.1086C17.8164 26.735 16.8163 25.4192 15.8604 24.161C14.9365 22.9029 14.1544 21.5969 13.5143 20.2429C12.8742 18.889 12.5541 17.2205 12.5541 15.2375C12.5541 12.3133 13.5641 9.84129 15.584 7.82145C17.6038 5.80157 20.0758 4.79163 23 4.79163C25.9241 4.79163 28.3961 5.80157 30.416 7.82145C32.4359 9.84129 33.4458 12.3133 33.4458 15.2375C33.4458 17.2205 33.1337 18.889 32.5096 20.2429C31.8855 21.5969 31.0954 22.9029 30.1396 24.161C29.2156 25.4192 28.2235 26.735 27.1632 28.1086C26.1029 29.4823 25.1562 31.1802 24.3232 33.2025C24.1954 33.5048 24.0124 33.7597 23.774 33.9674C23.5357 34.175 23.2776 34.2788 23 34.2788ZM23 18.1678C23.8232 18.1678 24.5173 17.8852 25.0825 17.32C25.6477 16.7548 25.9303 16.0606 25.9303 15.2375C25.9303 14.4143 25.6477 13.7201 25.0825 13.1549C24.5173 12.5897 23.8232 12.3072 23 12.3072C22.1768 12.3072 21.4826 12.5897 20.9174 13.1549C20.3523 13.7201 20.0697 14.4143 20.0697 15.2375C20.0697 16.0606 20.3523 16.7548 20.9174 17.32C21.4826 17.8852 22.1768 18.1678 23 18.1678Z"
                    fill="#138ED1"
                  />
                </g>
              </svg>
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
              />
            </div>

            {/* Checkbox for Allow Notifications */}
            <div className="checkbox-container">
              <input
                className="checkbox"
                type="checkbox"
                name="allowNotifications"
                id="allowNotifications"
                checked={formData.allowNotifications}
                onChange={handleChange}
              />
              <label htmlFor="allowNotifications">
                By continuing, you agree to our <span>T&C</span> and privacy
                policy
              </label>
            </div>
            <button type="submit">Proceed</button>
          </form>
          <div className="offer-container">
            <div className="text">
              <p>
                Get a Full Body Checkup Now at<span> Now </span>at
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <mask
                    id="mask0_1_137"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <rect width="20" height="20" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_1_137)">
                    <path
                      d="M11.4375 17.5L5.83333 11.6667V10H8.75C9.48611 10 10.1215 9.76042 10.6562 9.28125C11.191 8.80208 11.5139 8.20833 11.625 7.5H5V5.83333H11.375C11.1389 5.34722 10.7882 4.94792 10.3229 4.63542C9.85764 4.32292 9.33333 4.16667 8.75 4.16667H5V2.5H15V4.16667H12.2917C12.4861 4.40278 12.6597 4.65972 12.8125 4.9375C12.9653 5.21528 13.0833 5.51389 13.1667 5.83333H15V7.5H13.3125C13.2014 8.68056 12.7153 9.67014 11.8542 10.4688C10.9931 11.2674 9.95833 11.6667 8.75 11.6667H8.14583L13.75 17.5H11.4375Z"
                      fill="white"
                    />
                  </g>
                </svg>
                <span>5,999</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <mask
                      id="mask0_1_137"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                    >
                      <rect width="20" height="20" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_1_137)">
                      <path
                        d="M11.4375 17.5L5.83333 11.6667V10H8.75C9.48611 10 10.1215 9.76042 10.6562 9.28125C11.191 8.80208 11.5139 8.20833 11.625 7.5H5V5.83333H11.375C11.1389 5.34722 10.7882 4.94792 10.3229 4.63542C9.85764 4.32292 9.33333 4.16667 8.75 4.16667H5V2.5H15V4.16667H12.2917C12.4861 4.40278 12.6597 4.65972 12.8125 4.9375C12.9653 5.21528 13.0833 5.51389 13.1667 5.83333H15V7.5H13.3125C13.2014 8.68056 12.7153 9.67014 11.8542 10.4688C10.9931 11.2674 9.95833 11.6667 8.75 11.6667H8.14583L13.75 17.5H11.4375Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                  999
                </span>
              </p>
              <p>
                Get Full Body Check up <span>Now</span> at
              </p>
            </div>
            <div className="offer">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <mask
                    id="mask0_1_383"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="12"
                    height="13"
                  >
                    <rect
                      y="0.120117"
                      width="11.9489"
                      height="12.4343"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_1_383)">
                    <path
                      d="M6.83337 11.0001L3.48518 7.37347V6.33728H5.22773C5.66752 6.33728 6.04715 6.18833 6.36661 5.89043C6.68608 5.59252 6.87901 5.22338 6.94539 4.783H2.9873V3.74681H6.79603C6.65496 3.44459 6.44544 3.19634 6.16746 3.00205C5.88949 2.80777 5.57624 2.71063 5.22773 2.71063H2.9873V1.67444H8.96177V2.71063H7.34369C7.45986 2.85742 7.56358 3.01717 7.65486 3.18986C7.74613 3.36256 7.81667 3.54821 7.86645 3.74681H8.96177V4.783H7.95358C7.8872 5.51697 7.59677 6.13221 7.0823 6.62871C6.56784 7.12522 5.94965 7.37347 5.22773 7.37347H4.86677L8.21496 11.0001H6.83337Z"
                      fill="white"
                    />
                  </g>
                </svg>
                5,999
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                >
                  <mask
                    id="mask0_1_383"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="12"
                    height="13"
                  >
                    <rect
                      y="0.120117"
                      width="11.9489"
                      height="12.4343"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_1_383)">
                    <path
                      d="M6.83337 11.0001L3.48518 7.37347V6.33728H5.22773C5.66752 6.33728 6.04715 6.18833 6.36661 5.89043C6.68608 5.59252 6.87901 5.22338 6.94539 4.783H2.9873V3.74681H6.79603C6.65496 3.44459 6.44544 3.19634 6.16746 3.00205C5.88949 2.80777 5.57624 2.71063 5.22773 2.71063H2.9873V1.67444H8.96177V2.71063H7.34369C7.45986 2.85742 7.56358 3.01717 7.65486 3.18986C7.74613 3.36256 7.81667 3.54821 7.86645 3.74681H8.96177V4.783H7.95358C7.8872 5.51697 7.59677 6.13221 7.0823 6.62871C6.56784 7.12522 5.94965 7.37347 5.22773 7.37347H4.86677L8.21496 11.0001H6.83337Z"
                      fill="white"
                    />
                  </g>
                </svg>
                999
              </p>
              <p>70% OFF</p>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="hero-title-container">
            <h1>
              Best in class <span>lab tests!</span>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="316"
              height="21"
              viewBox="0 0 316 21"
              fill="none"
            >
              <path
                d="M1 8.36268C20.6372 6.61131 40.967 5.55603 60.9677 4.41552C74.8119 3.62607 88.4275 3.00499 102.442 2.85026C117.266 2.68661 131.234 1.01279 146.251 1.01279C175.253 1.01279 203.705 0.772597 232.432 2.37388C248.34 3.2606 263.939 4.44926 279.653 5.6405C286.24 6.13989 292.535 7.1628 299.043 7.68213C304.376 8.10768 307.661 7.51359 311.97 8.97517C321.267 12.128 306.755 9.82949 300.749 9.31544C258.019 5.65823 211.933 6.10555 168.245 6.55923C150.598 6.7425 132.905 7.35134 115.28 7.75019C94.2024 8.22715 74.5062 11.4996 54.5042 13.807C53.7216 13.8973 16.5874 18.2861 17.5181 18.6389C18.5939 19.0467 22.9576 18.775 24.3407 18.775C38.0287 18.775 51.1362 17.7224 64.4689 16.6313C82.0958 15.1887 99.1572 15.1001 116.986 15.1001C155.933 15.1001 195.423 14.3815 234.048 16.1889C242.82 16.5994 265.253 16.9781 269.239 20"
                stroke="#008DD9"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <div
              className="right-image-section"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="highlightes card-1">
                <img src={`${bloodTesTimg}`} alt="sample colletcion" />
                <p className="text">Timely sample collection</p>
              </div>
              <div className="highlightes card-2">
                <img src={`${examiningBrainImg}`} alt="Complementary report" />
                <p className="text">Complementary report consultation</p>
              </div>
              <div className="highlightes card-3">
                <img src={`${medicalReportImg}`} alt="timly report" />
                <p className="text">Accurate timely reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <img src={`${Rectangle80}`} alt="rectangle80" />
        <h1>NABL Accredited Labs</h1>
        <img src={`${Rectangle81}`} alt="rectangle81" />
        <h1>Free sample collection</h1>
      </div>
    </div>
  );
};

export default HeroSection;
