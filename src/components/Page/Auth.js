import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
// import {Link} from 'react-router-dom'
import '../../css/Auth.css';
import FormulaireRegister from '../Modules/Auth/FormulaireRegister';

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <Navbar />
        <center>Auth</center>
        <div class="row">
          <div class="col-4 offset-3 border boder-primary">
            <FormulaireRegister/>
          </div>
        </div>
        
      </div>
    ); 
  }
}

export default Auth;