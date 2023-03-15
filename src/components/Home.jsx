import React from "react";
import Popup from 'reactjs-popup';
import Save from "../images/save.png";
import Scanner from "../images/scanner.png";
import 'reactjs-popup/dist/index.css';
import Card from 'react-bootstrap/Card';
import Upload from "../images/upload.png";
import Download from "../images/download.png";
import Process from "../images/process.png";
import Choose from "../images/click.png";

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


    return(
        <div className="main container-fluid">
            {/* <div class="cont">
                <div class="progress-bar" id="mybar"></div>
            </div> */}
            <div className="row">
               
                <div className="col">
                    <h1 className="heading" style={h1Style}>Just Cl!ck It!</h1>
                    <p style={{marginLeft: "250px", fontFamily: "'Shantell Sans', cursive"}}>A new and easy way to have you own EBooks.</p>
                    
                </div>
                <div className="col">
                    <img style={{height: "50vh",margin: "30px 100px"  }} src={Scanner} alt="EBook gif" />
                </div> 
                
            </div><br />
            <div className="row">
                <div className="col">
                <Popup trigger=
                        {<button className="explore" style={btnStyle}> Explore </button>} 
                        modal nested>
                        {
                                    <div className=".popup-content" >
                                        <img style={{height: "30vh", float: "right", marginRight: "10vw"}} src={Save} alt="save doc" />
                                        <br /><br />
                                        <h2>Want To save your Cl!cks?</h2>
                                        <h5><button>Login</button></h5>
                                    </div>
                        }
                    </Popup> <br /><br /><br />
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
                                Choose from the options what you want?
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