import React from 'react';
import './App.css';

export default class App extends React.Component {

      
  render() {

    // Header : balise <div> qui sert de tête de page
    // Footer : balise <div> qui sert de bas de page

    // Méthode essentiel dans le render()
    return (

      <div className="App">

        
        <div className="Header">
          <table className="center">
            <tr>
              <th width="3000"></th>
              <th>
                <img src="./Images/logo.png" alt="Flowers in Chania" />
              </th>
              <th width="3000"></th>
            </tr>
          </table>
        </div>

        <div className="Recettes">

          <imput className="text2">Que voulez-vous manger ?</imput>

          <table className="plat">

            <button type="submit" class="bouton">
                <tr>
                  <th>
                    <imput className="text3">›</imput>
                  </th>
                  <th width="10"></th>
                  <th>
                    <imput className="text3">Minestron</imput>
                  </th>
                  <th width="3000"></th>
                  <th>
                    <imput className="text3">3/5</imput>
                  </th>
                </tr>
            </button>
            
            
          </table>

          <table className="platImage">
            <img className="imagePlat" src="./Images/01.png" alt="Flowers in Chania" width="300" height="300"/>
          </table>

          <table className="plat1">
            <tr>
              <th>
                <table className="plat2">
                  <button type="submit" class="bouton">  
                    <tr>
                      <th>
                        <imput className="text3">X</imput>
                      </th>
                      <th width="5"></th>
                      <th>
                        <imput className="text3">J'essaye ça !</imput>
                      </th>
                    </tr>
                  </button>
                </table>
              </th>

              <th width="10"></th>

              <th>
                <table className="plat2">
                  <button type="submit" class="bouton">  
                    <tr>
                      <th>
                        <imput className="text3">X</imput>
                      </th>
                      <th width="5"></th>
                      <th>
                        <imput className="text3">Plus tard...</imput>
                      </th>
                    </tr>
                  </button>
                </table>
              </th>

            </tr>
          </table>
          
        </div>

        <div className="Footer">
          <table className="center">
            <tr>

              <th width="3000"></th>

              <th>
                <button className="b1" type="submit" class="bouton">
                  <img src="./Images/bouton1.svg" alt="Flowers in Chania" width="50" height="50"/>
                  <imput className="text4">Journal</imput>
                </button>
              </th>

              <th width="3000"></th>

              <th>
                <button className="b2" type="submit" class="bouton">
                  <img src="./Images/bouton2.svg" alt="Flowers in Chania" width="50" height="50"/>
                  <imput className="text4">Ma liste</imput>
                </button> 
              </th>

              <th width="3000"></th>

              <th>
                <button className="b3" type="submit" class="bouton">
                  <img src="./Images/bouton3.svg" alt="Flowers in Chania" width="50" height="50"/>
                  <imput className="text4">Recettes</imput>
                </button> 
              </th>

              <th width="3000"></th>

              <th>
                <button className="b4" type="submit" class="bouton">
                  <img src="./Images/bouton4.svg" alt="Flowers in Chania" width="50" height="50"/>
                  <imput className="text4">Profil</imput>
                </button> 
              </th>

              <th width="3000"></th>

            </tr>

          </table>
        </div>

      </div>
      
  
    );

  }

}

// export default App;