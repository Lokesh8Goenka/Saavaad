import React from "react";

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

    return (
      <div className="navbar container-fluid row">
        <div className="col-lg-2">
          <h1 style={h1Style}>Cl!ckl</h1>
        </div>
        <div className="col-lg-2">
          <button style={btnStyle}>SignIn</button>    
          <button style={btnStyle}>Sinup</button>    
        </div>
      </div>
    );
}

export default Navbar;