import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


import { PilotTestimonies } from '../assets/data';

import './css/Header.css';

const PilotTestimony = () => {
  return (
    <>
    <div className='container p-5'>
        <div className='left d-flex justify-content-center'>
            <FaQuoteLeft className='quote__left'/>
        </div>
        <div className='text text-center'>
          {PilotTestimonies.map(({testimonial}) => (
            <p>
              {testimonial}
            </p>
          ))}
          <blockquote className='text-muted fst-italic'>
            - SAAV Senior Pilot
          </blockquote>
        </div>
        <div className='right d-flex justify-content-center'>
            <FaQuoteRight className='quote__right'/>
        </div>
    </div>
    </>
  )
}

export default PilotTestimony
