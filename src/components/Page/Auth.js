import React, { Component } from 'react';
import Navbar from '../Modules/Navbar/Navbar';
// import {Link} from 'react-router-dom'
import '../../css/Auth.css';
import FormulaireRegister from '../Modules/Auth/FormulaireRegister';
import FormulaireLogin from '../Modules/Auth/FormulaireLogin';
import DeleteUser from '../Modules/Cours/DeleteUser';
import FormulaireCreateAsso from '../Modules/Associations/FormulaireCreateAsso';

class Auth extends Component {
  render() {
    return (
      <div class="Auth">
        <Navbar />
        <div class="row">
          <div class="col-4 m-1 border border-primary">
            <FormulaireRegister/>
          </div>
          <div class="col-4 m-1 border border-primary">
            <FormulaireLogin/>
          </div>
          <div class="col-4 m-1 border border-primary">
            <DeleteUser/>
          </div>
          <div class="col-4 m-1 border border-primary">
            <FormulaireCreateAsso/>
          </div>
        </div>        
      </div>
    ); 
  }
}

export default Auth;