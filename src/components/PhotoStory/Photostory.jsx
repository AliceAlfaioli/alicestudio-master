import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsCameraFill, BsHeartFill, BsPeopleFill } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/photostory.css";

const Photostory = () => {
  return (
    <Container fluid className="photostory-container">
      <Row className="text-center mb-3">
        <Col
          className="d-flex flex-column flex-md-row justify-content-center align-items-center"
          style={{ gap: "20px" }}
        >
          <div className="icon-container">
            <BsCameraFill className="icon icon-yellow" />
          </div>
          <div className="icon-container">
            <BsHeartFill className="icon icon-red" />
          </div>
          <div className="icon-container">
            <BsPeopleFill className="icon icon-green" />
          </div>
        </Col>
      </Row>
      <Row className="text-center mb-3">
        <Col>
          <h1 className="photostory-title">A Photographic Adventure Between Light and Shadow</h1>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <p className="photostory-quote">
            "Since I was a child, my passion for photography has flourished through my father's lens, an avid
            photographer. Watching him capture the world through his camera, I discovered the{" "}
          </p>{" "}
          <p style={{ fontStyle: "italic", fontSize: "20px" }}>
            enchantment of seizing moments and narrating stories through images. This experience has further fueled my
            love for the art of photography."
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Photostory;
