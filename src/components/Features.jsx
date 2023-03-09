import React from "react";
import Feature from "./Feature";
import cards from "../cards";



// const cardTitle = { 
//   color: "#ff6e49",
// }

function Features(props) {

  return(
    <div className="features "><br /><br />
      {/* <div className="toolsheading"> */}
          <h2 style={{fontSize: "50px"}}> Tools </h2><br /><br />
      {/* </div> */}

      <div className="container text-center">
        <div className="row">
              <Feature
                 title={cards[0].title}
                 text={cards[0].text}
                 img={cards[0].imgURL}
              /> 
              <Feature
                 title={cards[1].title}
                 text={cards[1].text}
                 img={cards[1].imgURL}
              />
        </div>
        <div className="row">
              <Feature
                 title={cards[2].title}
                 text={cards[2].text}
                 img={cards[2].imgURL}
              />
              <Feature
                 title={cards[3].title}
                 text={cards[3].text}
                 img={cards[3].imgURL}
              /> 
        </div>
        <div className="row">
              <Feature
                 title={cards[4].title}
                 text={cards[4].text}
                 img={cards[4].imgURL}
              />
              <Feature
                 title={cards[5].title}
                 text={cards[5].text}
                 img={cards[5].imgURL}
              />
        </div>

              
              
      </div>
    </div>
    
  );
}


export default Features;
