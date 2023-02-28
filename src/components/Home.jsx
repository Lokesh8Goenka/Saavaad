import React from "react";
import des from "../images/des.png";

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
    return(
        <div className="main">
            <h1 className="heading" style={h1Style}>Just <br />Cl!ck It!</h1><br />
            <p style={{marginLeft: "250px", fontFamily: "'Shantell Sans', cursive"}}>A new and easy way to have you own EBooks.</p>
            <br /><br />
            <table>
                <tr>
                    <td><button className="explore" style={btnStyle}>Explore</button></td>
                </tr>
            </table>
        </div>
    );
}

export default Home;