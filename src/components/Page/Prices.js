import React, { Component } from 'react';
import Navbar from '../Modules/Navbar/Navbar';
// import {Link} from 'react-router-dom'
import '../../css/Prices.css';

class Prices extends Component {
  render() {
    return (
      <div className="Prices">
        <Navbar />
        <center>Prices</center>
      </div>
    ); 
  }
}

export default Prices;