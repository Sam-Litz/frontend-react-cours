import React, { Component } from 'react';
import '../../../css/SearchAsso.css';
import Search from './Search';
import ResultSearchAsso from './ResultSearchAsso';

class SearchAsso extends Component {
	
	
	// handleData = (e) => {
	// 	this.setState({data: e.target.value});
	// }

	render() {
		return (
			<div id='SearchAsso-component'>
				<div>
					<Search/>
				</div >
				<div>
					<ResultSearchAsso/>
				</div >
			</div>
		)
	}
}

export default SearchAsso;