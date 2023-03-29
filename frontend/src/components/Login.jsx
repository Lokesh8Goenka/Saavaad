import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-scroll";


const h2Style = {
    marginLeft: "auto",
    marginRight: "right"
}

function MyVerticallyCenteredModal(props) {

  

    return (
      <Modal dialogClassName="loginModal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h2 style={h2Style}>Save Your Clicks!</h2>
          </Modal.Title>
          
        </Modal.Header>
        <Modal.Body>
                <Form>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group> */}

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="User Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to="features" spy={true} smooth={true} offset={50} duration={500} style={{float: "right"}}>
                        Don't have an account
                    </Link>
                    <Button type="submit">
                        Submit
                    </Button>
            </Form>
        </Modal.Body>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal;
