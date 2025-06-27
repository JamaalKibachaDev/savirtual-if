import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";


import { FaTiktok, FaYoutube } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

import IF_Logo  from '../assets/if_logo.png'


import './css/Footer.css';

const Footer = () => {
  return (
    <>
      <div className="mt-4">
        <MDBFooter className="text-center text-white bg-dark bg-gradient">
          <MDBContainer className="pb-0">
            <section className="p-4">
            <div className="fs-3 mb-4">
                <h2>Socials :</h2>
          
                <a href="https://community.infiniteflight.com/" className="text-white">
                <img src={IF_Logo} alt="infinite_flight_logo" className="if__logo me-4"/>
                </a>


                <a href="https://www.youtube.com/channel/UCz2OIouIHesDhlfAsLz7qDg" className="text-white">
                  <FaYoutube className="me-5" />
                </a>

                <a href="https://www.tiktok.com/@ifsouthafricanva1" className="text-white">
                  <FaTiktok className="me-5"/>
                </a>

                <a href="mailto:southafricanvirtual1@gmail.com" className="text-white">
                  <IoMailOpenOutline/>
                </a>
              </div>

            

              <div className="">
                <p className="footer__desc text-secondary">
                  Infinite Flight's South African Virtual is not affiliated with
                  or endorsed by the real SA Airways in any way. <br/>
                </p>
              </div>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2025 Copyright : SA Virtual
          </div>
        </MDBFooter>
      </div>
    </>
  );
};

export default Footer;
