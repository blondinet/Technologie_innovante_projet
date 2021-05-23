import React, { useState } from "react";
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

// import About from "./pages/About";
import Home from "./pages/Home";

import Bienvenue from "./pages/Bienvenue";
import Inscription from "./pages/Inscription";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import Parameters from "./pages/Parameters";
import ListeBlanche from "./pages/ListeBlanche";

import ListeRose from "./pages/listeRose";
import InscriptionMontre from "./pages/InscriptionMontre";
import InscriptionProfil from "./pages/InscriptionProfil";

import Recupmdp from "./pages/Recupmdp";
import mdpoublie from "./pages/mdpoublie";

import Journal from "./pages/Journal";

import Auth from "./contexts/Auth";
import { hasAuthenticated} from "./services/AuthApi";
import AuthenticatedRoute from "./components/AuthenticatedRoute";

// Création du router
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(hasAuthenticated);

  const NotFoundRedirect = () => <Redirect to='/bienvenue' />

  return (
    <Auth.Provider value={{isAuthenticated, setIsAuthenticated}} >
      <BrowserRouter>
        <div>
       
          <Switch>
            <div>
              <Route exact path='/'             component={Bienvenue} />
              <Route exact path='/inscription'  component={Inscription} />
              <Route exact path='/inscriptionProfil'  component={InscriptionProfil} />
              <Route exact path='/listerose'  component={ListeRose} />
              <Route exact path='/inscriptionMontre'  component={InscriptionMontre} />
              <Route exact path='/mdpoublie'  component={mdpoublie} />
              <Route exact path='/recupmdp'  component={Recupmdp} />
              
              <Route exact path='/bienvenue'    component={Bienvenue} />

              <Route exact path='/journal'   component={Journal} />
              <Route exact path='/liste'     component={ListeBlanche} />
              <Route exact path='/recettes'  component={Home} />
              <Route exact path='/profil'    component={Profile} />

              <Route exact path='/stat'    component={Statistics} />

              <Route exact path='/param'    component={Parameters} />


              
              {/* <Route component={NotFoundRedirect} /> */}
              {/* <Redirect to="/bienvenue" /> */}
            </div>
          </Switch>
         
          
        </div>
      </BrowserRouter>  
    </Auth.Provider>
  );
}

export default App;

