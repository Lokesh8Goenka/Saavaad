import React, {useState}  from "react";
import Feature from "./Feature";
import cards from "../cards";
import Process from "./Process.jsx";
import writing from "../images/creative-writing.png";
import agreement from "../images/agreement.png";
import writer from "../images/copywriter.png";

const h2Style = {
   fontSize: "50px",
   color: "#13183e",
   // backgroundColor: "#",
   // width: "200px"
   // background: 'linear-gradient(90deg, rgba(255,110,73,1) 0%, rgba(205,52,185,1) 100%) ',
   // padding: "10px"
}


function Features(props) {

   const [title, setTitle] = useState("");
   const [heading, setHeading] = useState("");
   const [contact, setContact] = useState(false);
   const [summary, setSummary] = useState(false);
   
  return(
    <div className="features"  id='features'><br /><br />
        {/* <div className="toolsheading"> */}
        <h2 style={h2Style}> Tools </h2>
        
         <p>*Double Click the Tool you want to use*</p>
        
        
      {/* </div> */}

      <div className="container text-center">
         {/* console.log({cards[0].title}); */}
         {/* <img className="decorationR" src={writing} alt="decoration" /> */}
        <div className="row">
            <div className="col">
               <Feature
                  title={cards[0].title}
                  text={cards[0].text}
                  img={cards[0].imgURL}
                  handleClick={(title) => {
                     setTitle(title)
                     setSummary(true)
                  }}
                  />
            </div>
            
            <div className="col">
               <Feature
                     title={cards[1].title}
                     text={cards[1].text}
                     img={cards[1].imgURL}
                     // handleClick={(title) => {
                     //    setTitle(title)
                     //    setSummary(true)
                     // }}
                  />
            </div>
            <div className="col">
               <Feature
               
               title={cards[2].title}
               text={cards[2].text}
               img={cards[2].imgURL}
               // handleClick={(title) => {
               //    setTitle(title)
               //    setSummary(true)
               // }}
               /> 
            </div>
         </div>
         {/* <img className="decorationL" src={agreement} alt="decoration" /> */}
         {/* <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                  <Feature
                  title={cards[3].title}
                  text={cards[3].text}
                  img={cards[3].imgURL}
                  handleClick={(title) => {
                     setTitle(title)
                     setSummary(true)
                  }}
               />
            </div> */}
            {/* <div className="col-4"></div> */}
            {/* <div className="col">
               <Feature
               title={cards[4].title}
               text={cards[4].text}
               img={cards[4].imgURL}
               handleClick={(title) => {
                  setTitle(title)
                  setSummary(true)
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
                     setSummary(true)
                  }}
               />
            </div> */}
            
          
         {/* </div> */}
         {/* <img className="decorationR" src={writer} alt="decoration"  /> */}

      {/*<div className="row">
                  <div className="col-4"></div>
                  <div className="col-4">
                        <Feature
                        title={cards[6].title}
                        text={cards[6].text}
                        img={cards[6].imgURL}

                        handleClick={(title) => {
                           setTitle(title)
                           setSummary(true)
                        }}
                     />
                  </div>
         </div>*/}
      </div> 
      
      {/* {summary ? <Process title={title}/> : null} */}
      <br />
    </div>
    
  );
}


export default Features;
