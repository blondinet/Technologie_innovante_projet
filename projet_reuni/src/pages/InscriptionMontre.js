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
    
      <body className="rose-la-page">
        <div className="rose-la-page h-100">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-md-5 col-sm-8 col-10 text-center">
        <img
        src="./Images/LogoBlanc.svg"
        alt="Cook, Eat and Connect logo avec un coeur"
        height="auto"
        width="256 px" />
        <h1 className="h1 color-primary "> <strong> Ma montre connectée</strong> </h1>
        <p className = "color-primary text-justify"> Activez le Bluetooth et appuyez sur le nom de  votre montre lorsqu’il apparaît dans la liste ci-dessous.</p>
        <img
        src="./Images/MontreCo.svg"
        alt="Connexionmontre"
        height="auto"
        width="300px" />
        <br />
        <br />
    <form method="post" action="">
		    <div className="button">
            <button className="btn btn-primary btn-lg "><a href="/recettes">Enregistrer</a></button>
          <br />
          <br />
        <h6 className="color-primary"> <strong>     OU   </strong>    </h6>
        <br />
        <br />
        <div className="button">
          <a className="btn btn-link color-primary" href=""> Renseigner ultérieurement</a>
          </div>
    </div>
    </form>
  </div>
  </div>
  </div>
  </body>
</html></div>
);}}
