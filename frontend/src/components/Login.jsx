import React, { useState } from "react";
import Signup from "./Signup.jsx";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-scroll";

const h2Style = {
  marginLeft: "auto",
  marginRight: "right",
};

function MyVerticallyCenteredModal(props) {
  const [signup, setSignup] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Inside submit");
    const data = new FormData(event.currentTarget);
    const requestData = {
      username: data.get("username"),
      password: data.get("password"),
    };

    fetch("https://login.serveo.net/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(requestData),
    });

    //.then((response) => response.json())
    //.then((data) => {})
    //.catch((err) => {
    // console.log(err);
    //});
    //console.log(data);
  }

  function handleClick() {
    setSignup(true);
  }

  const [modalShow, setmodalShow] = useState(true);
  const [signupShow, setSignupShow] = useState(false);

  function handelVisible() {
    console.log("reached");
    setmodalShow(false);
    setSignupShow(true);
  }

  return (
    <Modal
      show={modalShow}
      dialogClassName="loginModal"
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
        <Form onSubmit={handleSubmit}>
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <div className="row">
            <div className="col">
              <Button type="submit">Submit</Button>
            </div>

            <div className="col">
              <Link>
                <button id="createAcc" onClick={handelVisible}>
                  {" "}
                  Don't have an account?{" "}
                </button>
              </Link>
              <Signup show={signupShow} onHide={() => setSignupShow(false)} />
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
