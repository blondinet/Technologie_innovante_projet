import React from 'react';
import Recettes from "../components/Recettes";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Home(){
    return(
        <div id="page">
            
            <Header /> 
            <div id = "Body">
                <div id = "Page">
                    <Recettes ></Recettes>
                </div>
            </div>
            <Footer />
            
        </div>
    );
};

export default Home;