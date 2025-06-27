import React from "react";
import SlotCounter from "react-slot-counter";

import "./css/Header.css";

const HeaderCounters = () => {
  return (
    <>
      <div className="container">
        <div className="text-center mb-5 d-flex justify-content-evenly border p-2 rounded shadow-sm">
          <div className="route__counter">
            <h6 className="fw-lighter">Routes🌎</h6>
            <SlotCounter value={30} duration={3} animateOnVisible />
            <span className="text-muted"> +</span>
          </div>

          <div className="pilot__counter">
            <h6 className="fw-lighter">Active Pilots 🧑‍✈️</h6>
            <SlotCounter value={15} duration={3} animateOnVisible />
            <span className="text-muted"> +</span>
          </div>

          <div className="fleet__counter">
            <h6 className="fw-lighter">Fleet✈️</h6>
            <SlotCounter value={10} duration={3} animateOnVisible />
            <span className="text-muted"> +</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCounters;
