import React, { Component } from 'react';
import Navbar from '../Modules/Navbar/Navbar';
// import {Link} from 'react-router-dom'
import '../../css/Client.css';

class Client extends Component {
  render() {
    return (
      <div class="Client">
        <Navbar />
        <center>Client</center>
      </div>
    ); 
  }
}

export default Client;