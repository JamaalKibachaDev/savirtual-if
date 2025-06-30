import React from "react";

import Card from 'react-bootstrap/Card';

import { StaffCrew, StaffCrewHeader } from "../assets/data";

import "./css/Staff.css";

const StaffRanks = () => {
  return (
    <>
      <div className="container">
        <div className="staff__crew">
          {StaffCrewHeader.map(({ id, title, description }) => (
            <>
              <h4 className="text-center">{title}</h4>

              <p className="staff__crew__p text-center">{description}</p>
            </>
          ))}

       
          <Card className="staff__rank__card" border="secondary">

            {StaffCrew.map(({name, Rank, link, image}) => (
              <>
              <a href={link}  className="text-decoration-none ">
                <Card.Header className="bg-gradient"/>
                <Card.Body className="mb-4 d-flex justify-content-evenly">
                <img
                      src={image}
                      alt="staff-img"
                      className="staff-pfp rounded-circle"
                    />
                  <blockquote className="blockquote mb-0">
                    <p className="fs-6 p-2">{Rank}</p>
                    <footer className="blockquote-footer">
                    {name}
                    </footer>
                  </blockquote>
                </Card.Body>
                </a>
              </>
            ))}
          </Card>
         
        </div>
      </div>
    </>
  );
};

export default StaffRanks;
