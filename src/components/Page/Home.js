import React, { Component } from 'react';
import Navbar from '../Modules/Navbar/Navbar';
import News from '../Modules/Home/News';
// import {Link} from 'react-router-dom'
import '../../css/Home.css';
import SearchAsso from '../Modules/Search/SearchAsso';

class Home extends Component {
  render() {
    return (
      <div class="Home">  
        <Navbar />
        <div class="row">
          <div class="col-6 ">
            {/* composant news */}
            <News />
          </div>
          <div class="col-6 ">
            {/* composant searchAsso */}
            <SearchAsso />
          </div>
        </div>
      </div>
    ); 
  }
}

export default Home;