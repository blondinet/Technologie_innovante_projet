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
  
    const togglePasswordVisiblity = () => {
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
              <input className="form-control" type={this.state.hidden ? 'password' : 'text'} value={this.state.password}
          onChange={this.handlePasswordChange} name="pass" placeholder="Nouveau mot de passe" id="pass" />
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