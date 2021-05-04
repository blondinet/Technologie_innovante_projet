import React from 'react';

export default class Recettes extends React.Component {

    render() {
        return(
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
                    <imput className="text3">5/5</imput>
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
        );
    }

}