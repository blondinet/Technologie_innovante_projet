import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Bienvenue from "./Bienvenue";
import Inscription from "./Inscription";
import InscriptionProfil from "./InscriptionProfil";
import mdpoublie from "./mdpoublie";
import Recupmdp from "./Recupmdp";
import listeRose from "./listeRose";
import InscriptionMontre from "./InscriptionMontre";

import 'bootstrap';
import 'jquery';
import 'popper.js';
import 'bootstrap-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      isUserAuthenticated: true
    };
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            {/* <ul>
              <li>
                <Link to="/Bienvenue">Bienvenue</Link>
              </li>
              <li>
                <Link to="/Inscription">Inscription</Link>
              </li>
              <li>
                <Link to="/InscriptionProfil">InscripitonProfil</Link>
              </li>
              <li>
                <Link to="/mdpoublie">mdpoublie</Link>
              </li>
              <li>
                <Link to="/Recupmdp">Recupmdp</Link>
              </li>
            </ul> */}
            <hr />
            <Switch>
              <Route
                exact
                path="/"
                render={() => {
                    return (
                      this.state.isUserAuthenticated ?
                      <Redirect to="/Bienvenue" /> :
                      <Redirect to="/Inscription" /> 
                    )
                }}
              />
               <Route exact path="/Bienvenue" component={Bienvenue} />
              <Route exact path="/Inscription" component={Inscription} />
              <Route exact path="/InscriptionProfil" component={InscriptionProfil} />
              <Route exact path="/mdpoublie" component={mdpoublie} />
              <Route exact path="/Recupmdp" component={Recupmdp} />
              <Route exact path="/listeRose" component={listeRose} />
              <Route exact path="/InscriptionMontre" component={InscriptionMontre} />
           
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));