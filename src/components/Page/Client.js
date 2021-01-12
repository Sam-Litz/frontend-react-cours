import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
// import {Link} from 'react-router-dom'
import '../../css/Client.css';

class Client extends Component {
  render() {
    return (
      <div className="Client">
        <Navbar />
        <center>Client</center>
      </div>
    ); 
  }
}

export default Client;