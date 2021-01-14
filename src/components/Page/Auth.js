import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
// import {Link} from 'react-router-dom'
import '../../css/Auth.css';
import FormulaireRegister from '../Modules/Auth/FormulaireRegister';
import FormulaireLogin from '../Modules/Auth/FormulaireLogin';
import DeleteUser from '../Modules/Cours/DeleteUser';

class Auth extends Component {
  render() {
    return (
      <div className="Auth">
        <Navbar />
        <div class="row">
          <div class="col-3 border border-primary">
            <FormulaireRegister/>
          </div>
          <div class="col-3 border border-primary">
            <FormulaireLogin/>
          </div>
          <div class="col-3 border border-primary">
            <DeleteUser/>
          </div>
        </div>
        
      </div>
    ); 
  }
}

export default Auth;