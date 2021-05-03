import React from 'react';
// import './App.css';
// import './bootstrap.css';

// import 'bootstrap';
// import 'jquery';
// import 'popper.js';
// import 'bootstrap-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faSearch} />;

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
<body className="bg-body">>
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-4 col-md-5 col-sm-8 col-10 text-center">
    <img
    src="./LogoBlanc.svg"
    alt="Cook, Eat and Connect logo avec un coeur"
    height="auto"
    width="256 px" />
    <h1 className="h1 color-primary "> <strong> Ma liste </strong> </h1>
	<br/>
				<div className="row">
					<div className="col-7">
						<select class="selectpicker" data-live-search="true" id="searchbar">
							<option style={{display: 'none'}} value="" disabled selected>Rechercher un ingrédient</option>
							<option data-tokens="poulet" value='one'>poulet</option>
							<option data-tokens="riz">riz</option>
							<option data-tokens="pâte">pâte</option>
							<option data-tokens="jambon" value='one'>jambon</option>
							<option data-tokens="fraises">fraises</option>
							<option data-tokens="pommes de terre">pommes de terre</option>
						</select>
					</div>
					<br/>
					<br/>
					<div className="col-5">
						<a className="btn btn-primary" onClick={
						function e(){
							var selectvalue = document.getElementById("searchbar").options.[document.getElementById("searchbar").selectedIndex].text;
							console.log(selectvalue)
							document.getElementById('liste').append(selectvalue, ",","\n");

						}}>
							+ Ajouter
						</a>
					</div>
					<div className="text-black bg-white p-2 rounded"id="liste">
					</div>
				</div>
      
				<br/>
				<br/>
            	<br />
		    <div className="button">
            <button className="btn btn-primary btn-lg " type="submit">Enregistrer</button>
          <br />
          <br />
        <h6 className="color-primary"> <strong>     OU   </strong>    </h6>
        <br />
        <br />
        <div className="button">
          <a className="btn btn-link color-primary" href=""> Renseigner ultérieurement</a>
          </div>
          </div>     		
		</div>
        </div>
		</div>
    </body>
    </html>
</div>
);}}
