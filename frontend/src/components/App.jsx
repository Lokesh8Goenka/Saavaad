import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tools from "./Tools";
import Features from "./Features";
import Home from "./Home";
import Posters from "./Posters.jsx";


function App(){
    return (
        <div>
            <Navbar />
            <Tools />
            <Home />
            <Posters />
            <Features />
            <Footer />
        </div>
    );
    
}

export default App;