import React from 'react';
import Recettes from "../components/Recettes";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Journal(){
    return(
        <div id="page">
            
            <Header /> 
            <div id = "Body">
                <h1>Historique</h1>
             </div>
            <Footer />
            
        </div>
    );
};

export default Journal;