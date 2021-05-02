import React from 'react';
import './App.css';
import './bootstrap.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faSearch} />;
//var open = false;
export default class App extends React.Component {

  render (){
    // essential dans le render ()
 
    
return (
<div ClassName ="App">
  <html>
  <head>
    <meta charset="utf-8" />
    <title>Cook, Eat & Connect</title>
  </head>
<body>
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-xl-4 col-md-5 col-sm-8 col-10 text-center">
				<img
		        src="./LogoBlanc.svg"
		        alt="Cook, Eat and Connect logo avec un coeur"
		        height="auto"
		        width="256 px" />
		        <div className="input-group my-4">
                    <div className="input-group-text">
                        <i onClick={this.toggleShow}>{eye}</i>
                    </div>
		        <input type="" className="form-control" name=""></input>
                </div>
		        <h1 className="h1 color-primary"> <strong> Ma liste </strong> </h1>
		        <div className="row gx-3">
		        	<div className="col-4">
		        		<div className="rounded px4 bg-body shadow-sm">
		        			<img className="rounded-top img-fluid" width src="./pates.webp"></img>
		        			<div>Pates</div>
		        		</div>
		        	</div>
		        	<div className="col-4">
		        		<div className="rounded px4 bg-body shadow-sm">
		        			<img className="rounded-top img-fluid" width src="./pates.webp"></img>
		        			<div>Pates</div>
		        		</div>
		        	</div>
        
		        	<div className="col-4">
		        		<div className="rounded px4 bg-body shadow-sm">
		        			<img className="rounded-top img-fluid" width src="./pates.webp"></img>
		        			<div>Pates</div>
                    </div>
                    </div>
                    </div>
                    <br />
		    <div className="button">
            <button className="btn btn-primary btn-lg " type="submit">Enregistrer</button>
          <br />
          <br />
        <h6 className="color-primary"> <strong>     OU   </strong>    </h6>
        <br />
        <br />
        <div className="button">
          <a className="btn btn-link color-primary" href=""> Renseigner ultérieurement</a>
          </div>
          </div>     		
		</div>
        </div>
        </div>
    </body>
    </html>
</div>
);}}
