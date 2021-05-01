import React from 'react';
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
var open = false;
var verifpass = false;

export default class App extends React.Component {
  render (){
    // essential dans le render ()
    //var open = false;
    //const [passwordShown, setPasswordShown];
    const togglePasswordVisiblity = () => {
      //setPasswordShown(passwordShown ? false : true);
      console.log(open);
      open = open ? false : true;
      console.log(open);
    };
    const toggleVerifpass = () => {
      verifpass = verifpass ? false : true;
      this.setState({ passwordShown: this.state.passwordShown ? false : true});
    }

return (
  <div ClassName ="App">
  <html class="bg-body">
  <head>
    <meta charset="utf-8" />
    <title>Cook, Eat & Connect</title>
  </head>

  <body class="bg-body">
    <div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-4 col-md-5 col-sm-8 col-10 text-center">
    <img
    src="./LogoBlanc.svg"
    alt="Cook, Eat and Connect logo avec un coeur"
    height="auto"
    width="192px" />
    <h1> C'est bien vous! </h1>
    <p> Merci d'avoir suivi le lien magique. Vous pouvez à présent renseigner un nouveau mot de passe!</p>
    <form method="post" action="">
   
    <label for="pass"></label>
            <div class="input-group">
              <input class="form-control" type={open ? "text" : "password"} name="pass" placeholder="Mot de passe" id="pass" />
              <div class="input-group-text">
                <i onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
            </div>

      <label for="confirmepass"></label>
            <div class="input-group">
              <input class="form-control" type={open ? "text" : "password"} name="confirmepass" placeholder="Confirmer le mot de passe" id="confirmepass" />
              <div class="input-group-text">
                <i onClick={toggleVerifpass}>{eye}</i>
                </div>
            </div>
  
     <div class="button">
     <button class="btn btn-primary" type="submit"> Envoyer ! </button>
        </div>
        </form>
    </div>
  </div>
  </div>
  </body>
</html></div>
);}}