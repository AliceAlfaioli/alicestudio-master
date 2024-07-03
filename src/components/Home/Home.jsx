import React, { useState } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";

import "../../styles/home.css";
import logo from "../Home/logo/Alice_Logo_Giallo_Grande22-genio1-removebg-preview.png";

const Home = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowContactPopup(true);
  };

  const handleMouseLeave = () => {
    setShowContactPopup(false);
  };

  const handlePortfolioMouseEnter = () => {
    setShowPortfolioDropdown(true);
  };

  const handlePortfolioMouseLeave = () => {
    setShowPortfolioDropdown(false);
  };

  return (
    <Container fluid className="home-page">
      {/* Logo */}
      <Row className="justify-content-start align-items-center logo-section">
        <Col xs={12} md={3} className="text-center">
          <div className="text-overlay">
            <img src={logo} alt="Logo" className="logo-img" />
          </div>
        </Col>

        {/* Navbar */}
        <Col xs={12} md={9} className="d-flex justify-content-end">
          <Navbar expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto custom-nav">
                <Nav.Link href="#home" className="custom-nav-link primary-icon">
                  <FontAwesomeIcon icon={faHome} /> {/* Icona HOME */}
                </Nav.Link>
                <Nav.Link
                  href="#portfolio"
                  className="custom-nav-link primary-icon"
                  onMouseEnter={handlePortfolioMouseEnter}
                  onMouseLeave={handlePortfolioMouseLeave}
                >
                  <FontAwesomeIcon icon={faBriefcase} /> {/* Icona PORTFOLIO */}
                  <div className={`portfolio-dropdown ${showPortfolioDropdown ? "show" : ""}`}>
                    <ul>
                      <li>
                        <a href="#portfolio1">Passion Photo</a>
                      </li>
                      <li>
                        <a href="#portfolio2">Photo Story</a>
                      </li>
                      <li>
                        <a href="#portfolio3">Portfolio</a>
                      </li>
                      <li>
                        <a href="#portfolio3">The Click Lab</a>
                      </li>
                    </ul>
                  </div>
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className="custom-nav-link primary-icon"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <FontAwesomeIcon icon={faEnvelopeOpenText} /> {/* Icona CONTATTI */}
                  {showContactPopup && (
                    <div className="contact-popup">
                      <div className="popup-header">Contact Us</div>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" /> alicealice5693@yahoo.it
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faPhone} className="icon" /> +39 320 94 40 122
                        </li>
                      </ul>
                    </div>
                  )}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>

      {/* Quote Section */}
      <Row className="quote-section justify-content-center align-items-center">
        <Col xs={12} className="text-center">
          <div className="text-overlay">
            <p>
              “Capturing your <br /> life on film!”
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
