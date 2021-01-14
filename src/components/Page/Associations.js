import React, { Component } from 'react';
import Navbar from '../Modules/Navbar/Navbar';
// import {Link} from 'react-router-dom'
import '../../css/Associations.css';

class Associations extends Component {
  render() {
    return (
      <div className="Associations">
        <Navbar />
        <center>Associations</center>
      </div>
    ); 
  }
}

export default Associations;