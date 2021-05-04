import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './Compoments/Recettes';
import Recettes from './Compoments/Recettes';

export default class App extends React.Component {

  state = {
    remove: false,
    page1: true,
    page2: true,
    page3: false,
    page4: true,
    image1: "./Images/bouton1A.svg",
    image2: "./Images/bouton2A.svg",
    image3: "./Images/bouton3B.svg",
    image4: "./Images/bouton4A.svg",
    styletxt1: "text4",
    styletxt2: "text4",
    styletxt3: "text5",
    styletxt4: "text4"
  }

  goRecettes = () => {

    var element = <div id ='Page'><Recettes></Recettes></div>;
    ReactDOM.render(element, document.getElementById('Body'));
    

    this.setState( { styletxt1: "text4"} );
    this.setState( { styletxt2: "text4"} );
    this.setState( { styletxt3: "text5"} );
    this.setState( { styletxt4: "text4"} );

    this.setState( { image1: "./Images/bouton1A.svg"});
    this.setState( { image2: "./Images/bouton2A.svg"});
    this.setState( { image3: "./Images/bouton3B.svg"});
    this.setState( { image4: "./Images/bouton4A.svg"});
  }

  goJournal = () => {

    var element = <div id ='Page'><h1>Journal</h1></div>;
    ReactDOM.render(element, document.getElementById('Body'));


    this.setState( { styletxt1: "text5"} );
    this.setState( { styletxt2: "text4"} );
    this.setState( { styletxt3: "text4"} );
    this.setState( { styletxt4: "text4"} );

    this.setState( { image1: "./Images/bouton1B.svg"});
    this.setState( { image2: "./Images/bouton2A.svg"});
    this.setState( { image3: "./Images/bouton3A.svg"});
    this.setState( { image4: "./Images/bouton4A.svg"});
  }

  goListe = () => {

    var element = <div id ='Page'><h1>Liste</h1></div>;
    ReactDOM.render(element, document.getElementById('Body'));

    this.setState( { styletxt1: "text4"} );
    this.setState( { styletxt2: "text5"} );
    this.setState( { styletxt3: "text4"} );
    this.setState( { styletxt4: "text4"} );

    this.setState( { image1: "./Images/bouton1A.svg"});
    this.setState( { image2: "./Images/bouton2B.svg"});
    this.setState( { image3: "./Images/bouton3A.svg"});
    this.setState( { image4: "./Images/bouton4A.svg"});
  }

  goProfil = () => {

    var element = <div id ='Page'><h1>Profil</h1></div>;
    ReactDOM.render(element, document.getElementById('Body'));
    

    this.setState( { styletxt1: "text4"} );
    this.setState( { styletxt2: "text4"} );
    this.setState( { styletxt3: "text4"} );
    this.setState( { styletxt4: "text5"} );

    this.setState( { image1: "./Images/bouton1A.svg"});
    this.setState( { image2: "./Images/bouton2A.svg"});
    this.setState( { image3: "./Images/bouton3A.svg"});
    this.setState( { image4: "./Images/bouton4B.svg"});
  }



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

        <div id = "Body">
          <div id = "Page">
            <Recettes ></Recettes>
          </div>
        </div>

        <div className="Footer">
          <table className="center">
            <tr>

              <th width="3000"></th>

              <th>
                <button onClick = {this.goJournal} type="submit" class="bouton">
                  <img src={this.state.image1} alt="Flowers in Chania" width="50" height="50"/>
                  <imput className={this.state.styletxt1}>Journal</imput>
                </button>
              </th>

              <th width="3000"></th>

              <th>
                <button onClick = {this.goListe} type="submit" class="bouton">
                  <img src={this.state.image2} alt="Flowers in Chania" width="50" height="50"/>
                  <imput className={this.state.styletxt2}>Ma liste</imput>
                </button> 
              </th>

              <th width="3000"></th>

              <th>
                <button onClick = {this.goRecettes} type="submit" class="bouton">
                  <img src={this.state.image3} alt="Flowers in Chania" width="50" height="50"/>
                  <imput className={this.state.styletxt3}>Recettes</imput>
                </button> 
              </th>

              <th width="3000"></th>

              <th>
                <button onClick = {this.goProfil} type="submit" class="bouton">
                  <img src={this.state.image4} alt="Flowers in Chania" width="50" height="50"/>
                  <imput className={this.state.styletxt4}>Profil</imput>
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