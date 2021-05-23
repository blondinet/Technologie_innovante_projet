import React, { useEffect, useState, useContext } from "react";

import Auth from "../contexts/Auth";
import { login } from "../services/AuthApi";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import "../pageRose.css";

/**
 * Fonction qui gère le login
 * @param {*} param0 
 * @returns 
 */
const Bienvenue = ({ history }) => {
    // Authentificateur
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    // Variable qui permet ou non d'afficher le mot de passe en clair
    const [passwordShown, setPasswordShown] = useState(false);
    // variable qui contient l'oeil de decoration
    const eye = <FontAwesomeIcon icon={faEye} />;

    // variable qui contient l'utilisateur
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
  
    // Fonction qui gère le changement dans le mdp ou le mail
    const handleChange = ({currentTarget}) => {
        const { name, value } = currentTarget;

        setUser({...user, [name]: value})
    }

    // Fonction qui gère la demande de connexion
    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const response = await login(user);
            setIsAuthenticated(response);
            history.replace('/journal');
        } catch ({ response }) {
            console.log(response);
        }
    }

    // Fonction qui gère la visibilité du mdp
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    }

    useEffect(() => {
        if (isAuthenticated) {
            history.replace('/journal');
        }
    }, [history, isAuthenticated]);

    return (
        <body ClassName ="App rose-la-page">
            <div ClassName="derriere"></div>
        {/* Header */}
          <head>
            <meta charset="utf-8" />
            <title>Cook, Eat & Connect</title>
          </head>
  
          <div className="rose-la-page h-100">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-5 col-sm-8 col-10 text-center">
                <img
                  src="./Images/LogoBlanc.svg"
                  alt="Cook, Eat and Connect logo avec un coeur"
                  height="auto"
                  width="256 px" />
  
                <h1 className="h1 color-primary">
                  <strong>  Bienvenue </strong> 
                </h1>
                <form method="post" action="" className="form-profile" onSubmit={handleSubmit}>
                    <fieldset>

                        {/* <legend>Se connecter</legend> */}
                        <div className="form-group">
                            <label htmlFor="Email" />
                            <input
                                type="text"
                                name="Email"
                                className="form-control"
                                type="text"
                                id="Email"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pass" />
                            <div className="input-group">
                                <input
                                    type={passwordShown ? "text" : "password"}
                                    name="pass"
                                    className="form-control"
                                    id="pass"
                                    placeholder="Mot de passe"
                                    onChange={handleChange}
                                />
                                <div className="input-group-text">
                                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                                </div>
                            </div>
                        </div>

                        <div class="form-check text-left d-flex justify-content-start">
                            <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                            <label class="form-check-label" for="dropdownCheck">
                                Se souvenir de moi
                            </label>
                        </div>

                        <div className="text-left mb-4 d-flex justify-content-start">
                            <a className="btn btn-link text-left color-primary" href="/mdpoublie">Mot de passe oublié ?</a>
                        </div>

                        <div className="button">
                            <button className="btn btn-primary btn-lg " type="submit">
                                Connexion
                            </button>
                        </div>
                        
                        <br />
                        
                        <h6 className="color-primary"> 
                        <strong>     OU   </strong>    
                        </h6>
                        
                        <br />
                        <br />

                        <div className="button">
                            <a className="btn btn-primary btn-lg" href="/inscription">S'inscrire </a>
                        </div>
                        

                        
                    </fieldset>
                </form>
            </div>
          </div>
        </div>
      </body> 
    );
};

export default Bienvenue;