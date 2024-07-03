import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import "../../styles/photogearshowcase.css";

const gears = [
  {
    name: "Nikon d-3500",
    description:
      "The Nikon D3500 is a digital SLR camera with excellent image quality, ideal for beginners in photography.",
    image: "https://www.photolari.com/wp-content/uploads/2019/03/Nikon-D3500-1.jpg",
    details: "Ideal for professional photography and videography with advanced features.",
  },
  {
    name: "Nikon D-5200",
    description:
      "The Nikon D5200 is a versatile and advanced digital SLR camera, suitable for both amateur photographers and professionals seeking advanced features.",
    image: "https://i.ebayimg.com/images/g/dzAAAOSwqg9ePCa3/s-l1200.jpg",
    details: "Perfect for capturing stunning images in challenging lighting conditions.",
  },
  {
    name: "Nikon Coolpix P900",
    description:
      "The Nikon Coolpix P900 is a compact camera with an impressive 83x optical zoom, great for capturing distant details.",
    image: "https://used.com.ph/uploads/images/5b63ead8aa592.jpg",
    details: "Great for all-around shooting with impressive autofocus and dynamic range.",
  },
];

const GearCard = ({ gear }) => {
  const [hovered, setHovered] = React.useState(false);
  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <div className="gear-card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <animated.div style={springProps}>
        <Card>
          <Card.Img variant="top" src={gear.image} alt={gear.name} className="card-img-top" />
          <Card.Body>
            <Card.Title>{gear.name}</Card.Title>
            <Card.Text>{gear.description}</Card.Text>
            {hovered && (
              <div className="gear-details">
                <p>{gear.details}</p>
              </div>
            )}
          </Card.Body>
        </Card>
      </animated.div>
    </div>
  );
};

const PhotoGearShowcase = () => {
  const [buttonHovered, setButtonHovered] = React.useState(false);
  const buttonSpringProps = useSpring({
    scale: buttonHovered ? 1.1 : 1,
    config: { tension: 300, friction: 10 },
  });

  return (
    <Container className="photo-gear-showcase text-center">
      <h1 style={{ marginBottom: "20px" }}>The Click Lab</h1>
      <div className="subtitle-container">
        <p className="subtitle" style={{ fontStyle: "italic", color: "#333", fontSize: "20px" }}>
          If you are passionate about photography or looking to start, here is my equipment. Look and be inspired by the
          beauty we can capture together. If you're interested in a photography service, feel free to contact me!
        </p>
      </div>
      <Row className="mb-3">
        {gears.map((gear, index) => (
          <Col md={4} key={index} className="my-3">
            <GearCard gear={gear} />
          </Col>
        ))}
      </Row>
      <animated.div
        style={{
          marginTop: "-150px",
          margin: "60px",
          ...buttonSpringProps,
        }}
      >
        <Button
          variant="warning"
          onClick={() => (window.location.href = "https://www.nikon.it/it_IT/products/cameras")}
          className="btn-lg"
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          TAKE YOUR TURN!
        </Button>
      </animated.div>
      {/* New Section */}
    </Container>
  );
};

export default PhotoGearShowcase;
