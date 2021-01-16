import React, { Component } from 'react';
import Navbar from '../Modules/Navbar/Navbar';
// import {Link} from 'react-router-dom'
import '../../css/Features.css';

class Features extends Component {
  render() {
    return (
      <div class="Features">
        <Navbar />
        <center>Features</center>
      </div>
    ); 
  }
}

export default Features;