import React from "react";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Inscription = ()=> {
    const eye = <FontAwesomeIcon icon={faEye}/>;

    let hidden = true;
    let hiddenConfirm = true;
    let password = "";
    let confirmPassword = "";


    const handlePasswordChange = (event) => {
        password = event.target.value ;
    }
    const handlePasswordConfirmChange = (event) => {
        confirmPassword = event.target.value ;
    }
    const toggleShow = () => {
        hidden = !hidden ;
    }
    const toggleConfirmShow = () => {
        hiddenConfirm = !hiddenConfirm ;
    }

    return (
        <form method="post" action="">
            <label for="Email" />
            <input 
                className="form-control" 
                type="text" 
                name="Email" 
                placeholder="Email"
                id="Email" 
            />

            <label for="pass" />
            <div className="input-group">
                <input 
                    className="form-control"
                    type={hidden ? 'password' : 'text'} 
                    value={password}
                    onChange={handlePasswordChange} 
                    name="pass" 
                    placeholder="Mot de passe"
                    id="pass" 
                />

                <div className="input-group-text">
                    <i onClick={toggleShow}>{eye}</i>
                </div>
            </div>

            <label for="confirmepass"/>

            <div className="input-group">
                <input 
                    className="form-control" 
                    type={hiddenConfirm ? 'password' : 'text'} 
                    value={confirmPassword}
                    onChange={handlePasswordConfirmChange} 
                    name="confirmpass" 
                    placeholder="Confirmer le mot de passe" 
                    id="confirmpass" 
                />

                <div className="input-group-text">
                    <i onClick={toggleConfirmShow}>{eye}</i>
                </div>
            </div>
            <br />
            <p class="text-left color-white font-weight-light" > 
                <small>
                    <em>
                        En cliquant sur 
                        <strong> 
                            Je deviens membre!
                        </strong> 
                        Vous confirmez avoir lu et approuvé 
                        <strong> 
                            les conditions d'utilisation 
                        </strong> 
                    </em> 
                </small>
            </p> 
            <div class="button">
                <Link className="items btn p-0 w-50" to="inscriptionProfil">
                    <button class="btn btn-primary" > 
                        Je deviens membre ! 
                    </button>
                </Link>
            </div>
        </form>
    );
}

export default Inscription;