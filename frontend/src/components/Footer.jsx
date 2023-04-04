import React from "react";


function Footer() {

    return (
      <div className="footer"> 
      <br />
        {/* <hr style={{opacity: "1", marginLeft: "auto", marginRight: "auto"}} /> */}
        <div className="row">
        <div className="col" style={{padding: "0"}}>
            <h1>Cl!ckl</h1>
            <p>A Simple way to get you ebooks</p>
          </div>
          <div className="col" style={{padding: "0"}}>
            <h4>Tools</h4>
            <ul>
              <li>Summary</li>
              <li>Ebook</li>
              <li>Short Story</li>
              <li>Poem</li>
              <li>Translation</li>
              <li>Text To Speech</li>
            </ul>
          </div>
          <div className="col" style={{padding: "0"}}>
            <h4>Know More</h4>
            <ul>
              <li>About Us</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div className="col" style={{padding: "0"}}>
            <h4>Connect</h4>
            <ul>
              <li>Github</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    );

}

export default Footer;