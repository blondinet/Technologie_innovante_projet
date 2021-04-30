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
    <h1> Bienvenue </h1>
    <form method="post" action=""></form>
   <p>
       <label for="Naissance"></label>
       <input type="text" name="Naissance" placeholder="Date de naissance" id="Naissance " />
   </p>
   <p>
	
	<input type="radio" name="sexe" /> Homme
	<input type="radio" name="sexe" /> Femme
	<input type="radio" name="sexe" /> Autre
  </p>
   <p>
       <label for="Taille"></label>
       <input type="text" name="Taille" placeholder="Taille en cm" id="Taille "/>
   </p>
   <p>
       <label for="Poids"></label>
       <input type="text" name="Poids" placeholder="Poids en kg" id="Poids"/>
   </p>

   <p>
  <select name="Régime alimentaire">

  <option> Absence de régime spécifique</option>
  <option> Végétarien</option>
  <option>Végétalien</option>
  <option>Flexitarien</option>
  <option>Sans Gluten</option>

  </select>
</p>
   <p> 
     <div class="button">
        <button type="submit">Renseigner ultérieurement</button>
      </div>
     <div class="button">
        <button type="submit">Enregistrer</button>
      </div>
    </p>
  </body>
</html></div>
);}}