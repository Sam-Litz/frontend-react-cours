import React, { Component } from 'react';
import '../../../css/ResultSearchAsso.css';

class ResultSearchAsso extends Component {

	constructor(props){
		super(props);
    this.state = {
      assoList: [],
    };
  }

  componentDidMount(){
		// this.getUsers();
		/*let ls = localStorage.getItem('resultSearchAsso')
		ls = JSON.parse(ls)*/
		let ls = {ls:localStorage.getItem('resultSearchAsso')}
		if(ls){
			try{
				ls = JSON.parse(ls)
				console.log(ls)
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
				{/*JSON.parse(localStorage.getItem('resultSearchAsso')).forEach(element => console.log(element))*/}
				<div class="card">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Pas grand chose</p>
						<a href="#" class="btn btn-primary">Site Web</a>
					</div>
				</div>
			</div>
		)
	}
}

export default ResultSearchAsso;