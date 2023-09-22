import React from "react";
import { Link } from "react-router-dom";

import "./doctorsSection.scss";

const DoctorsSection = () => {
  return (
    <div className="doctorsPage-container">
      <h2>Doctors Page</h2>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default DoctorsSection;
