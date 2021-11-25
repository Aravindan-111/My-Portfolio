import React from "react";
import { AttentionSeeker } from "react-awesome-reveal";
import helloLight from "../media/hello-light.jpeg";
import helloDark from "../media/hello-dark.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import Wave from "react-wavify";

const Home = ({ darkMode }) => {
  return (
    <div>
      <AttentionSeeker shakeX>
        <Row>
          <Col lg={12} xs={12}>
            <h1 className="display-3 hello" align="center">
              HELLO!<code> I'm Aravind</code>
            </h1>
            <h2 className="lead" align="center">
              I am a&nbsp;
              <span
                class="txt-rotate"
                data-period="2000"
                data-rotate='[ "React JS", "Node JS", "JS", "HTML"]'
              ></span>
              &nbsp;Developer
            </h2>
          </Col>
        </Row>
      </AttentionSeeker>
      <Row>
        <Container align="center" className="wave">
          <div>
            <Wave
              fill="#0275d8"
              paused={false}
              options={{
                height: 20,
                amplitude: 20,
                speed: 0.5,
                points: 3,
              }}
            />
          </div>
        </Container>
      </Row>

      <br></br>
    </div>
  );
};

export default Home;
