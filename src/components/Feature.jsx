import React from "react";


function Card(props) {
  return (
        <div className="col"> 
                <div className="card mb-3" style={{maxWidth: "540px", minWidth: "500px", padding: "20px"}}>
                    <div className="row g-0">
                    <div className="col-md-4">
                        <img  src={props.img} className="img-fluid rounded-start" alt="Respective img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h1 className="card-title">{props.title}</h1> <br />
                        <p className="card-text">{props.text}</p>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
  );
}

export default Card;
