import React from 'react';

export default class App extends React.Component {
  render (){
    // essential dans le render ()

    return (
      <div className ="App">
      <html className="bg-body">
      <head>
        <meta charset="utf-8" />
        <title>Cook, Eat & Connect</title>
      </head>
    
      <body className="bg-body">
        <div className="rose-la-page h-100">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-5 col-sm-8 col-10 text-center">
        <img
        src="./Images/LogoBlanc.svg"
        alt="Cook, Eat and Connect logo avec un coeur"
        height="auto"
        width="256 px" />
        <h1 className="h1 color-primary "> <strong> Mot de passe oublié ?</strong> </h1>
        <p className = "color-primary text-justify"> Communiquez-nous votre adresse email liée à votre compte et nous vous enverrons<span className="text-white"> un mail avec un lien magique </span>vous permettant de réinitialiser votre mot de passe. </p>
        
    <form method="post" action="">
            <label for="Email"></label>
            <input className="form-control" type="text" name="Email" placeholder="Email" id="Email" />
            <label for="pass"></label>
            <div className="button">
          <a className="btn btn-primary btn-lg" href="/recupmdp">Envoyer </a>
          </div>
          <br />
        <h6 className="color-primary"> <strong>     OU   </strong>    </h6>
        <br />
        <br />
          <div className="button">
          <a className="btn btn-link color-primary" href=""> Annuler</a>
          </div>
          </form>
    </div>
  </div>
  </div>
  </body>
</html></div>
);}}
