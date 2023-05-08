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
  const [resultText, setResultText] = useState("");
  const [resultText2, setResultText2] = useState("");

  const handleLogin= async (event) => {
    event.preventDefault();
    console.log("Inside submit");
    const data = new FormData(event.currentTarget);
    const requestData = {
      username: data.get("username"),
      password: data.get("password"),
    };

    const response = await fetch("https://saavaad.serveo.net/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // mode: "cors",
      body: JSON.stringify({
        text: requestData,
      }),
    });
    const resultText = await response.json();
    setResultText2(JSON.stringify(resultText));
    console.log(resultText2);
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
    //console.log("reached");
    setSignupShow(true);
    setmodalShow(false);
  }

  return (
    <div>
    <Modal
      id="loginmod"
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
        <Form onSubmit={handleLogin}>
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
              <Button id="loginSubmit" type="submit">Submit</Button>
            </div>

            <div className="col">
              <Link>
                <button id="createAcc" onClick={handelVisible}>
                  {" "}
                  Don't have an account?{" "}
                </button>
              </Link>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
    <Signup show={signupShow} onHide={() => setSignupShow(false)} />
    </div>
  );
}

export default MyVerticallyCenteredModal;
