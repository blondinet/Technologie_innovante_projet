import React from "react";

import Inscription from "../components/FormInscription";

const Register = (props) => {
  let open = false;
  let verifpass = false;


  return (
    <div id="page">
      <head>
        <meta charset="utf-8" />
        <title>Cook, Eat & Connect</title>
      </head>

      <body>
        <div className="rose-la-page h-100">
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-5 col-sm-8 col-10 text-center">
              <img
                src="./Images/LogoBlanc.svg"
                alt="Cook, Eat and Connect logo avec un coeur"
                height="auto"
                width="256 px" />
              <h1 className="h1 color-primary "> 
                <strong> 
                  Inscription
                </strong>
              </h1>
              <p className= "color-primary">
                <strong>  
                  Devenez membre de Cook, Eat and Connect et profitez de recettes saines sur mesure !
                </strong>
              </p>
                <Inscription />
            </div>
          </div>
        </div>
      </body>
    </div> 
  );
};

export default Register;
