import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default class App extends React.Component {
	
	selectE() {
		var selectvalue = document.getElementById("searchbar").options.[document.getElementById("searchbar").selectedIndex].text;
		console.log(selectvalue)
		document.getElementById('liste').append(selectvalue, ",","\n");

	};
	
  	render (){
    // essential dans le render ()
			
		return (
		<div ClassName ="App">
			<Header />

			<body className="bg-white">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-4 col-md-5 col-sm-8 col-10 text-center">
							<h1 className="h1 color-primary "> <strong> Ma liste </strong> </h1>
							<br/>
								<div className="row">
									<div className="col-7">
										<select className=" form-control" data-live-search="true" id="searchbar">
											<option style={{display: 'none'}} value="" disabled selected>Fruits, légumes...</option>
											<option data-tokens="poulet" value='one'>poulet</option>
											<option data-tokens="riz">riz</option>
											<option data-tokens="pâte">pâte</option>
											<option data-tokens="jambon" value='one'>jambon</option>
											<option data-tokens="fraises">fraises</option>
											<option data-tokens="pommes de terre">pommes de terre</option>
										</select>
									</div>
									
									<div className="col-5">
										<a className="btn btn-primary" onClick={this.selectE}>
											+ Ajouter
										</a>
									</div>
									<div className="text-black bg-secondary p-2 rounded"id="liste">
									</div>
								</div>    		
							</div>
						</div>
					</div>
				</body>
				<Footer />
			</div>
		);
	}
}
