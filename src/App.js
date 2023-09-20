import "./App.scss";
import ExpandingSection from "./components/expanding/expandingSection";
import FooterSection from "./components/footer/footerSection";

import HeaderSection from "./components/header/headerSection";
import HeroSection from "./components/hero/heroSection";
import Packages from "./components/packages/packages";
import WhychooseusSection from "./components/whychooseus/whychooseusSection";

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <HeroSection />
      <ExpandingSection />
      <Packages />
      <WhychooseusSection />
      <FooterSection/>
    </div>
  );
}

export default App;
