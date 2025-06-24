import React from "react";

import "./css/ApplyNow.css";

import { applyHeader, applyRequirements } from "../assets/data";

const ApplyHeader = () => {
  return (
    <>
      <div className="main-container">
        <div className="text-center p-4">
          {applyHeader.map(({ id, title, description }) => (
            <>
              <h2 className="apply__h2 text-end mb-5" id={id}>{title}</h2>
              <p className="apply__p " id={id}>{description}</p>
            </>
          ))}

          <hr/>

          <div className="google__container my-4">
            <div className="google__forms">
              <a
                href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSeuS5VXucYSc-qSyPLhEhV-r5tp6nVg9zcgmEbfm7Wxgu2-lg%2Fviewform%3Fpli%3D1&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSeuS5VXucYSc-qSyPLhEhV-r5tp6nVg9zcgmEbfm7Wxgu2-lg%2Fviewform%3Fpli%3D1&ifkv=AdBytiMhEzqvfXvxoeHTQekTu5w0jdE8DkPC7tx3jNWmLKr9J4MaHZ-J1Q3LxPrrsL758ETzoCwfEg&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S620979918%3A1749132009724287"
                className="form__google btn btn-dark bg-gradient px-3 mt-4 shadow-sm"
              >
                {" "}
                Application Form
              </a>
            </div>
          </div>

          <div className="requirements__container text-secondary py-2">
            {applyRequirements.map(({ id, value }) => (
              <>
                <ul className="requirements__ul">
                  <li className="requirements__li" id={id}>
                    {value}
                  </li>
                </ul>
              </>
            ))}
          </div>




          <div className="mt-4 d-flex justify-content-evenly border-top pt-3">
            <a
              href="https://community.infiniteflight.com/u/josiah_dennis/summary"
              className=" apply__a text-decoration-none text-dark"
            >
              Josiah Dennis (CEO)
            </a>
            <a
              href="https://community.infiniteflight.com/u/lufthansa1/summary"
              className="apply__a text-decoration-none text-dark"
            >
              Lufthansa1 (COO)
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyHeader;
