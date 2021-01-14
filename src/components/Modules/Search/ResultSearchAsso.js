import React, { Component } from 'react';
import '../../../css/ResultSearchAsso.css';

class ResultSearchAsso extends Component {

	constructor(props){
		super(props)
	}

	render() {
		return (
			<div id='ResultSearchAsso-component' class="row">
				resultat component
				{this.props.result}
				{console.log(this.props)}
			</div>
		)
	}
}

export default ResultSearchAsso;