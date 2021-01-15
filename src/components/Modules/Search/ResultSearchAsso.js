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
  
	}


display(){
	if(localStorage.getItem('resultSearchAsso') != null){
		// localStorage.getItem('resultSearchAsso').map()
	}
	
}

	render() {
		return (
			<div id='ResultSearchAsso-component' class="row">
				{localStorage.getItem('resultSearchAsso')}
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