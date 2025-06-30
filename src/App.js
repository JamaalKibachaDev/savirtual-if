import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import RouteDb from "./pages/RouteDb";
import ApplyNow from "./pages/ApplyNow";
import Staff from "./pages/Staff";
import Fleet from "./pages/Fleet";
import Ranks from "./pages/Ranks";

//scroll to top btn
import ScrollToTop from "react-scroll-to-top";
import Codeshares from "./pages/Codeshares";
import CrewCenter from "./pages/CrewCenter";

const App = () => {
  return (
    <>
      <NavBar />

      <ScrollToTop className="scroll__btn shadow" smooth />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/routedb" element={<RouteDb />} />
        <Route path="/applyNow" element={<ApplyNow />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/ranks" element={<Ranks />} />
        <Route path="/codeshares" element={<Codeshares />}/>
        <Route path="/crewCenter" element={<CrewCenter />}/>

      </Routes>

      <Footer />
    </>
  );
};

export default App;
