import React, { useState } from "react";
import { Link } from "react-scroll";

function Card(props) {
  return (
    <div className="feature">
      <Link to="process" spy={true} smooth={true} offset={50} duration={500}>
        <div
          onClick={() => {
            props.handleClick(props.title);
          }}
          className="container"
        >
          <div className="cards">
            <div className="image">
              <img src={props.img} alt={props.title} style={{width: "80%"}} />
            </div>
            <div className="content">
              <h3>{props.title}</h3>
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
