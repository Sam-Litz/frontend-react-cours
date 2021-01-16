import React, { Component } from 'react';
import '../../../css/News.css';
import axios from 'axios'

class News extends Component {

	constructor(props){
		super(props);
    this.state = {
      assoList: new Array(),
    };
  }

  componentDidMount(){

		axios.get('http://localhost:3001/news').then((response) => {
				if(response.status){
					// envoie la liste au news
					this.state.data = []
					console.log("result : " + JSON.stringify(response.data));
					response.data.forEach(element => this.state.data.push(element))
					// localStorage.removeItem('news')
					localStorage.setItem('news', JSON.stringify(this.state.data))
				}
			})


		// this.getUsers();
		/*let ls = localStorage.getItem('news')
		ls = JSON.parse(ls)*/
		let ls = localStorage.getItem('news')
		if(ls){
			try{
				ls = JSON.parse(ls)
				var newls = new Array();

				//créer un array sans objet
				for(var i in ls){
					var arrayentries = new Array();
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
	}

	render() {
		return (
			<div id='news-component border' class="row">
				{
					this.state.assoList.map((element, i) =>
						<div class="col-lg-6">
						<div class="d-flex align-items-start flex-column bd-highlight text-center article-news border rounded p-3 mt-3 mb-3">
							<div class="article-img-box">
								<img class="article-img" src={element.linkImg}/>
							</div>
							<div class="bd-highlight font-weight-bold w-100"><a class="article-title-link" href="{element.linkSource}" target="blank_">{element.title}</a></div>
							<div class="text-secondary bd-highlight w-100 my-auto">{element.description}</div>
							<div class="text-secondary bd-highlight mt-auto w-100">Source : <a href={element.linkSource} target="blank_">SansCroquettesFixes</a></div>
						</div>
					</div>
					)
				}
			</div>
		)
	}
}

export default News;