import React from "react";
// import Scanner from "../images/scanner.png";
import Clickl from "../images/clickl3.png";
import Card from 'react-bootstrap/Card';
import Upload from "../images/upload.png";
import Download from "../images/download.png";
import Process from "../images/process.png";
import Choose from "../images/click.png";
import WantLogin from './WantLogin';
import { Link } from "react-scroll";
// import loginImg from "../images/haveAnAccount.png";



const btnStyle = {
    padding: "25px 40px",
    borderRadius: "25px",
    fontSize : "55px"
  }

const h1Style={
    borderWidth: '20px',
    marginLeft: "100px",
    fontSize: "20vh",
}

const cardStyles = {
    borderWidth: 0,
    backgroundColor: "#13183e",
}


function Home(){

function hoverON(e) {
    console.log("on");
}

const [modalShow, setModalShow] = React.useState(false);

    return(
        <div className="main container-fluid">
            {/* <div class="cont">
                <div class="progress-bar" id="mybar"></div>
            </div> */}
            <div className="row">
            {/* <img src={loginImg} alt="EBook gif" /> */}
                <div className="col">
                    <h1 className="heading" style={h1Style}>Just Cl!ck It!</h1>
                    <p style={{marginLeft: "250px", fontFamily: "'Shantell Sans', cursive"}}>A new and easy way to have you own EBooks.</p>
                    
                </div>
                <div className="col">
                    <img style={{marginTop: "10px"}}  src={Clickl} alt="Clickl3" />
                </div> 
                
            </div><br />
            <div className="row">
                <div className="col">
                <Link to="features" spy={true} smooth={true} offset={50} duration={500}>
                    <button className="explore"  onClick={() => setModalShow(true)} style={btnStyle}> Explore </button>     
                </Link>
                    <WantLogin  
                    show={modalShow}
                    onHide={() => setModalShow(false)} 
                    /> 
                </div>
            </div> 
            <br /><br /><br />
            <div className="about container text-center">
                <h3>How to use?</h3> <br />
                <div className="row">
                    
                    <div className="col">

                    <Card onMouseOver={hoverON} style={cardStyles}>
                    <Card.Img variant="top" src={Choose} />
                        <Card.Body>
                        <Card.Title>Step 1</Card.Title>
                        <Card.Text>
                            Choose from the options what you want?
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br /> <br />
                    </div>

                    <div className="col">

                        <Card onMouseOver={hoverON} style={cardStyles}>
                        <Card.Img variant="top" src={Upload} />
                            <Card.Body>
                            <Card.Title>Step 2</Card.Title>
                            <Card.Text>
                                Uplaod the contents!
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <br /> <br />
                    </div>

                    <div className="col">
                    <Card style={cardStyles}>
                    <Card.Img variant="top" src={Process} />
                            <Card.Body>
                            <Card.Title> Step 3</Card.Title>
                            <Card.Text>
                           Wait a Few sec for processing.    
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                    <Card style={cardStyles}>
                    <Card.Img variant="top" src={Download} />
                            <Card.Body>
                            <Card.Title>Step 4</Card.Title>
                            <Card.Text>
                                Download the result!
                            </Card.Text>
                            </Card.Body>
                    </Card>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Home;