import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import CookieConsent from "react-cookie-consent";
import { useSpring, animated } from "react-spring";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/footer.css";

const Footer = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    location: "",
    wishes: "",
    message: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [alertStyle, setAlertStyle] = useState({});

  useEffect(() => {
    setShowBanner(true);
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
  };

  const handleDecline = () => {
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    setFormErrors({ ...formErrors, [id]: "" });
    setAlertStyle({
      ...alertStyle,
      opacity: 0,
      transform: "translateY(-20px)",
    });
    setShowErrorAlert(false);
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setAlertStyle({
        opacity: 1,
        transform: "translateY(0)",
      });
      setShowErrorAlert(true);
      return;
    }

    setShowConfirmation(true);
    setFormErrors({});
    setAlertStyle({
      opacity: 0,
      transform: "translateY(-20px)",
    });
    setShowErrorAlert(false);

    setFormData({
      name: "",
      email: "",
      date: "",
      location: "",
      wishes: "",
      message: "",
    });
  };

  // Animation config for Alert
  const alertAnimation = useSpring({
    opacity: showConfirmation ? 1 : 0,
    transform: showConfirmation ? "translateY(0)" : "translateY(-100%)",
  });

  return (
    <>
      <Container fluid className="photo-session-page">
        <Row className="justify-content-center align-items-center vh-100">
          <Col md={8} className="text-center form-container">
            <h1 className="title-hover-animated">Contact us</h1>
            <div className="contact-info">
              <p>Phone: +39 320 94 40 122</p>
              <p>Email: alicealice5693@yahoo.it</p>
            </div>
            <p className="highlight-text">Make your memories amazing and unforgettable!</p>

            {showErrorAlert && (
              <Alert variant="danger" style={alertStyle} className="mt-3">
                Please fill in all required fields correctly.
              </Alert>
            )}

            <Form className="booking-form" onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Control
                  type="text"
                  placeholder="Name*"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!formErrors.name}
                  className={formErrors.name ? "is-invalid" : ""}
                />
                {formErrors.name && <Form.Control.Feedback type="invalid">{formErrors.name}</Form.Control.Feedback>}
              </Form.Group>
              <Form.Group controlId="email" className="mt-3">
                <Form.Control
                  type="email"
                  placeholder="E-mail*"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!formErrors.email}
                  className={formErrors.email ? "is-invalid" : ""}
                />
                {formErrors.email && <Form.Control.Feedback type="invalid">{formErrors.email}</Form.Control.Feedback>}
              </Form.Group>
              <Form.Group controlId="date" className="mt-3">
                <Form.Control type="date" placeholder="Date" value={formData.date} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="location" className="mt-3">
                <Form.Control type="text" placeholder="Location" value={formData.location} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="wishes" className="mt-3">
                <Form.Control
                  type="text"
                  placeholder="Describe your wishes"
                  value={formData.wishes}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="message" className="mt-3">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button className="mt-3" variant="dark" type="submit">
                Send
              </Button>
            </Form>
            <animated.div style={alertAnimation}>
              {showConfirmation && (
                <Alert variant="success" className="mt-3" style={{ border: "1px solid #3cba9f", borderRadius: "8px" }}>
                  <Alert.Heading
                    style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px", color: "#3cba9f" }}
                  >
                    Message Sent Successfully!
                  </Alert.Heading>
                  <hr />
                  <p style={{ fontSize: "1.1rem", marginBottom: "15px", color: "#6c757d" }}>
                    Thank you, <strong>{formData.name}</strong>! Your message has been received. We will get back to you
                    soon.
                  </p>
                  <Button
                    onClick={() => setShowConfirmation(false)}
                    variant="outline-success"
                    style={{ fontSize: "1rem", borderRadius: "8px" }}
                  >
                    Close
                  </Button>
                </Alert>
              )}
            </animated.div>
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <div>&copy; June 2024 Alice Alfaioli. All rights reserved.</div>
        <div>
          <a href="#privacy-policy">Privacy Policy</a> - <a href="#cookies-policy">Cookies Policy</a>
        </div>
      </footer>
      {showBanner && (
        <CookieConsent
          location="bottom"
          buttonText="Accept and Close"
          declineButtonText="Decline and Close"
          onAccept={handleAccept}
          onDecline={handleDecline}
          disableStyles={true}
          buttonStyle={{
            background: "#FFD700",
            color: "#000",
            padding: "12px 24px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            borderRadius: "4px",
            margin: "0 12px",
          }}
          style={{
            background: "#FFFFF0",
            color: "#000",
            padding: "24px",
            position: "fixed",
            bottom: "0",
            width: "500px",
            height: "300px",
            border: "2px solid yellow",
            zIndex: "9999",
            textAlign: "center",
            boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            margin: "auto",
            left: 0,
            right: 0,
          }}
          contentStyle={{
            flex: "1",
            maxWidth: "460px",
            margin: "0 10px",
            textAlign: "left",
          }}
          buttonWrapperClasses="cookie-buttons"
          expires={0}
        >
          <button
            onClick={handleClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
          <p style={{ fontSize: "14px", marginBottom: "10px" }}>
            <strong>We respect your privacy!</strong>
          </p>
          <p style={{ fontSize: "12px" }}>
            We and our partners use cookies for purposes such as displaying personalized ads, measuring traffic and
            visitor preferences, and personalizing content.
          </p>
          <p style={{ fontSize: "12px" }}>
            With your consent, we and our{" "}
            <a href="https://example.com" style={{ color: "#0000EE" }}>
              partners
            </a>{" "}
            use cookies and similar technologies to store, access, and process personal data such as your visit to this
            website.
          </p>
          <Button
            variant="light"
            style={{
              background: "#D3D3D3",
              color: "#000",
              padding: "12px 24px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              borderRadius: "4px",
              margin: "0 12px",
            }}
            onClick={handleDecline}
          >
            Decline and Close
          </Button>
        </CookieConsent>
      )}
    </>
  );
};

export default Footer;
