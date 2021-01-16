import React, { Component } from 'react';
import '../../../css/ResultSearchAsso.css';

class ResultSearchAsso extends Component {

	constructor(props){
		super(props);
    this.state = {
      assoList:  [],
    };
  }

  componentDidMount(){
		// this.getUsers();
		/*let ls = localStorage.getItem('resultSearchAsso')
		ls = JSON.parse(ls)*/
		let ls = localStorage.getItem('resultSearchAsso')
		if(ls){
			try{
				ls = JSON.parse(ls)
				var newls = [];

				//créer un array sans objet
				for(var i in ls){
					var arrayentries = [];
					Object.entries(ls[i]).map(function (entries) {
						var key_asso = entries[0]
						var value_asso = entries[1]
						arrayentries[key_asso] = value_asso
						newls[i] = arrayentries
					});
				}

				this.setState({assoList: newls})
			}catch(e){
				console.error("erreur parsage");
			}
		}
		//console.log(localStorage.getItem('resultSearchAsso'))
	}


display(){
	if(localStorage.getItem('resultSearchAsso') != null){
		// localStorage.getItem('resultSearchAsso').map()
	}
	
}

	render() {
		return (
			<div id='ResultSearchAsso-component' class="row">
				{
					this.state.assoList.map((element, i) =>
						<div class="card assos-card mx-auto m-2">
							<div class="card-body d-flex align-items-center flex-column bd-highlight text-center">
								<h5 class="card-title font-weight-bold bd-highlight">{element.nom}</h5>
								<p class="card-text bd-highlight my-auto">{element.description}</p>
								<a href={element.lienSiteWeb} class="btn btn-primary bd-highlight mt-auto" target="_blank">Allez sur le site</a>
							</div>
						</div>
					)}
			</div>
		)
	}
}

export default ResultSearchAsso;