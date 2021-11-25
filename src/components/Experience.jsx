// import { useState } from "react";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import dsc from "../media/forgot.png";
import gotg from "../media/blog.png";
import rfp from "../media/crud.png";
import ca from "../media/restaurant.png";
import tcd from "../media/ecom.png";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
// import Modal from "react-bootstrap/Modal";

const Experience = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Projects -</b>
          </h2>
          <br></br>
          <div className="main_con">
            <Zoom>
              <Row>
                <Col lg={4} sm={12}>
                  <Card
                    align="center"
                    className="exp"
                    data-theme={darkMode ? "dark" : "light"}
                  >
                    <br></br>
                    <center>
                      <div class="flip-card">
                        {/* <div class="flip-card-inner"> */}
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={tcd} />
                          <Card.Body>
                            <Card.Title align="center">
                              Ecommerce Application
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                An Ecommerce site for Cosmetic and Makeup
                                products built using ReactJs, NodeJs and
                                MongoDB.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        {/* </div> */}
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://aravind-ecommerce-client.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn view"
                        >
                          Deployed Site
                        </Button>
                      </a>
                      <div>
                        <a
                          href="https://github.com/Aravindan-111/ecommerce-client"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn view"
                          >
                            Front-End
                          </Button>
                        </a>
                        <a
                          href="https://github.com/Aravindan-111/ecommerce-server"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Back-End
                          </Button>
                        </a>
                      </div>
                    </div>
                    <br></br>
                  </Card>
                </Col>

                <Col lg={4} sm={12}>
                  <Card
                    align="center"
                    className="exp"
                    data-theme={darkMode ? "dark" : "light"}
                  >
                    <br></br>
                    <center>
                      <div class="flip-card">
                        {/* <div class="flip-card-inner"> */}
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={gotg} />
                          <Card.Body>
                            <Card.Title align="center">
                              Blog Application
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                A Simple Blog Application where user can
                                register, login and post Blogs
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        {/* </div> */}
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://mern-blog-aravind.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          Deployed Site
                        </Button>
                      </a>
                      <div>
                        <a
                          href="https://github.com/Aravindan-111/Mern-Blog"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn view"
                          >
                            Front-End
                          </Button>
                        </a>
                        <a
                          href="https://github.com/Aravindan-111/Mern-Blog-server"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Back-End
                          </Button>
                        </a>
                      </div>
                    </div>
                    <br></br>
                  </Card>
                </Col>
                <Col lg={4} sm={12}>
                  <Card
                    align="center"
                    className="exp"
                    data-theme={darkMode ? "dark" : "light"}
                  >
                    <br></br>
                    <center>
                      <div class="flip-card single">
                        {/* <div class="flip-card-inner"> */}
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={ca} />
                          <Card.Body>
                            <Card.Title align="center">
                              Restaurant Application
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                A Single Page Restaurant Application using React
                                JS. JS
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>

                        {/* </div> */}
                      </div>
                    </center>
                    <br></br>
                    <div>
                      <a
                        href="https://restaurant-react-aravind.netlify.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn view"
                        >
                          Deployed Site
                        </Button>
                      </a>
                      <a
                        href="https://github.com/Aravindan-111/Restaurant-React"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <Button
                          variant={darkMode ? "outline-light" : "outline-dark"}
                          className="sbtn"
                        >
                          Github Repo
                        </Button>
                      </a>
                    </div>
                    <br></br>
                  </Card>
                </Col>
              </Row>
            </Zoom>
            <br></br>
            <Zoom>
              <div className="last">
                <Row>
                  <Col lg={4} sm={12}>
                    <Card
                      align="center"
                      className="exp"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card single">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img variant="top" src={rfp} />
                            <Card.Body>
                              <Card.Title align="center">
                                CRUD Operation
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  A simple Application with CRUD operation using
                                  Mock-API
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>

                          {/* </div> */}
                        </div>
                      </center>
                      <br></br>
                      <div>
                        <a
                          href="https://react-crud-context-aravind.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn view"
                          >
                            Deployed Site
                          </Button>
                        </a>
                        <a
                          href="https://github.com/Aravindan-111/react_crud_context"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Github Repo
                          </Button>
                        </a>
                      </div>
                      <br></br>
                    </Card>
                  </Col>
                  <Col lg={4} sm={12}>
                    <Card
                      align="center"
                      className="exp"
                      data-theme={darkMode ? "dark" : "light"}
                    >
                      <br></br>
                      <center>
                        <div class="flip-card">
                          {/* <div class="flip-card-inner"> */}
                          <div className="flip-card-front">
                            <Card.Img variant="top" src={dsc} />
                            <Card.Body>
                              <Card.Title align="center">
                                Forgot Password
                              </Card.Title>
                              <Card.Text>
                                <p align="center">
                                  A Very Simple layout for Register, Login and
                                  Forgot Password operations using React JS,
                                  Node JS and Mongo DB
                                </p>
                              </Card.Text>
                            </Card.Body>
                          </div>

                          {/* </div> */}
                        </div>
                      </center>
                      <br></br>
                      <div>
                        <a
                          href="https://forgot-password-fullstack-aravind.netlify.app/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button
                            variant={
                              darkMode ? "outline-light" : "outline-dark"
                            }
                            className="sbtn"
                          >
                            Deployed Site
                          </Button>
                        </a>
                        <div>
                          <a
                            href="https://github.com/Aravindan-111/forgot-password-fullstack-frontend"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn view"
                            >
                              Front-End
                            </Button>
                          </a>
                          <a
                            href="https://github.com/Aravindan-111/forgot-password-fullstack-backend"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <Button
                              variant={
                                darkMode ? "outline-light" : "outline-dark"
                              }
                              className="sbtn"
                            >
                              Back-End
                            </Button>
                          </a>
                        </div>
                      </div>
                      <br></br>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Zoom>
          </div>
        </Container>
      </Fade>
      <br></br>
      <br></br>
    </div>
  );
};

export default Experience;
