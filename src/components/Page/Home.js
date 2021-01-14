import React, { Component } from 'react';
import Navbar from '../Modules/Navbar/Navbar';
import News from '../Modules/Home/News';
// import {Link} from 'react-router-dom'
import '../../css/Home.css';
import SearchAsso from '../Modules/Search/SearchAsso';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <div class="container-fluid ">
          <div class="row mx-2">
            <div class="col-lg-6 border">
              {/* composant news */}
              <News />
            </div>
            <div class="col-lg-6 border">
              {/* composant searchAsso */}
              <SearchAsso />
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Home;