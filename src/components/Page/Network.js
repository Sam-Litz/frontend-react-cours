import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
// import {Link} from 'react-router-dom'
import '../../css/Network.css';

class Network extends Component {
  render() {
    return (
      <div className="Network">
        <Navbar />
        <center>Network</center>
      </div>
    ); 
  }
}

export default Network;