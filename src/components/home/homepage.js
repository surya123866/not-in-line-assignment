import React from "react";

import Expanding from "../expanding/expandingSection";
import Footer from "../footer/footerSection";
import Header from "../header/headerSection";
import Hero from "..//hero/heroSection";
import Packages from "..//packages/packages";
import Whychooseus from "../whychooseus/whychooseusSection";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Expanding />
      <Packages />
      <Whychooseus />
      <Footer />
    </div>
  );
};

export default Homepage;
