import React from "react";
import { Link } from "react-router-dom";

import "./patientsSetcion.scss";

const PatientsSection = () => {
  return (
    <div className="patientsPage-container">
      <h2>Patients Page</h2>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default PatientsSection;
