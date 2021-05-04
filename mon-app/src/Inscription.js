import React from 'react';
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye}/>;
var open = false;
var verifpass = false;
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      hiddenConfirm: true,
      password: '',
      confirmPassword: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    this.toggleConfirmShow = this.toggleConfirmShow.bind(this);
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handlePasswordConfirmChange(e) {
    this.setState({ confirmPassword: e.target.value });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  toggleConfirmShow() {
    this.setState({ hiddenConfirm: !this.state.hiddenConfirm });
  }

  render (){
    // essential dans le render ()
    
return (
  <div className ="App">
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
    width="256 px" />
<h1 className="h1 color-primary "> <strong> Inscription </strong> </h1>

<p className= "color-primary"><strong>  Devenez membre de Cook, Eat and Connect et profitez de recettes saines sur mesure !</strong></p>
<form method="post" action="">
<label for="Email"></label>
<input className="form-control" type="text" name="Email" placeholder="Email" id="Email" />


<label for="pass"></label>
            
            <div className="input-group">
              <input className="form-control" type={this.state.hidden ? 'password' : 'text'} value={this.state.password}
          onChange={this.handlePasswordChange} name="pass" placeholder="Confirmer le mot de passe" id="pass" />
              <div className="input-group-text">
                <i onClick={this.toggleShow}>{eye}</i>
              </div>
            </div>

     
      <label for="confirmepass"></label>

            <div className="input-group">
              <input className="form-control" type={this.state.hiddenConfirm ? 'password' : 'text'} value={this.state.confirmPassword}
          onChange={this.handlePasswordConfirmChange} name="confirmpass" placeholder="Confirmer le mot de passe" id="confirmpass" />
              <div className="input-group-text">
                <i onClick={this.toggleConfirmShow}>{eye}</i>
              </div>
            </div>
            <br />
   <p class="text-left color-white font-weight-light" > <small><em>En cliquant sur <strong> Je deviens membre!</strong> Vous confirmez avoir lu et approuvé <strong> les conditions d'utilisation </strong> </em> </small></p> 
     <div class="button">
        <button class="btn btn-primary" type="submit"> Je deviens membre ! </button>
        </div>
        </form>
    </div>
  </div>
  </div>
  </body>
</html></div>
);}}