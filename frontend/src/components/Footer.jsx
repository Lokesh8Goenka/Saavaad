import React ,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-scroll";
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

  return (
    <Box>
        <Modal show={show}
         size="lg"
         onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            <h2>Why Clickl ?</h2>
            </Modal.Title>
            {/* <img style={{height: "30vh", float: "right", marginRight: "10vw"}} src={Save} alt="save doc" /> */}
          </Modal.Header>
          <Modal.Body>
                  <h5>Why Modal?</h5>
          </Modal.Body>
        </Modal>

        <Modal show={team}
         size="lg"
         onHide={teamClose}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            <h2>Our Team</h2>
            </Modal.Title>
            {/* <img style={{height: "30vh", float: "right", marginRight: "10vw"}} src={Save} alt="save doc" /> */}
          </Modal.Header>
          <Modal.Body>
                  <h5>Our Team</h5>
          </Modal.Body>
        </Modal>
      <h1 className="footerHeading">
        Cl!ckl: Just Click It!
      </h1><br /><br />
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink onClick={teamShow}>Team</FooterLink>
            <FooterLink onClick={handleShow}>Why Clickl?</FooterLink>
            {/* <FooterLink href="#">Testimonials</FooterLink> */}
          </Column>
          <Column>
            <Heading>Services</Heading>
            <Link to="tools" style={{textDecoration: 'none'}} spy={true} smooth={true} offset={50} duration={500}>
              <FooterLink >Summary</FooterLink>
            </Link>
            <Link to="tools" style={{textDecoration: 'none'}} spy={true} smooth={true} offset={50} duration={500}>
              <FooterLink >Translation</FooterLink>
            </Link>
            <Link to="tools" style={{textDecoration: 'none'}} spy={true} smooth={true} offset={50} duration={500}>
              <FooterLink >Text To Speech</FooterLink>
            </Link>
            
            
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <Link style={{textDecoration: 'none'}}
            target= "blank"
              href="https://github.com/Lokesh8Goenka/Clickl"
              >
                <FooterLink >Github</FooterLink>
            </Link>
            <FooterLink href="#">Mail</FooterLink>
            {/* <FooterLink href="#">Mumbai</FooterLink> */}
          </Column>
          <Column>
            <Heading>How we </Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Summarize
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Translate
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Text To Speech
                </span>
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
//       <h1>Cl!ckl</h1>
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
