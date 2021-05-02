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
  <html className="bg-body">
  <head>
    <meta charset="utf-8" />
    <title>Cook, Eat & Connect</title>
  </head>

  <body className="bg-body">
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-4 col-md-5 col-sm-8 col-10 text-center">
    <img
    src="./LogoBlanc.svg"
    alt="Cook, Eat and Connect logo avec un coeur"
    height="auto"
    width="192px" />
    <h1 className="h1 color-primary"> <strong>  C'est bien vous ! </strong> </h1>
    <p className = "color-primary text-justify"> Merci d'avoir suivi le lien magique. Vous pouvez à présent <span className="text-white"> renseigner un nouveau mot de passe!</span> </p>
    <form method="post" action="">
   
    <label for="pass"></label>
            <div className="input-group">
              <input className="form-control" type={open ? "text" : "password"} name="pass" placeholder="Mot de passe" id="pass" />
              <div className="input-group-text">
                <i onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
            </div>

      <label for="confirmepass"></label>
            <div className="input-group">
              <input className="form-control" type={open ? "text" : "password"} name="confirmepass" placeholder="Confirmer le mot de passe" id="confirmepass" />
              <div className="input-group-text">
                <i onClick={toggleVerifpass}>{eye}</i>
                </div>
            </div>
    <br/>
     <div className="button">
     <button className="btn btn-primary" type="submit"> Envoyer ! </button>
        </div>
        </form>
    </div>
  </div>
  </div>
  </body>
</html></div>
);}}