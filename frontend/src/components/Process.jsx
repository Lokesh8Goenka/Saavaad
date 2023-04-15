import React, { useState } from "react";
import { Link } from "react-scroll";
import Poem from "./Poem";
import Contact from "./Contact.jsx";
import Summary from "./Summary.jsx";
import Translate from "./Translate.jsx";
import TextToSpeech from "./TextToSpeech.jsx";
import ShortStory from "./ShortStory.jsx";
import Ebook from "./Ebook.jsx";

function Process(props) {
  return (
    <div className="Process" id="process">
      {props.title === "Summary" ? (
        <Summary title={props.title} />
      ) : props.title === "More" ? (
        <Contact />
      ) : props.title === "Translation" ? (
        <Translate title={props.title} />
      ) : props.title === "Text To Audio" ? (
        <TextToSpeech title={props.title} />
      ) : props.title === "Poem" ? (
        <Poem title={props.title} />
      ) : props.title === "Short Story" ? (
        <ShortStory title={props.title} />
      ) : props.title === "Ebook" ? (
        <Ebook title={props.title} />
      ) : null}
    </div>
  );
}

export default Process;
