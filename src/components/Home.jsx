import React from "react";
import ebook from "../images/ebook.gif";
import Popup from 'reactjs-popup';
import Save from "../images/save.png";
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
        <div className="main container-fluid">
            {/* <div class="cont">
                <div class="progress-bar" id="mybar"></div>
            </div> */}
            <img style={{height: "50vh", float: "right", marginRight: "10vw"}} src={ebook} alt="" />
            <h1 className="heading" style={h1Style}>Just <br />Cl!ck It!</h1><br />
            <p style={{marginLeft: "250px", fontFamily: "'Shantell Sans', cursive"}}>A new and easy way to have you own EBooks.</p>
            <br /><br />
                {/* <button className="explore" style={btnStyle}>Explore</button>*/}
        

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
    );
}

export default Home;