import React from "react";
import ebook from "../images/ebook.png";
import more from "../images/more.png";
import poem from "../images/poem.png";
import contract from "../images/contract.png";
import shortstory from "../images/fantasy.png";

const cardTitle = { 
  color: "#ff6e49"
}

function Features() {
  return(
    <div style={{marginTop: "5%"}}>
      <div className="toolsheading">
          <h2 style={{fontSize: "50px"}}> Tools </h2>
      </div>
      <div class="container text-center">
        <div class="row">
        {/* col-lg-4 col-md-6 */}
          <div class="col"> 
                <div classname="card" style={{width: "18rem", marginRight: "5vw"}}>
                  <img src={contract} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                      <h5 class="card-title" style={cardTitle}>Summary</h5>
                      <p classname="card-text"></p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div classname="card" style={{width: "18rem", marginRight: "5vw"}}>
                  <img src={ebook} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                    <h5 class="card-title"  style={cardTitle}>Ebook</h5>
                      <p classname="card-text">EBook.</p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div classname="card" style={{width: "18rem"}}>
                  <img src={poem} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                    <h5 class="card-title"  style={cardTitle}>Poem</h5>
                      <p classname="card-text">Poem.</p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div classname="card" style={{width: "18rem", marginRight: "5vw", marginTop: "10vh"}}>
                  <img src={shortstory} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                    <h5 class="card-title"  style={cardTitle}>Short Story</h5>
                      <p classname="card-text">Short Story.</p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div classname="card" style={{width: "18rem", marginRight: "5vw", marginTop: "10vh"}}>
                  <img src={more} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                    <h5 class="card-title"  style={cardTitle}>.</h5>
                      <p classname="card-text">.</p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div classname="card" style={{width: "18rem", marginTop: "10vh"}}>
                  <img src={more} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                    <h5 class="card-title"  style={cardTitle}>Others</h5>
                      <p classname="card-text">.</p>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}


export default Features;
