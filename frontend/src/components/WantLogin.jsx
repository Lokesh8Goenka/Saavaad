import React,{useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Save from "../images/save.png";
import Login from "./Login.jsx";



function MyVerticallyCenteredModal(props) {

  const [show, setShow] = React.useState(true);
  const [loginShow, setloginShow] = React.useState(false);

  function handelVisible(){
    console.log("reached");
    setShow(false);
    setloginShow(true);
  }


    return (
      <div>
        <Modal show={show}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <h2>Want To save your Cl!cks?</h2>
          </Modal.Title>
          <img style={{height: "30vh", float: "right", marginRight: "10vw"}} src={Save} alt="save doc" />
        </Modal.Header>
        <Modal.Body>
                <h5><button onClick={handelVisible}>Login</button></h5>
        </Modal.Body>
        {/* <Modal.Footer>
        <h5><button style={{justifyContent: "center"}}>Login</button></h5>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>

      <Login  
      show={loginShow}
      onHide={() => setloginShow(false)} 
      />
      </div>
       
    );
  }

export default MyVerticallyCenteredModal;
