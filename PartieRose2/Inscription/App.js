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
    this.state = ({passwordShown: true });
    const togglePasswordVisiblity = () => {
      this.setState({ passwordShown: this.state.passwordShown ? false : true});
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
  <html>
  <head>
    <meta charset="utf-8" />
    <title>Cook, Eat & Connect</title>
  </head>

  <body>
    <img
    src="./LogoBlanc.svg"
    alt="Cook, Eat and Connect logo avec un coeur"
    height="auto"
    width="192px" />
    <h1> Inscription </h1>
    <p> Devenez membre de Cook, Eat and Connect et profitez de recettes saines sur mesure !</p>
    <form method="post" action="">
   <p>
      <label for="Email"></label>
      <input type="text" name="Email" placeholder="Email" id="Email" />
       
      <br />
      <label for="pass"></label>
      <input type={open ? "text" : "password"} name="pass" placeholder="Votre mot de passe" id="pass" />
      <i onClick={togglePasswordVisiblity}>{eye}</i>
      <br />
      <label for="confirmepass"></label>
      <input type={verifpass ? "text" : "password"} name="confirmepass" placeholder="Confirmer le mot de passe" id="confirmepass" />
      <i onClick={toggleVerifpass}>{eye}</i>

   </p>
   <p> En cliquant sur Je deviens membre! vous confirmez avoir lu et approuvé les conditions d'utilisation </p>
   <p> 
     <div class="button">
        <button type="submit"> Je deviens membre ! </button>
      </div>
    </p>
  </form>
  </body>
</html></div>
);}}