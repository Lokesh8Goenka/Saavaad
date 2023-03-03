import React from "react";
import ebook from "../images/ebook.gif";
import Popup from 'reactjs-popup';
// import Safe from "../images/safe-box.gif";
import 'reactjs-popup/dist/index.css';

const btnStyle = {
    width: "100px", 
    height: "50px",
    borderRadius: "25px",
    fontSize : "25px"
  }

const h1Style={
    borderWidth: '20px',
    marginLeft: "200px",
    fontSize: "20vh",
}

function Home(){
//     window.onscroll = function() {
//         let windowScroll = document.documentElement.scrollTop;
//         let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//         let scrollAmount = (windowScroll / windowHeight) * 100;
//         document.getElementById("mybar").style.width = scrollAmount + "%";
//       };

    return(
        <div className="main">
            {/* <div class="cont">
                <div class="progress-bar" id="mybar"></div>
            </div> */}
            <img style={{height: "50vh", float: "right", marginRight: "10vw"}} src={ebook} alt="" />
            <h1 className="heading" style={h1Style}>Just <br />Cl!ck It!</h1><br />
            <p style={{marginLeft: "250px", fontFamily: "'Shantell Sans', cursive"}}>A new and easy way to have you own EBooks.</p>
            <br /><br />
                {/* <button className="explore" style={btnStyle}>Explore</button>*/}
            {/* <Popup trigger=
                {<button className="explore" style={btnStyle}> Explore </button>}
                position="right center">
                <div className="popup">
                    <h3>Want To save your Cl!cks?</h3>
                    <h5><button>Login</button></h5>
                </div>
            </Popup> */}

            <Popup trigger=
                {<button className="explore" style={btnStyle}> Explore </button>}
                modal nested>
                {
                            <div className=".popup-content">
                                <h2>Want To save your Cl!cks?</h2>
                                {/* <img style={{height: "30vh", float: "right", marginRight: "10vw"}} src={Safe} alt="save doc" /> */}
                                <br /><br />
                                <h5><button className="loginbtn">Login</button></h5>
                            </div>
                }
            </Popup>

        </div>
    );
}

export default Home;