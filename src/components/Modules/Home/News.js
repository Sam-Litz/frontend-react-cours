import React, { Component } from 'react';
import '../../../css/News.css';

class News extends Component {
	render() {
		return (
			<div id='news-component' class="row">
				<div class="col-lg-6">
					<div class="d-flex align-items-start flex-column bd-highlight text-center article-news border rounded p-3 mt-3 mb-3">
						<div class="article-img-box">
							<img class="article-img" src="http://sanscroquettesfixes.fr/wp-content/uploads/2020/01/communication-animale-pour-le-bien-etre-des-animaux.png"/>
						</div>
						<div class="bd-highlight font-weight-bold w-100"><a class="article-title-link" href="http://sanscroquettesfixes.fr/communication-animale-comprendre" target="blank_">La communication animale, chat vous parle ?</a></div>
						<div class="text-secondary bd-highlight w-100 my-auto">Il nous est arrivé à tous de se demander à quoi pense notre animal, pourquoi il agit ...</div>
						<div class="text-secondary bd-highlight mt-auto w-100">Source : <a href="http://sanscroquettesfixes.fr/communication-animale-comprendre" target="blank_">SansCroquettesFixes</a></div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="d-flex align-items-start flex-column bd-highlight text-center article-news border rounded p-3 mt-3 mb-3">
						<div class="article-img-box">
							<img class="article-img" src="http://sanscroquettesfixes.fr/wp-content/uploads/2019/06/tatouage-ou-puce-e%CC%81lectronique-que-choisir.png"/>
						</div>
						<div class="bd-highlight font-weight-bold w-100"><a class="article-title-link" href="http://sanscroquettesfixes.fr/identification-choisir-tatouage-ou-puce-electronique" target="blank_">Tatouage vs puce électronique : quel moyen d’identification choisir pour son animal ?</a></div>
						<div class="text-secondary bd-highlight w-100 my-auto">Lorsque l’on a des animaux, il existe différents indispensables à respecter ...</div>
						<div class="text-secondary bd-highlight mt-auto w-100">Source : <a href="http://sanscroquettesfixes.fr/identification-choisir-tatouage-ou-puce-electronique" target="blank_">SansCroquettesFixes</a></div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="d-flex align-items-start flex-column bd-highlight text-center article-news border rounded p-3 mt-3 mb-3">
						<div class="article-img-box">
							<img class="article-img" src="http://sanscroquettesfixes.fr/wp-content/uploads/2018/10/spring-1834147_1920.jpg"/>
						</div>
						<div class="bd-highlight font-weight-bold w-100"><a class="article-title-link" href="http://sanscroquettesfixes.fr/8-conseils-pour-rassurer-un-chat-peureux" target="blank_">8 conseils pour rassurer un chat peureux</a></div>
						<div class="text-secondary bd-highlight w-100 my-auto">Même si l’on voudrait tous que notre chat soit câlin et particulièrement proche de l’humain, la réalité est toute autre ...</div>
						<div class="text-secondary bd-highlight mt-auto w-100">Source : <a href="http://sanscroquettesfixes.fr/8-conseils-pour-rassurer-un-chat-peureux" target="blank_">SansCroquettesFixes</a></div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="d-flex align-items-start flex-column bd-highlight text-center article-news border rounded p-3 mt-3 mb-3">
						<div class="article-img-box">
							<img class="article-img" src="http://sanscroquettesfixes.fr/wp-content/uploads/2018/10/nature-3042751_1920.jpg"/>
						</div>
						<div class="bd-highlight font-weight-bold w-100"><a class="article-title-link" href="http://sanscroquettesfixes.fr/chien-guide-supermarches-que-dit-la-loi" target="blank_">Chien guide & supermarchés : que dit la loi ?</a></div>
						<div class="text-secondary bd-highlight w-100 my-auto">Ces derniers jours, une vidéo est devenue virale sur Internet et en particulier sur les réseaux sociaux ...</div>
						<div class="text-secondary bd-highlight mt-auto w-100">Source : <a href="http://sanscroquettesfixes.fr/chien-guide-supermarches-que-dit-la-loi" target="blank_">SansCroquettesFixes</a></div>
					</div>
				</div>
			</div>
		)
	}
}

export default News;