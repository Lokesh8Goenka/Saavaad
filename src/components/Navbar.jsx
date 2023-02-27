import React from "react";

const h1Style = {
  height: "10vh",
  objectFit: "contain",
  paddingLeft: "100px",
  color: "#13183e",
}

const btnStyle = {
  borderRadius: "25px",
  height: "45px",
  width: "100px",
  fontSize: "20px",
  marginRight: "200px"
}

function Navbar() {

    return (
      <div className="navbar">
        <h1 style={h1Style}>Cl!ckl</h1>
        <button style={btnStyle}>Login</button>
      </div>
    );
}

export default Navbar;