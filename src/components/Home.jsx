import React from "react";

const btnStyle = {
    width: "100px", 
    height: "50px",
    borderRadius: "25px",
    fontSize : "25px"
  }


function Home(){
    return(
        <div className="main">
            <h1 className="heading" style={{borderWidth: '20px', marginLeft: "200px", fontSize: "20vh" }}>Just <br />Cl!ck It!</h1><br />
            <p style={{marginLeft: "250px", fontFamily: "'Shantell Sans', cursive"}}>A new and easy way to have you own EBooks.</p>
            <br /><br />
            <div className="image">
                sdfhgbsndlrkgsbjnrgkjsbjbfg
            </div>
            <table>
                <tr>
                    <td><button className="explore" style={btnStyle}>Explore</button></td>
                </tr>
            </table>
        </div>
    );
}

export default Home;