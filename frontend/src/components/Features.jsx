import React, {useState, Component }  from "react";
import Feature from "./Feature";
import cards from "../cards";
import Summary from "./Summary.jsx";
import writing from "../images/creative-writing.png";
import agreement from "../images/agreement.png";
import writer from "../images/copywriter.png";

const h2Style = {
   fontSize: "70px",
   color: "#fff",
   background: 'linear-gradient(90deg, rgba(255,110,73,1) 0%, rgba(205,52,185,1) 100%) ',
   padding: "10px"
}


function Features(props) {

   const [title, setTitle] = useState("");
   const [heading, setHeading] = useState("");

   
  return(
    <div className="features"  id='features'><br /><br />
        {/* <div className="toolsheading"> */}
        <h2 style={h2Style}> Tools </h2><br /><br />
      {/* </div> */}

      <div className="container text-center">
         {/* console.log({cards[0].title}); */}
         <img className="decorationR" src={writing} alt="decoration" />
        <div className="row">
            <div className="col">
               <Feature
                  title={cards[0].title}
                  text={cards[0].text}
                  img={cards[0].imgURL}
                  handleClick={(title) => {
                     setTitle(title)
                  }}
                  />
            </div>
            
            <div className="col">
               <Feature
                     title={cards[1].title}
                     text={cards[1].text}
                     img={cards[1].imgURL}
                     handleClick={(title) => {
                        setTitle(title)
                     }}
                  />
            </div>
            
         </div>
         <img className="decorationL" src={agreement} alt="decoration" />
         <div className="row">

            <div className="col">
               <Feature
               
               title={cards[2].title}
               text={cards[2].text}
               img={cards[2].imgURL}
               handleClick={(title) => {
                  setTitle(title)
               }}
               /> 
            </div>
            
            <div className="col">
                  <Feature
                  title={cards[3].title}
                  text={cards[3].text}
                  img={cards[3].imgURL}
                  handleClick={(title) => {
                     setTitle(title)
                  }}
               />
            </div>
          
         </div>
         <img className="decorationR" src={writer} alt="decoration"  />

         <div className="row">
            <div className="col">
               <Feature
               title={cards[4].title}
               text={cards[4].text}
               img={cards[4].imgURL}
               handleClick={(title) => {
                  setTitle(title)
               }}
               /> 
            </div>
             
            <div className="col">
                  <Feature
                  title={cards[5].title}
                  text={cards[5].text}
                  img={cards[5].imgURL}
                  handleClick={(title) => {
                     setTitle(title)
                  }}
               />
            </div>
         </div>

      </div>
      <Summary
         title={title}
      />
    </div>
    
  );
}


export default Features;
