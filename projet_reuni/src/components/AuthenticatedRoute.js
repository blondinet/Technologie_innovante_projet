import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import Auth from "../contexts/Auth";


// Déstructurer les props pour récupérer path et component
/**
 * Fonction qui vérifie si l'utilisateur est connecté et renvoie vers la route si oui
 * Si non, la fonction redirige vers la page bienvenue (pour l'identification)
 * 
 * @param {*} param0 
 * @returns 
 */
const AuthenticatedRoute = ({ path, component }) => {
    const {isAuthenticated } = useContext(Auth);

    return isAuthenticated ? (
        <Route exact path={path} component={component} />
    ) : (
        <Redirect to="/bienvenue" />
    );
}

export default AuthenticatedRoute;