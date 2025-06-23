import React from "react";

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

              <p className="staff__crew__p text-center">
                {description}
              </p>
            </>
          ))}

          <div className="staff__container border-top">
            {StaffCrew.map(({ id, name, Rank, link}) => (
              <>
                <div className="staff__ranks mt-4 text-center">
                  <a href={link} className="text-secondary text-decoration-none">
                  {name}: {Rank}
                  </a>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffRanks;
