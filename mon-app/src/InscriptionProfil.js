import React from 'react';
import './App.css';
import './bootstrap.css';

export default class App extends React.Component {
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
    <form method="post" action="">
            <label for="Email"></label>
            <input className="form-control" type="text" name="datedenaissance" placeholder="Date de naissance" id="datedenaissance" />
            <label for="pass"></label>
  
  <p className="text-left"><span className="mr-2">Sexe :</span>
	<input type="radio" name="sexe" /> Homme <input type="radio" name="sexe" /> Femme <input type="radio" name="sexe" /> Autre </p> 
  
  
  <label for="Taille"></label>
            <input className="form-control" type="text" name="Taille" placeholder="Taille en cm" id="Taille" />
            <label for="pass"></label>

  <label for="Poids"></label>
            <input className="form-control" type="text" name="Poids" placeholder="Poids en kg" id="Poids" />
            <label for="pass"></label>
            <br/>
  <select id="select" className="form-control">
  <option selected>Absence de régime particulier</option>
  <option value="1">Sans gluten</option>
  <option value="2">Végétarien</option>
  <option value="3">Végétalien</option>
</select>
<br/>
<div className="button">
          <a className="btn btn-primary btn-lg" href="">Enregistrer </a>
          </div>
          <br />
        <h6 className="color-primary"> <strong>     OU   </strong>    </h6>
        <br />
        <br />
          <div className="button">
          <a className="btn btn-link color-primary" href=""> Renseigner ultérieurement</a>
          </div>
          </form>
    </div>
  </div>
  </div>
  </body>
</html></div>
);}}