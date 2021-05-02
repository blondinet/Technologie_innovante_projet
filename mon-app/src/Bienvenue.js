import React from 'react';
import './App.css';
import './bootstrap.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
var open = false;
export default class App extends React.Component {
  render (){
    // essential dans le render ()
    // var open = false;
    //const [passwordShown, setPasswordShown];

    //const togglePasswordVisiblity = () => {
      //this.setState({ passwordShown: this.state.passwordShown ? false : true});
      //setPasswordShown(passwordShown ? false : true);
      //console.log(open);
      //open = open ? false : true;
      //console.log(open);
    
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
        <h1 class="h1 color-primary"> <strong>  Bienvenue </strong> </h1>
        <form method="post" action="">
            <label for="Email"></label>
            <input class="form-control" type="text" name="Email" placeholder="Email" id="Email" />
            <label for="pass"></label>
            <div class="input-group">
              <input class="form-control" type={open ? "text" : "password"} name="pass" placeholder="Mot de passe" id="pass" />
              <div class="input-group-text">
             <i onClick={""}>{eye}</i>
              </div>
            </div>
            <div class="text-start mb-4">
              <a class="btn btn-link text-start color-primary" href="/mdpoublie">Mot de passe oublié ?</a>
            </div>
            <div class="button">
            <button class="btn btn-primary" type="submit">Connexion</button>
          </div>
        <div class="my-2"> <strong>ou </strong> </div>
          <div class="button">
            <a class="btn btn-primary" href="./Inscription">S'incrire</a>
          </div>
      </form>
    </div>
  </div>
  </div>
  </body>
</html></div>
);}}
