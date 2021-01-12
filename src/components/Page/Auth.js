import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
// import {Link} from 'react-router-dom'
import '../../css/Auth.css';

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <Navbar />
        <center>Auth</center>
      </div>
    ); 
  }
}

export default Auth;