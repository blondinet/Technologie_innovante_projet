import React from 'react';
import './App.css';

export default class App extends React.Component {
  render (){
    // essential dans le render ()

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
    <h1> Mot de passe oublié ? </h1>
    <p> Communiquez-nous votre adresse email liée à votre compte et nous vous enverrons un mail avec un lien magique vous permettant de réinitialiser votre mot de passe.</p>
    <p>
       <label for="Email"></label>
       <input type="text" name="Email" placeholder="Email" id="Email" />
   </p>
   <p> 
     <div class="button">
        <button type="submit">Envoyer</button>
      </div>
    <br/>
     <div class="button">
        <button type="submit">Annuler</button>
      </div>
    </p>
  </body>
</html></div>
);}}