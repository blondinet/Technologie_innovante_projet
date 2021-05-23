import React from 'react';
import"./Parameters.css";
import "../bootstrap.css";

export default class Parameters extends React.Component{

    render(){
        return (
            <body>
                <h1>Paramètres</h1>

                <label class="modeswitch" title="Pas encore fonctionnel.">
                    <input type="checkbox" />
                    <span class="modeslider"></span>
                </label>

                <label class="langswitch" title="Pas encore fonctionnel.">
                    <input type="checkbox" />
                    <span class="langslider"></span>
                </label>

                <div class="sep">
                    - - -
                </div>

                <button class="parambutton" type="button" title="Pas encore fonctionnel.">
                    <h2>Centre de contact</h2>
                </button>

                <br />

                <button class="parambutton" type="button" title="Pas encore fonctionnel.">
                    <h2>Conditions d'utilisation</h2>
                </button>

                <br />

                <button class="parambutton" type="button" title="Pas encore fonctionnel.">
                    <h2>Politique de confidentialité</h2>
                </button>

                <br />

                <button class="parambutton" type="button" title="Pas encore fonctionnel.">
                    <h2>Mentions légales</h2>
                </button>
            </body>
        )
    }
}