import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
// import {Link} from 'react-router-dom'
import '../../css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <center>Home</center>
      </div>
    ); 
  }
}

export default Home;