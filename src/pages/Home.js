import React from "react";
import Header from "../components/Header";
import InfoCards from "../components/InfoCards";
import AccordionHeader from "../components/AccordionHeader";
import VATrailer from "../components/VATrailer";

const Home = () => {
  return (
    <>
      <div className="main-contianer">
        <Header />

        <div>
          <div>
            <InfoCards />
          </div>

          <AccordionHeader />
          <VATrailer />
        </div>
      </div>
    </>
  );
};

export default Home;
