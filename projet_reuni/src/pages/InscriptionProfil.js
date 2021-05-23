import React from 'react';

export default class App extends React.Component {
  render (){
    // essential dans le render ()

    return (
      <div className ="App page">
        <head>
          <meta charset="utf-8" />
          <title>Cook, Eat & Connect</title>
        </head>

        <div className="rose-la-page">
          <div className="rose-la-page h-100">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-5 col-sm-8 col-10 text-center">
            <img
              src="./Images/LogoBlanc.svg"
              alt="Cook, Eat and Connect logo avec un coeur"
              height="auto"
              width="256 px" />
            <h1 className="h1 color-primary "> <strong> Mon Profil </strong> </h1>
            <form method="post" action="">
              <label for="Email"></label>
              <input className="form-control" type="text" name="datedenaissance" placeholder="Date de naissance" id="datedenaissance" />
              <label for="pass"></label>
        
              <p className="text-left"><span className="mr-2">Sexe :</span>
              <input type="radio" name="sexe" /> Homme <input type="radio" name="sexe" /> Femme <input type="radio" name="sexe" /> Autre </p> 
              
              
              <label for="Taille"></label>
                        <input className="form-control" type="text" name="Taille" placeholder="Taille en cm" id="Taille" />
                        <label for="pass"></label>

              <label for="Poids"></label>
                  <input className="form-control" type="text" name="Poids" placeholder="Poids en kg" id="Poids" />
                      <label for="pass"></label>
                      <br/>
                      <div className="row">
                        <div className="col-12">
                          <select class="selectpicker form-control" data-live-search="true" id="searchbar">
                            <option style={{display: 'none'}} value="" disabled selected>Ajouter un régime alimentaire</option>
                            <option data-tokens="Végétarien" value='one'>végétarien</option>
                            <option data-tokens="Végétalien">végétalien</option>
                            <option data-tokens="Sans gluten">sans gluten</option>
                            <option data-tokens="Flexitarien" value='one'>Flexitarien</option>
                          </select>
                        </div>
                      </div>
                    <br/>
                    <div className="button">
                      <a className="btn btn-primary btn-lg" href="/listerose">Enregistrer </a>
                    </div>
                    <br />
                  </form>

                  <h6 className="color-primary"> <strong>     OU   </strong>    </h6>
                  <br />
                  <br />
                  <div className="button">
                    <a className="btn btn-link color-primary" href=""> Renseigner ultérieurement</a>
                  </div>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}