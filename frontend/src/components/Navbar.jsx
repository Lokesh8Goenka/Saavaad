import React ,{useState} from "react";
import Scroll from 'react-scroll';
import Login from "./Login.jsx";
import Quotes from "./quotes.js";
import { TypeAnimation } from 'react-type-animation';


const ScrollLink = Scroll.ScrollLink
const h1Style = {
  objectFit: "contain",
  marginLeft: "50px",
}

function Navbar() {
  const [loginShow, setloginShow] = React.useState(false);
  const [showQuote, setShowQuote] = useState("") 

  function handelVisible(){
    console.log("reached");
    setloginShow(true);
  }
  
  const quote= Quotes[(Math.floor(Math.random() * Quotes.length))];
          // onClick={setQuotes}

  // function setQuotes(){
    // setShowQuote()
    // console.log(showQuote);
  // }

    return (
      <div className="navbar container-fluid row" id="navbar">
        <div className="col-lg-2">
          <h1 id="Saavaad" style={h1Style}>Saavaad</h1>
        </div>
        <div className="col-md-auto">
          <p id="quote" style={{color: "white", fontSize: "18px"}}>
            <TypeAnimation
            sequence={[
              quote,
              //1000 waiting time for next item
                        ]}
            />
            
           </p>
        </div>
        <div className="col-lg-2">
            <button className="loginNavbar" onClick={handelVisible}>
              Login
            </button>  
            <Login  
            show={loginShow}
            onHide={() => setloginShow(false)} 
            />
            
        </div>
      </div>
    );
}

export default Navbar;