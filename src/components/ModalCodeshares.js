import React from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdBuildCircle } from "react-icons/md";

const ModalCodeshares = () => {
  const redirect = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="container">
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title className="fw-lighter fst-italic">
                SAAV Codeshares
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="text-center my-4">
              <p>WIP! <br/> Coming Soon😉</p>
              <MdBuildCircle className="fs-1"/>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={redirect}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    </>
  );
};

export default ModalCodeshares;
