import React from "react";
import Scroll from 'react-scroll';
import Login from "./Login.jsx";


const ScrollLink = Scroll.ScrollLink
const h1Style = {
  height: "10vh",
  objectFit: "contain",
  marginLeft: "50px",
  // color: "#13183e",
}

const btnStyle = {
  borderRadius: "25px",
  height: "45px",
  width: "100px",
  fontSize: "25px",
}

function Navbar() {
  const [loginShow, setloginShow] = React.useState(false);

  function handelVisible(){
    console.log("reached");
    setloginShow(true);
  }

    return (
      <div className="navbar container-fluid row">
        <div className="col-lg-2">
          <h1 style={h1Style}>Cl!ckl</h1>
        </div>
        <div className="col-lg-2">

            <button style={btnStyle} onClick={handelVisible}>
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