import React from 'react';
import"./Profile.css";
import watch from '../images/watch.jpg';
import plan from '../images/plan.jpg';
import texture from '../images/texture.jpeg';
import art from '../images/art.jpg';

 export default class Profile extends React.Component{

    render(){

        return (
            <body>
                <h1>Bonjour, <span id="name">Jean-Pierre Fatis</span></h1>

                <button class="profilebutton" name="stats" type="button">
                    <img class="imagebutton" src={watch} alt="Une montre connectée" height="300" />
                    <h2>Mes statistiques</h2>
                </button>

                <button class="profilebutton" name="obj" type="button">
                    <img class="imagebutton" src={plan} alt="Le mot 'PLAN' écrit en lettres du jeu Scrabble" height="300" />
                    <h2>Mes objectifs</h2>
                </button>

                <br />

                <button class="profilebutton" name="infos" type="button">
                    <img class="imagebutton" src={texture} alt="Des couleurs vues à travers de l'eau" height="300" />
                    <h2>Mes informations</h2>
                </button>

                <button class="profilebutton" name="param" type="button">
                    <img class="imagebutton" src={art} alt="Des rouages multicolores" height="300" />
                    <h2>Paramètres</h2>
                </button>

                <div class="sep">
                    - - -
                </div>

                <button class="decobutton" name="déco" type="button">
                    <h3>Se déconnecter</h3>
                </button>
            </body>
        )
    }
}
