import React from 'react';
// import React, { useState, useEffect } from 'react';

import Navbar from "./Navbar";
import Footer from "./Footer";
import Features from "./Features";
import Home from "./Home";
import Login from "./Login";
import Summary from "./Summary";
// inside component:




function App(){
    return (
        <div>
           
            <Navbar />
            <Home />
            <Features />
            <Summary />
            {/* <Login /> */}
            <Footer />
        </div>
    );
    
}

export default App;