import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import mail from "../images/email.png";

function Contact(){


const formStyle = {
    color: "white"
}

    return(
        <div className="summary" id="summary">
            <br />
            <br />

            <div className="container">
                <h1 style={{color: "white"}}>Write To Us!</h1><br />
                <Form style={formStyle}>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                    <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '50vh' }}
                    />
                </FloatingLabel><br /><br />
                        <img src={mail} alt={mail}
                        onClick={() => window.location = 'mailto:goenkalokesh@gmail.com'}
                        style={{width: "5%"}} 
                        />
                    {/* /> */}
                </Form>
                <br />
            </div>
        
        </div>
        
    );
}


export default Contact;

