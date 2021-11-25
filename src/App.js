import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, About, Skills, Experience, Contact, Footer } from "./components";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./components/styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  return (
    <Router>
      <div className="App" data-theme={darkMode ? "dark" : "light"}>
        <Route path="/">
          <Navbar
            expand="lg"
            className="navbar"
            data-theme={darkMode ? "dark" : "light"}
          >
            <Navbar.Brand href="#home" className="navname">
              Welcome!
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#about" className="link">
                  About me
                </Nav.Link>
                <Nav.Link href="#skills" className="link">
                  Skills
                </Nav.Link>
                <Nav.Link href="#experience" className="link">
                  Projects
                </Nav.Link>
                <Nav.Link href="#contact" className="link">
                  Contact
                </Nav.Link>
              </Nav>
              <button
                className="button"
                onClick={toggleDarkMode}
                variant={darkMode ? "outline-light" : "outline-dark"}
              >
                {darkMode ? (
                  <FontAwesomeIcon
                    className="sun"
                    size="lg"
                    icon={faSun}
                    spin
                  />
                ) : (
                  <FontAwesomeIcon
                    className="moon"
                    size="lg"
                    icon={faMoon}
                    spin
                  />
                )}{" "}
              </button>
            </Navbar.Collapse>
          </Navbar>
          <div id="home">
            <Home darkMode={darkMode} />
          </div>
          <div id="about">
            <About darkMode={darkMode} />
          </div>
          <div id="skills">
            <Skills darkMode={darkMode} />
          </div>
          <div id="experience">
            <Experience darkMode={darkMode} />
          </div>
          <div id="contact">
            <Contact darkMode={darkMode} />
          </div>
          <Footer />
        </Route>
      </div>
    </Router>
  );
}

export default App;
