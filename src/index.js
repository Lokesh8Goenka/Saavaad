import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));


// window.onscroll = function() {
//     let windowScroll = document.documentElement.scrollTop;
//     let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let scrollAmount = (windowScroll / windowHeight) * 100;
//     document.getElementById("mybar").style.width = scrollAmount + "%";
//   };


const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);
