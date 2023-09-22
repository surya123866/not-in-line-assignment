import React from "react";
import { Link } from "react-router-dom";

import "./notFound.scss"

const NotFound = () => {
  return (
    <div className="notFoundPage-container">
      <h2>Doctors Page</h2>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
