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
    <div className="features container-fluid">
      <div className="toolsheading">
          <h2 style={{fontSize: "50px"}}> Tools </h2>
      </div>

<div className="container text-center">
        <div className="row">
        {/* col-lg-4 col-md-6 */}
          <div className="col"> 
                <div className="card mb-3" style={{maxWidth: "540px", minWidth: "500px", padding: "20px"}}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={contract} className="img-fluid rounded-start" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h1 className="card-title">Summary</h1> <br />
                          <p className="card-text">Have a long documnet to read? <br />Get a summary of it in no time.</p>
                        </div>
                      </div>
                    </div>
                </div>
          </div>
          <div className="col">
                <div className="card-transparent mb-3" style={{maxWidth: "540px", minWidth:"500px"}}>
                    <div className="row g-0">
                          <div className="col-md-4">
                            <img src={ebook} className="img-fluid rounded-start" alt="..." />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h1 className="card-title">Ebook</h1> <br />
                              <p className="card-text">Just click hand written story and upload them to get your own EBook.</p>
                          </div>
                    </div>
                </div>
          </div>
          </div>
          <div className="col">
              <div className="card-transparent mb-3" style={{maxWidth: "540px", minWidth:"500px"}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={poem} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h1 className="card-title">Poem</h1> <br />
                        <p className="card-text">Are you a poet?<br /> Then try the digital version of your poem!</p>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
          <div className="col">
                <div className="card-transparent mb-3" style={{maxWidth: "540px", minWidth:"500px"}}>
                    <div className="row g-0">
                          <div className="col-md-4">
                            <img src={shortstory} className="img-fluid rounded-start" alt="..." />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h1 className="card-title">Short Story</h1> <br />
                              <p className="card-text">Written a short story? <br /> Get a digital copy now!</p>
                            </div>
                          </div>
                    </div>
                </div>
          </div>
          <div className="col">
                <div className="card-transparent mb-3" style={{maxWidth: "540px", minWidth:"500px"}}>
                      <div className="row g-0">
                          <div className="col-md-4">
                            <img src={more} className="img-fluid rounded-start" alt="..." />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h1 className="card-title">Translation</h1> <br />
                              <p className="card-text">Unable to get a language <br /> Get it in your language!</p>
                            </div>
                          </div>
                      </div>
                </div>
          </div>
          <div className="col">
                <div className="card-transparent mb-3" style={{maxWidth: "540px", minWidth:"500px"}}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={more} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h1 className="card-title">More</h1> <br />
                        <p className="card-text">Want anything else? <br /> Write to us!</p>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}


export default Features;
