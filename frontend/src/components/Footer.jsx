import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-scroll";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import mail from "../images/email.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

function Footer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [team, setTeam] = useState(false);
  const teamClose = () => setTeam(false);
  const teamShow = () => setTeam(true);

  const [contact, setContact] = useState(false);
  const contactClose = () => setContact(false);
  const contactShow = () => setContact(true);

  const formStyle = {
    color: "white",
  };

  const whyStyles = {
    textAlign: "left",
    color: "#5D9C59",
  };

  return (
    <Box>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>Why Saavad ?</h2>
          </Modal.Title>
          {/* <img style={{height: "30vh", float: "right", marginRight: "10vw"}} src={Save} alt="save doc" /> */}
        </Modal.Header>
        <Modal.Body>
          <h3 style={whyStyles}>
            Saavaad is one of the few applications (both web and android app)
            which can Summarize, Translate and convert your text to speech in
            one place. <br /> It's just a matter of few clicks and you can have
            your desired result. Get audio of your summary or get it translated
            into another laguage of your choice or summarize your translated
            text with just few clicks all this at one place! <br /> Excited?
            <br />
            <br />
            <Link to="navbar" spy={true} smooth={true} offset={50} duration={500}>
              <button onClick={handleClose} id="tryNow"> Try now!!</button>
            </Link>
          </h3>
        </Modal.Body>
      </Modal>

      <Modal show={team} size="xl" onHide={teamClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>Our Team</h2>
          </Modal.Title>
          {/* <img style={{height: "30vh", float: "right", marginRight: "10vw"}} src={Save} alt="save doc" /> */}
        </Modal.Header>
        <Modal.Body className="row">
          <Card
            style={{ width: "18rem", marginLeft: "20px", marginRight: "50px", border: "0" }}
            className="col-md-auto"
          >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Kodi Rohit</Card.Title>
              <Card.Text>For ML modals</Card.Text>
              <Button variant="primary"
                onClick={() =>
                  (window.location = "mailto:kodirohit1234@gmail.com")
                }
              >Contact</Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "18rem", marginLeft: "50px", marginRight: "90px", border: "0"  }}
            className="col-md-auto"
          >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Lokesh Goenka</Card.Title>
              <Card.Text>For Website</Card.Text>
              <Button variant="primary"
                onClick={() =>
                  (window.location = "mailto:goenkalokesh@gmail.com")
                }
              >Contact</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", border: "0"  }} className="col-md-auto">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Thilak D</Card.Title>
              <Card.Text>For Mobile Application</Card.Text>
              <Button variant="primary"
                onClick={() =>
                  (window.location = "mailto:saithilak04@gmail.com")
                }
              >Contact</Button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>

      <Modal show={contact} size="lg" onHide={contactClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>Write To Us!</h2>
          </Modal.Title>
          {/* <img style={{height: "30vh", float: "right", marginRight: "10vw"}} src={Save} alt="save doc" /> */}
        </Modal.Header>
        <Modal.Body>
          <Form style={formStyle}>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "50vh" }}
              />
            </FloatingLabel>
            <br />
            <br />
            <img
              src={mail}
              alt={mail}
              onClick={() =>
                (window.location = "mailto:goenkalokesh@gmail.com")
              }
              style={{ width: "5%" }}
            />
            {/* /> */}
          </Form>
        </Modal.Body>
      </Modal>
      <h1 className="footerHeading">Saavaad: Just Click It!</h1>
      <br />
      <br />
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink onClick={teamShow}>Team</FooterLink>
            <FooterLink onClick={handleShow}>Why Saavaad?</FooterLink>
            {/* <FooterLink href="#">Testimonials</FooterLink> */}
          </Column>
          <Column>
            <Heading>Services</Heading>
            <Link
              to="tools"
              style={{ textDecoration: "none" }}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <FooterLink>Summary</FooterLink>
            </Link>
            <Link
              to="tools"
              style={{ textDecoration: "none" }}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <FooterLink>Translation</FooterLink>
            </Link>
            <Link
              to="tools"
              style={{ textDecoration: "none" }}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <FooterLink>Text To Speech</FooterLink>
            </Link>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <Link
              style={{ textDecoration: "none" }}
              target="blank"
              href="https://github.com/Lokesh8Goenka/Clickl"
            >
              <FooterLink>Github</FooterLink>
            </Link>
            <FooterLink onClick={contactShow}>Mail</FooterLink>
            {/* <FooterLink href="#">Mumbai</FooterLink> */}
          </Column>
          <Column>
            <Heading>How we </Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Summarize</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Translate</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Text To Speech</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}

export default Footer;

// <div className="footer">
// <br />
//   {/* <hr style={{opacity: "1", marginLeft: "auto", marginRight: "auto"}} /> */}
//   <div className="row">
//   <div className="col" style={{padding: "0"}}>
//       <h1>Saavaad</h1>
//       <p>A Simple way to get you ebooks</p>
//     </div>
//     <div className="col" style={{padding: "0"}}>
//       <h4>Tools</h4>
//       <ul>
//         <li>Summary</li>
//         <li>Ebook</li>
//         <li>Short Story</li>
//         <li>Poem</li>
//         <li>Translation</li>
//         <li>Text To Speech</li>
//       </ul>
//     </div>
//     <div className="col" style={{padding: "0"}}>
//       <h4>Know More</h4>
//       <ul>
//         <li>About Us</li>
//         <li>Contacts</li>
//       </ul>
//     </div>
//     <div className="col" style={{padding: "0"}}>
//       <h4>Connect</h4>
//       <ul>
//         <li>Github</li>
//         <li>LinkedIn</li>
//       </ul>
//     </div>
//   </div>
// </div>
