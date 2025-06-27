import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

import { PilotTestimonies1, PilotTestimonies2 } from "../assets/data";

import "./css/Header.css";

const PilotTestimony = () => {
  return (
    <>
      <div className="container p-5">
        <h4 className="text-center testimonials__h4">
          Pilot Testimonials
        </h4>
        <div className="left d-flex justify-content-center">
          <FaQuoteLeft className="quote__left" />
        </div>
        <div className="text text-center">
          {PilotTestimonies1.map(({ testimonial, rank }) => (
            <>
            <p className="testimonial__p">"{testimonial}"</p>
            <blockquote className="text-muted fst-italic">
            - {rank}
          </blockquote>
          </>
          ))}
         
        </div>
        <div className="text text-center">
          {PilotTestimonies2.map(({ testimonial, rank}) => (
            <>
            <p className="testimonial__p">"{testimonial}"</p>
            <blockquote className="text-muted fst-italic">
            - {rank}
          </blockquote>
          </>
          ))}
          
        </div>
        <div className="right d-flex justify-content-center">
          <FaQuoteRight className="quote__right" />
        </div>
      </div>
    </>
  );
};

export default PilotTestimony;
