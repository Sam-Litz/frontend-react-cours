import React, { Component } from 'react';
import '../../../css/Search.css';

import axios from 'axios'
import ResultSearchAsso from './ResultSearchAsso';
//export const MContext = React.createContext();
class Search extends Component {

constructor(props){
	super(props)
	this.state = {
		data : []
	}
}

	// componentWillMount() {

	// }

	search = (e) => {
		e.preventDefault();
		let data = e.target.value
		if(e.target.value.length >= 3){
			console.log("appel : " + e.target.value)
			axios.get('http://localhost:3001/associations').then((response) => {
				if(response.status){
					// envoie la liste au resultSearchAsso
					this.state.data = []
					console.log("result : " + JSON.stringify(response.data));
					response.data.forEach(element => this.state.data.push(JSON.stringify(
						{
							'nom' : element.nom, 
							'description' : element.description,
							'lienSiteWeb' : element.lienSiteWeb
						})))
					// localStorage.removeItem('resultSearchAsso')
					localStorage.setItem('resultSearchAsso',this.state.data)
				}
			})
		}else return
  }


	render() {
		return (
			<div id='search-component' class="mt-3">
				<div class="input-group mb-3">
					<input type="text" class="form-control input-lg" onChange={(e) => this.search(e)} placeholder="Recherche ton association" aria-describedby="button-addon2"></input>
				</div>
			</div>
		)
	}
}

export default Search;