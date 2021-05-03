import React from 'react';
import './App.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
//var open = false;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      password: '',
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
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


<label htmlFor="pass"></label>
<div className="input-group">


<input className="form-control" type={this.state.hidden ? 'password' : 'text'} value={this.state.password}
onChange={this.handlePasswordChange} name="pass" placeholder="Mot de passe" id="pass" />
<div className="input-group-text">
<i onClick={this.toggleShow}>{eye}</i>
</div>


<label htmlFor="confirmpass"></label>
<div className="input-group mt-4">
<input className="form-control" type="password" value="" name="confirmpass" placeholder="Confirmer le mot de passe" id="confpass" />
{/* <div className="input-group-text">
  <i onClick={this.toggleShow}>{eye}</i>
</div> */}
</div>
<p className="text-left color-white font-weight-light" > <small><em>En cliquant sur <strong> Je deviens membre!</strong> Vous confirmez avoir lu et approuvé <strong> les conditions d'utilisation </strong> </em> </small></p> 
</div>
<div className="button">
            <button className="btn btn-primary btn-lg " type="submit">Je deviens membre !</button>
          </div>


</form>
</div>
</div>
</div>
</body>
</html></div>
);}}