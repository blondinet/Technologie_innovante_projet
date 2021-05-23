import React from 'react';
import PERSONNE from './Data/personne.json';
import INGREDIENT from './Data/ingredient.json';
import RECETTE from './Data/recette.json';

export default class Recettes extends React.Component {

  
  state = {

    reference: "Commençons...",
    like: 0,
    image: "./Images/defaut.png",
    seuil: 700.0
  }

  // Permet de trouver l'index dans la base de données personne.json à partir d'une id.
  finderPersonne = (idd) => {
    
    for (var x = 0 ; x < PERSONNE.personnes.length ; x++ )
    {
      if ( PERSONNE.personnes[x].id === idd )
      {
        return x;
      }
    }
    return null;
  }

  // Permet de trouver l'index dans la base de données ingredient.json à partir d'un nom d'ingrédient.
  finderIngredient = (nomAliment) => {

    for (var x = 0 ; x < INGREDIENT.liste.length ; x++ )
    {
      if ( INGREDIENT.liste[x].nom === nomAliment )
      {
        return x;
      }
    }
    return null;
  }

  // Permet de trouver l'index dans la base de données recette.json à partir d'un nom de plat.
  finderRecette = (nomPlat) => {

    for (var x = 0 ; x < RECETTE.liste.length ; x++ )
    {
      if ( RECETTE.liste[x].nom === nomPlat )
      {
        return x;
      }
    }
    return null;
  }

  
  // Renvoie true si l'utilisateur possède tous les ingrédients du plat en paramètre.
  platPossible = (nomPlat) => {

    var id = 1;
    var index = this.finderPersonne(id);
    var index1 = this.finderRecette(nomPlat);
    
    for (var x = 0 ; x < RECETTE.liste[index1].ingredient.length ; x++ )
    {
      if ( PERSONNE.personnes[index].frigo[ RECETTE.liste[index1].ingredient[x] ] === false )
      {
        return false;
      }
    }
    return true;
  }


  // Renvoie les besoins d'une personne en Kcal.
  besoinJournalier = () => {

    var id = 1;
    var index = this.finderPersonne(id);

    var taille = PERSONNE.personnes[index].taille;
    var poids = PERSONNE.personnes[index].poids;
    var age = PERSONNE.personnes[index].age;
    var act = PERSONNE.personnes[index].activite;
    var sexe = PERSONNE.personnes[index].sexe;

    if (sexe === "male")  {
      sexe = false;
    } else {
      sexe = true;
    }

    var resulat = (poids**0.48) * (taille**0.50) * (age**(-0.13));

    if (sexe)
    {
      // Femme
      return (((230*resulat*1,37)/2) + act);
    }
    else
    {
      // Homme
      return (((259*resulat*1,37)/2) + act);
    }
  }
  

  // Retourne la valeur en Kcal d'un ingrédient.
  // On part du postulat que les plats sont 'équilibrés'.
  alimentCalorie = (aliment) => {
    var index = this.finderIngredient(aliment);
    return ( INGREDIENT.liste[index].glucide*4 + INGREDIENT.liste[index].lipide*9 + INGREDIENT.liste[index].proteine*4);
  }


  // Retourne la valeur en Kcal d'un plat 
  platCalorie = (nomPlat) => {

    var result = 0;
    var index = this.finderRecette(nomPlat);

    for (var x = 0 ; x < RECETTE.liste[index].ingredient.length ; x++ )
    {
      result += this.alimentCalorie(RECETTE.liste[index].ingredient[x]);
    }
    return result;
  }


  // Retourne true si le plat en paramètre correspond aux besoins nutritives de l'utilisateur.
  platEquilibre = (nomPlat) => {
    var calorClient = this.besoinJournalier();
    var calorPlat = this.platCalorie(nomPlat);

    if ( Math.sqrt( (calorPlat - calorClient)**2 ) < this.state.seuil )  {
      return true;
    }
    else {
      return false;
    }
  }


  // Renvoie un nombre qui est la somme des valeurs de préférences de chaque ingrédient qui compose ce plat.
  // On y rajoute aussi incluera aussi 1000 divisé le temps de préparation : plus ce temps est petit, plus le résultat sera grand.
  platPreference = (nomPlat) => {

    var id = 1;
    var index = this.finderPersonne(id);
    var index1 = this.finderRecette(nomPlat);
    var result = 0;

    for (var x = 0 ; x < RECETTE.liste[index1].ingredient.length ; x++ )
    {
      result += PERSONNE.personnes[index].preference[ RECETTE.liste[index1].ingredient[x] ];
    }
    result += (1000/RECETTE.liste[index1].temps);
    return result;
  }

  // Détermine la préférence d'un plat, en ignorant le temps de préparation.
  appreciation = (nomPlat) => {
    var id = 1;
    var index = this.finderPersonne(id);
    var index1 = this.finderRecette(nomPlat);
    var result = 0;

    for (var x = 0 ; x < RECETTE.liste[index1].ingredient.length ; x++ )
    {
      result += PERSONNE.personnes[index].preference[ RECETTE.liste[index1].ingredient[x] ];
    }
    
    return (result/RECETTE.liste[index1].ingredient.length);
  }

