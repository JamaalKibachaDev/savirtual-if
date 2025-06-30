import { React, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { CiMenuBurger } from "react-icons/ci";

import Offcanvas from "react-bootstrap/Offcanvas";

import SAAVLogo from '../assets/saav-no-shadow.png'

import "./css/NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ onClick }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/staff", title: "Staff" },
    { path: "/fleet", title: "Fleet" },
    { path: "/routedb", title: "Hubs & Route Database" },
    { path: "/ranks", title: "Ranks" },
    { path: "/crewCenter", title: "Crew Center" },
    { path: "/codeshares", title: "Codeshares" },
    { path: "/applyNow", title: "Apply Now" },

  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="px-2 d-flex justify-content-between">
          <Navbar.Brand href="/">
          <img src={SAAVLogo} alt="" width='100' height='100' />
          </Navbar.Brand>
        
          <CiMenuBurger onClick={handleShow} className="CiMenuBurger mx-3" />
        </Container>

        <Offcanvas show={show} onHide={handleClose} className="offcanvas__nav">
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Container>
              <Nav className="">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.title}
                    to={link.path}
                    className="text-decoration-none text-muted my-2 fs-4"
                    onClick={handleClose}
                  >
                    {link.title}
                  </NavLink>
                ))}
              </Nav>
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </Navbar>
    </>
  );
};

export default NavBar;
