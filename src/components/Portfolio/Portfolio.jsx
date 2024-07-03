import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Modal, Button, Form, InputGroup } from "react-bootstrap";
import { FaEdit, FaTrashAlt, FaSave } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/portfolio.css";

import img1 from "../Portfolio/photoportfolio/Gazebo.jpg";
import img2 from "../Portfolio/photoportfolio/Firenze.jpg";
import img3 from "../Portfolio/photoportfolio/Livorno.jpg";
import img4 from "../Portfolio/photoportfolio/siluette.jpg";
import img5 from "../Portfolio/photoportfolio/tramontocampagna.jpg";
import img6 from "../Portfolio/photoportfolio/Vela.jpg";

import img7 from "../Portfolio/photoportfolio/cat.jpeg";
import img8 from "../Portfolio/photoportfolio/Pinkflowers.jpeg";
import img9 from "../Portfolio/photoportfolio/Riflesso.jpg";

import fullScreenImage from "../Portfolio/photoportfolio/Girasoli.png";

import cameraShutterSound from "../Portfolio/photoportfolio/Audio/camera-shutter-6305.mp3";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [scrollClass, setScrollClass] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState(null);

  const [fullScreenShow, setFullScreenShow] = useState(false);
  const [fullScreenImg, setFullScreenImg] = useState(null);

  const handleClose = () => {
    setShow(false);
    setScrollClass("");
    setCurrentIndex(0);
  };

  const handleShow = (img, category, index) => {
    setSelectedImg(img);
    setSelectedCategory(category);
    setScrollClass("scroll-title");
    setCurrentIndex(index);
    setShow(true);

    const audio = new Audio(cameraShutterSound);
    audio.play();
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % portfolioItems.length;
    setSelectedImg(portfolioItems[newIndex].img);
    setSelectedCategory(portfolioItems[newIndex].category);
    setCurrentIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    setSelectedImg(portfolioItems[newIndex].img);
    setSelectedCategory(portfolioItems[newIndex].category);
    setCurrentIndex(newIndex);
  };

  const showFullScreenImage = (img) => {
    setFullScreenImg(img);
    setFullScreenShow(true);
  };

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const comment = {
      text: newComment,
      imageIndex: currentIndex,
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  const handleEditComment = (index) => {
    setEditingComment(index);
    setNewComment(comments[index].text);
  };

  const handleSaveComment = (index) => {
    if (newComment.trim() === "") return;
    const updatedComments = comments.map((comment, i) => (i === index ? { ...comment, text: newComment } : comment));
    setComments(updatedComments);
    setEditingComment(null);
    setNewComment("");
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const portfolioItems = [
    { img: img1, category: "Terrazza Mascagni - Livorno" },
    { img: img2, category: "Firenze" },
    { img: img3, category: "Colori" },
    { img: img4, category: "Silhouette" },
    { img: img5, category: "Tramonto" },
    { img: img6, category: "Vela - Svizzera" },
    { img: img7, category: "Animal - Cat" },
    { img: img8, category: "Pink Flowers" },
    { img: img9, category: "The rain after the storm" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".portfolio-item img");
      items.forEach((item) => {
        item.classList.add("shuffling");
      });
      setTimeout(() => {
        items.forEach((item) => {
          item.classList.remove("shuffling");
        });
      }, 2000); // Duration of the shuffle animation
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="fullscreen-image-container">
        <img
          src={fullScreenImage}
          alt="Fullscreen"
          className="fullscreen-image"
          onClick={() => showFullScreenImage(fullScreenImage)}
        />
      </div>

      <Container fluid className="portfolio-container text-center my-5" id="portfolio">
        <h1 className="portfolio mb-4 animated-title">PORTFOLIO</h1>
        <p className="sottotitolo">"Check out my best work, organized in a portfolio!"</p>

        <Row className="mt-4">
          {portfolioItems.map((item, index) => (
            <Col xs={12} sm={6} md={4} className="mb-4" key={index}>
              <Card className="portfolio-item" onClick={() => handleShow(item.img, item.category, index)}>
                <Card.Img variant="top" src={item.img} alt={`Immagine ${index + 1}`} className={`img-${index + 1}`} />
                <div className="overlay">{item.category}</div>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={handleClose} fullscreen centered>
          <Modal.Header closeButton style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", borderBottom: "none" }}>
            <Modal.Title style={{ color: "white" }}>
              <div className={scrollClass}>{selectedCategory}</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <Container>
              <Row className="justify-content-center align-items-center">
                <Col xs="auto" className="text-center">
                  <Button
                    variant="light"
                    onClick={prevImage}
                    className="carousel-button"
                    style={{ background: "none", border: "none" }}
                  >
                    <BsChevronLeft size={30} style={{ color: "white" }} />
                  </Button>
                </Col>
                <Col xs={12} md={10} className="text-center">
                  <img
                    src={selectedImg}
                    alt={selectedCategory}
                    className="img-fluid"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "70vh",
                      borderRadius: "10px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
                    }}
                    onClick={() => showFullScreenImage(selectedImg)}
                  />
                  <div className="comment-section mt-4">
                    <h5 className="text-white mb-3">Comments</h5>
                    <div className="comments-list">
                      {comments
                        .filter((comment) => comment.imageIndex === currentIndex)
                        .map((comment, index) => (
                          <Card
                            key={index}
                            className="comment-card mb-3"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.1)",
                              borderRadius: "10px",
                              padding: "15px",
                              transition: "transform 0.2s ease, box-shadow 0.2s ease",
                              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                          >
                            <Card.Body className="d-flex justify-content-between align-items-center">
                              {editingComment === index ? (
                                <InputGroup>
                                  <Form.Control
                                    type="text"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    className="form-control"
                                    style={{ borderRadius: "5px" }}
                                  />
                                  <Button variant="success" onClick={() => handleSaveComment(index)} className="ms-2">
                                    <FaSave />
                                  </Button>
                                </InputGroup>
                              ) : (
                                <>
                                  <span style={{ color: "white", fontSize: "16px", fontWeight: "300" }}>
                                    {comment.text}
                                  </span>
                                  <div>
                                    <Button
                                      variant="outline-warning"
                                      size="sm"
                                      className="me-2"
                                      onClick={() => handleEditComment(index)}
                                      style={{ borderRadius: "5px" }}
                                    >
                                      <FaEdit />
                                    </Button>
                                    <Button
                                      variant="outline-danger"
                                      size="sm"
                                      onClick={() => handleDeleteComment(index)}
                                      style={{ borderRadius: "5px" }}
                                    >
                                      <FaTrashAlt />
                                    </Button>
                                  </div>
                                </>
                              )}
                            </Card.Body>
                          </Card>
                        ))}
                    </div>
                    <Form className="mt-3">
                      <Form.Group controlId="formComment">
                        <InputGroup>
                          <Form.Control
                            type="text"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="form-control"
                            style={{ borderRadius: "20px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
                          />
                          <Button
                            variant="primary"
                            onClick={handleAddComment}
                            className="ms-2"
                            style={{ borderRadius: "20px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
                          >
                            Add
                          </Button>
                        </InputGroup>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
                <Col xs="auto" className="text-center">
                  <Button
                    variant="light"
                    onClick={nextImage}
                    className="carousel-button"
                    style={{ background: "none", border: "none" }}
                  >
                    <BsChevronRight size={30} style={{ color: "white" }} />
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>

        {/* Full Screen Image Modal */}
        <Modal show={fullScreenShow} onHide={() => setFullScreenShow(false)} size="xl" centered>
          <Modal.Body className="text-center p-0">
            <img src={fullScreenImg} alt="Full Screen" style={{ maxHeight: "90vh", objectFit: "contain" }} />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default Portfolio;
