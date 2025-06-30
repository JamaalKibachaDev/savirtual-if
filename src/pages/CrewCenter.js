import React from "react";
import Button from "react-bootstrap/Button";

const CrewCenter = () => {
  return (
    <>
      <div className="container">
        <p className="text-center m-4">
          Welcome to the South African Virtual Crew Center, click on the link below to get access.
          Both Pilots and Staff are welcome to join.😉
        </p>

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
