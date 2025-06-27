import React from "react";
import Header from "../components/Header";
import InfoCards from "../components/InfoCards";
import AccordionHeader from "../components/AccordionHeader";
import VATrailer from "../components/VATrailer";
import PilotTestimony from "../components/PilotTestimony";
import HeaderCounters from "../components/HeaderCounters";

const Home = () => {
  return (
    <>
      <div className="main-contianer">
        <Header />

        <div>
          <div>
            <HeaderCounters />
            <VATrailer />
            <PilotTestimony />
            <InfoCards />
          </div>

          <AccordionHeader />
        </div>
      </div>
    </>
  );
};

export default Home;
