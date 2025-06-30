import React from "react";
import Button from "react-bootstrap/Button";

const CrewCenter = () => {
  return (
    <>
      <div className="container">
        <div className="my-4">
      <h2 className="staff__h2 text-end">
              Crew Center
            </h2>
        <p className="text-center m-4">
          Welcome to the <strong>South African Virtual Crew Center</strong>, click on the link below to get access.
          Both <strong> Pilots</strong> and <strong>Staff</strong> are welcome to join.😉
        </p>
        </div>

        <div className="d-flex justify-content-center">
          <Button variant="dark" className="shadow">
            <a href="https://www.digitalcrew.app/" className="text-decoration-none text-light">Crew Center</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default CrewCenter;
