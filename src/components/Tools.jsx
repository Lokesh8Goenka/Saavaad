import React from "react";

const h1Style = {
    fontFamily: "'Pacifico', 'cursive'",
    fontSize: "50px",
    textAlign: "center",
    color: "#16e0d3"
}

const imgStyle = {
    height: "40vh",
    objectFit: "contain",
    paddingLeft: "150px"
}

function Tools() {
    return(
        <div className="tools">
            {/* <table>
                <th>Tools</th>
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>4</td>
                </tr>
            </table> */}
            <h1 style={h1Style}>Tools</h1>
            <div className="row">
                <div className="col"><img style={imgStyle} src="../images/dodle.png" alt="" /></div>
                <div className="col"><img style={imgStyle} src="../images/dodle.png" alt="" /></div>
            </div>
            <div className="row">
                <div className="col"><img style={imgStyle} src="../images/dodle.png" alt="" /></div>
                <div className="col"><img style={imgStyle} src="../images/dodle.png" alt="" /></div>
            </div>
        </div>
    );
}

export default Tools;