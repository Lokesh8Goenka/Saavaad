import React from "react";
import ebook from "../images/ebook.png";
import more from "../images/more.png";
import poem from "../images/poem.png";
import contract from "../images/contract.png";


function Features() {
  return(
    <div style={{marginTop: "10%"}}>
      <hr style={{borderTop: "30px", backgroundColor: "black"}} />
      <div class="container text-center">
        <div class="row">
        {/* col-lg-4 col-md-6 */}
          <div class="col"> 
                <div classname="card" style={{width: "18rem"}}>
                  <img src={contract} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                      <p classname="card-text">Summary.</p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div classname="card" style={{width: "18rem"}}>
                  <img src={ebook} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                      <p classname="card-text">EBook.</p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div classname="card" style={{width: "18rem"}}>
                  <img src={poem} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                      <p classname="card-text">Poem.</p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div classname="card" style={{width: "18rem"}}>
                  <img src={ebook} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                      <p classname="card-text">Short Story.</p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div classname="card" style={{width: "18rem"}}>
                  <img src={more} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                      <p classname="card-text">.</p>
                    </div>
                </div>
          </div>
          <div class="col">
                <div classname="card" style={{width: "18rem"}}>
                  <img src={more} classname="card-img-top" alt="..." style={{width: "100px"}} />
                    <div className="card-body">
                      <p classname="card-text">Others.</p>
                    </div>
                </div>
          </div>
        </div>
      </div>  
    </div>
    
  );
}


export default Features;
