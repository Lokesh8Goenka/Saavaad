import React from "react";
import ebook from "../images/ebook.png";
import more from "../images/more.png";
import poem from "../images/poem.png";
import contract from "../images/contract.png";
import shortstory from "../images/fantasy.png";

const cardTitle = { 
  color: "#ff6e49",
}

function Features() {
  return(
    <div style={{marginTop: "5%"}}>
      <div className="toolsheading">
          <h2 style={{fontSize: "50px"}}> Tools </h2>
      </div>
      <div className="container text-center">
        <div className="row">
        {/* col-lg-4 col-md-6 */}
          <div className="col"> 
                <div className="card" style={{width: "18rem", marginRight: "5vw", border: "none"}}>
                  <img src={contract} className="card-img-top m-auto" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                      <h5 className="card-title" style={cardTitle}>Summary</h5>
                      <p className="card-text"></p>
                    </div>
                </div>
          </div>
          <div className="col">
                <div className="card" style={{width: "18rem", marginRight: "5vw", border: "none"}}>
                  <img src={ebook} className="card-img-top m-auto" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                    <h5 className="card-title"  style={cardTitle}>Ebook</h5>
                      <p className="card-text">EBook.</p>
                    </div>
                </div>
          </div>
          <div className="col">
                <div className="card" style={{width: "18rem", border: "none"}}>
                  <img src={poem} className="card-img-top m-auto" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                    <h5 className="card-title"  style={cardTitle}>Poem</h5>
                      <p className="card-text">Poem.</p>
                    </div>
                </div>
          </div>
          <div className="col">
                <div className="card" style={{width: "18rem", marginRight: "5vw", marginTop: "10vh", border: "none"}}>
                  <img src={shortstory} className="card-img-top m-auto" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                    <h5 className="card-title"  style={cardTitle}>Short Story</h5>
                      <p className="card-text">Short Story.</p>
                    </div>
                </div>
          </div>
          <div className="col">
                <div className="card" style={{width: "18rem", marginRight: "5vw", marginTop: "10vh", border: "none"}}>
                  <img src={more} className="card-img-top m-auto" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                    <h5 className="card-title"  style={cardTitle}>.</h5>
                      <p className="card-text">.</p>
                    </div>
                </div>
          </div>
          <div className="col">
                <div className="card" style={{width: "18rem", marginTop: "10vh", border: "none"}}>
                  <img src={more} className="card-img-top m-auto" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                    <h5 className="card-title"  style={cardTitle}>Others</h5>
                      <p className="card-text">.</p>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}


export default Features;
