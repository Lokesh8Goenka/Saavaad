import React from "react";
import ebook from "../images/ebook.gif";
import Popup from 'reactjs-popup';
import Save from "../images/save.png";
import 'reactjs-popup/dist/index.css';

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

function Home(){

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
                    <img style={{height: "50vh"}} src={ebook} alt="EBook gif" />
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
                    </Popup>
                </div>
            </div>

        </div>
    );
}

export default Home;