import React  from "react";


function Card(props) {

  return (
    <div className="feature">
        <div className = "container">
                <div className = "cards">
                <div className = "image">
                    <img src={props.img} alt={props.title} />
                </div>
                <div className = "content">
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
                </div>    
        </div>
    </div>
        

        // <div className="col"> 
        //         <div className="card-transparent mb-3" style={{maxWidth: "520px", minWidth: "500px", padding: "10px", marginLeft: "auto", marginRight:"auto"}}>
        //             <div className="row g-0">
        //             <div className="col-md-4">
        //                 <img src={props.img} className="img-fluid rounded-start" alt="Respective img" />
        //             </div>
        //             <div className="col-md-8">
        //                 <div className="card-body">
        //                 <h1 className="card-title">{props.title}</h1> <br />
        //                 <p className="card-text">{props.text}</p>
        //                 </div>
        //             </div>
        //             </div>
        //         </div><br /><br />
        // </div>
  );
}


export default Card;
