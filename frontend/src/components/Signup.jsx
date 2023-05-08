import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-scroll";

const h2Style = {
  marginLeft: "auto",
  marginRight: "right",
};

function Signup(props) {
  const [show, setShow] = React.useState(true);
  const [loginShow, setloginShow] = React.useState(false);

  function handelVisible() {
    console.log("reached");
    setShow(false);
    setloginShow(true);
  }

  function handleSignup(event) {
    event.preventDefault();
    console.log("Inside submit");
    const data = new FormData(event.currentTarget);
    const requestData = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
    };

    fetch("https://saavaad.serveo.net/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Modal
      show={show}
      // onHide={setShow(false)}
      dialogClassName="loginModal"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 style={h2Style}>SignUp!</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSignup}>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group> */}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="User Name" name="username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="User Email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button type="submit">Signup</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Signup;
