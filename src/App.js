import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Homepage from "./components/home/homepage";
import PatientsSection from "./components/patients/patientsSection";
import DoctorsSection from "./components/doctors/doctorsSection";
import NotFound from "./components/notFound/notFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/doctors" element={<DoctorsSection />} />
          <Route exact path="/patients" element={<PatientsSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