  // Met à jour les données pour qu'elles soient affichés dans le render().
  affichage = (nomPlat) => {
    var str1 = "./Images/";
    var str2 = ".jpg";
    var str3 = str1 + nomPlat + str2;
    let score = Math.round(this.appreciation( nomPlat ));

    var img = str1 + "0.png";

    if (score === 1) {
      img = str1 + "1.png";
    }

    if (score === 2) {
      img = str1 + "2.png";
    }

    if (score === 3) {
      img = str1 + "3.png";
    }

    if (score === 4) {
      img = str1 + "4.png";
    }

    if (score === 5) {
      img = str1 + "5.png";
    }

    this.setState( { reference: nomPlat });
    this.setState( { image: str3 });
    this.setState( { like: img });

  }

  // Propose un nouveau plat suivant la liste des plats conseillés de l'utilisateur.
  fonction3 = () => {
    var id = 1;
    var index = this.finderPersonne(id);

    if ( PERSONNE.personnes[index].plats.length <= 1 )
    {
      this.fonction1();
    }
    else
    {
      PERSONNE.personnes[index].plats.shift();
    }
    
    var nomPlat = PERSONNE.personnes[index].plats[0];
    this.affichage(nomPlat);
    
  }

  // fonction2 indisponible pour le moment : section Journal requise.
  // Possède les mêmes effets que fonction" en plus d'enregistré le plat affiché dans la base de données JOURNAL

  // Trie la liste des plats conseillés, dans l'ordre décroissant par rapport à la valeur de préférence.
  reorganisation = (platliste) => { 

    var id = 1;
    var index = this.finderPersonne(id);

    var result = [];
    while ( platliste.length > 0 )
    {
      var max = 0;

      for( var x = 0 ; x < platliste.length ; x++ )
      {
        if ( max < this.platPreference( platliste[x]) ) 
        {
          max = this.platPreference( platliste[x] );
        }
      }

      for( var x = 0 ; x < platliste.length ; x++ )
      {
        if ( max === this.platPreference( platliste[x]) )
        {
          result.push(platliste[x]);
          platliste.splice( x , 1 );
        }
      }
    }
    
    for( var x = 0 ; x < result.length ; x++ )
    {
      PERSONNE.personnes[index].plats.push( result[x] );
    }
  }

  // Met à jour la liste des plats conseillés par l'utilisateur.
  fonction1 = () => {

    var id = 1;
    var index = this.finderPersonne(id);
    var platliste = [];

    for (var x = 0 ; x < RECETTE.liste.length ; x++ )
    {
      var plat = RECETTE.liste[x].nom;
      
      if ( this.platPossible(plat) === true)  {
        if (this.platEquilibre(plat) === true) {
          platliste.unshift( plat );
        }
      }
    }
    
    this.reorganisation(platliste);
    var nomPlat = PERSONNE.personnes[index].plats[0];
    this.affichage(nomPlat);
  }

  componentDidMount = () => {
    this.fonction1();
  }

    render() {

        return(
            <div className="Recettes bg-body">

          <imput className="text2">Que voulez-vous manger ?</imput>

          <table className="plat">

            <button type="submit" class="bouton">
                <tr>
                  <th>
                    <img src="./Images/info.png" alt="Flowers in Chania" height="20"/>
                  </th>
                  <th width="10"></th>
                  <th>
                    <imput className="text3">{ this.state.reference }</imput>
                  </th>
                  <th width="3000"></th>
                  <th>
                    <img className="imagePlat" src={this.state.like} alt="Flowers in Chania" height="15"/>
                  </th>
                </tr>
            </button>
            
            
          </table>

          <table className="platImage">
            <img className="imagePlat" src={this.state.image} alt="Flowers in Chania" width="300" height="300"/>
          </table>

          <table className="plat1">
            <tr>
              <th>
                <table className="plat2">
                  <button type="submit" class="bouton" onClick = {this.fonction3}>  
                    <tr>
                      <th>
                        <img src="./Images/save.png" alt="Flowers in Chania" height="20"/>
                      </th>
                      <th width="5"></th>
                      <th>
                        <imput className="text3">Enregistrez</imput>
                      </th>
                    </tr>
                  </button>
                </table>
              </th>

              <th width="10"></th>

              <th>
                <table className="plat2">
                  <button type="submit" class="bouton" onClick = {this.fonction3}>  
                    <tr>
                      <th>
                        <img src="./Images/clock.png" alt="Flowers in Chania" height="20"/>
                      </th>
                      <th width="5"></th>
                      <th>
                        <imput className="text3">Plus tard</imput>
                      </th>
                    </tr>
                  </button>
                </table>
              </th>

            </tr>
          </table>
          
        </div>
        );
    }

}