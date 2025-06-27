import React from "react";
import Header from "../components/Header";
import InfoCards from "../components/InfoCards";
import AccordionHeader from "../components/AccordionHeader";
import VATrailer from "../components/VATrailer";
import PilotTestimony from "../components/PilotTestimony";

const Home = () => {
  return (
    <>
      <div className="main-contianer">
        <Header />

        <div>
          <div>
            <VATrailer />
            <PilotTestimony/>
            <InfoCards />
          </div>

          <AccordionHeader />
          
        </div>
      </div>
    </>
  );
};

export default Home;
