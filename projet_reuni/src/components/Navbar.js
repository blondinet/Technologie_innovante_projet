import React, { useContext } from "react";
import Auth from "../contexts/Auth";
import { Link } from "react-router-dom";

/**
 * Fonction qui créer un bouton de redirection
 * 
 * @Modification Xavier Jacob--Guizon
 * @param   {String} props.className    Nom de la classe
 * @param   {String} props.to           Lien de redirection
 * @param   {String} props.title        Titre du bouton
 * @param   {String} props.image        Chemin vers l'image
 * @return  {String} 
 */
function LinkBlock(props){
    let text;
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    //  On check si l'onglet courant est celui correspondant à l'url
    if(window.location.pathname === props.to){ 
        // Si oui, on affiche l'onglet en surlignage
        text = <p className="textIn">{props.title}</p>
    }
    else{ 
        text = <p className={props.className}>{props.title}</p> 
    }
    return (
        <Link className="items btn" to={props.to}>
            <button >
            <img src={props.image} alt="Icone du nav" width="60" height="60"/>
            {text}
            </button>
        </Link> 
    );
}

/**
 * Classe qui créer la navbarre du footer
 * 
 * @Modification Herbin
 */
export default class Navbar extends React.Component  {
    state = {
        remove: false,
        image1: "./Images/bouton1.svg",
        image2: "./Images/bouton2.svg",
        image3: "./Images/bouton3.svg",
        image4: "./Images/bouton4.svg",
        styleB1: "textOut",
        styleB2: "textOut",
        styleB3: "textOut",
        styleB4: "textOut",
    };

    constructor(props){
        super(props);
        this.goChange();
    }

    /*
    * Fonction qui remet à zero les boutons du footer
    *
    * @Modificaiton Herbin
    */ 
    reinitialisationBtn = () => {
        this.setState( { styleB1: "textOut"} );
        this.setState( { styleB2: "textOut"} );
        this.setState( { styleB3: "textOut"} );
        this.setState( { styleB4: "textOut"} );
    }

    /**
     * Fonction qui modifie les boutons pour indiquer celui qui est séléctionné
     * 
     * @Modification Herbin
     */
    goChange = () => {
        let url = window.location.pathname;
        console.log(url);

        this.reinitialisationBtn();
        switch(url){
            case "/journal":
                this.setState( { styleB1: "textIn"} );
                break;
            case "/liste":
                this.setState( { styleB2: "textIn"} );
                break;
            case "/recettes":
                this.setState( { styleB3: "textIn"} );
                break;
            case "/profil":
                this.setState( { styleB4: "textIn"} );
                break;
            default:
        };
    }


    render(){
        return (
            <div className="w-100 d-flex justify-content-around center" onClick={this.goChange}>
                <LinkBlock className={this.state.styleB1} to="/journal"   title="Journal"     image={this.state.image1}/>
                <LinkBlock className={this.state.styleB2} to="/liste"     title="Ma liste"    image={this.state.image2}/>
                <LinkBlock className={this.state.styleB3} to="/recettes"  title="Recettes"    image={this.state.image3}/>
                <LinkBlock className={this.state.styleB4} to="/profil"    title="Profil"      image={this.state.image4}/>
            </div>
        );
    }
}