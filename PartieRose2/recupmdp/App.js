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
    <h1> C'est bien vous! </h1>
    <p> Merci d'avoir suivi le lien magique. Vous pouvez à présent renseigner un nouveau mot de passe!</p>
    <form method="post" action="">
   <p>
   <br />
      <label for="pass"></label>
      <input type={open ? "text" : "password"} name="pass" placeholder="Votre mot de passe" id="pass" />
      <i onClick={togglePasswordVisiblity}>{eye}</i>
      <br />
      <label for="confirmepass"></label>
      <input type={verifpass ? "text" : "password"} name="confirmepass" placeholder="Confirmer le mot de passe" id="confirmepass" />
      <i onClick={toggleVerifpass}>{eye}</i>

   </p>

     <div class="button">
        <button type="submit"> Envoyer </button>
      </div>
    
  </form>
  </body>
</html></div>
);}}