import React, { useState } from "react";


function Login() {

    const [hover, setHover] = useState(false);

    function hoverON() {
        setHover(true);
    }
    function hoverOff() {
        setHover(false);
    }



    return(
        <div className="login">
                <h1 style={{fontSize: "72px", padding: "30px"}}>Hello!</h1>
                <div className="container loginInput">
                    <input style={{borderRadius: "15px", height: "50px", width: "500px"}} type="text" placeholder="UserName" /> <br /><br />
                    <input style={{borderRadius: "15px", height: "50px", width: "500px"}} type="password" placeholder="Password" /> <br /><br />
                    <button class="explore"
                        style={{borderRadius: "25px",fontSize: "23px", height:"50px", width: "100px"}}
                        onMouseOver={hoverON}
                        onMouseOut={hoverOff}
                    >
                        Submit
                    </button>
                </div>
        </div>
    );
}

export default Login;