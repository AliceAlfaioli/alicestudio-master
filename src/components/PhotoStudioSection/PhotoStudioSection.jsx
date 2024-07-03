import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Modal } from "react-bootstrap";
import faceman from "./Ritratto/faceman.jpg";
import "../../styles/photostudiosection.css"; // Assicurati che il percorso sia corretto

const PhotoStudioSection = () => {
  const [animateImage, setAnimateImage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Stato per gestire il passaggio del mouse sull'immagine

  useEffect(() => {
    const timer = setTimeout(() => setAnimateImage(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = () => {
    setShowModal(true);
  };

  return (
    <Container fluid className="bg-dark text-light">
      <Row className="align-items-center">
        <Col md={6} className="d-flex flex-column justify-content-center" style={{ padding: "100px" }}>
          <h5 className="text-uppercase" style={{ fontStyle: "italic", fontSize: "14px" }}>
            PASSION PHOTO
          </h5>
          <h1 className="display-3 elegant-underline">Alice</h1>{" "}
          {/* Aggiunta la classe CSS per l'animazione elegante */}
          <p className="lead" style={{ fontSize: "18px" }}>
            "My passion for photography illuminates every shot, turning moments into eternal memories."
          </p>
          <p style={{ fontStyle: "italic", fontSize: "25px" }}>
            "To elevate photography beyond mere images is to grasp the very essence of life: it is to see beyond what
            the eyes reveal, to capture the light of the soul in smiles, gazes, and gestures, transforming fleeting
            moments into indelible memories that speak directly to the heart."
          </p>
          <p style={{ fontSize: "19px", marginTop: "80px" }}>
            {" "}
            "Smiles Under the Hat: A Portrait of Life" - NIkon D-5200, 18-300mm, f/4, 1/160sec, ISO 200
          </p>
        </Col>
        <Col md={6} className="p-0">
          {/* Aggiungi gestori di eventi per il clic e il passaggio del mouse sull'immagine */}
          <Image
            src={faceman}
            alt="Faceman"
            fluid
            className={`image-cover ${animateImage ? "animate" : ""} ${isHovered ? "zoom-in" : ""}`}
            onClick={handleImageClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ cursor: "pointer" }}
          />
        </Col>
      </Row>

      {/* Modal per visualizzare l'immagine a schermo intero */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="xl">
        <Modal.Body className="modal-body-image">
          <Image src={faceman} alt="Faceman" fluid />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PhotoStudioSection;
