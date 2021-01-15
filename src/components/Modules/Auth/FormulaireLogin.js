import React, { Component } from 'react';
import '../../../css/Associations.css';

import axios from 'axios'

class FormulaireLogin extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputs:{
        email: '',
        password: '',
      },
      userConnected: false,
      userJWT: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.connexion = this.connexion.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let state = this.state;
    state.inputs[name] = value;
    this.setState(state);
  }

  connexion(e){
    e.preventDefault();
    if(true){
      axios.post('http://localhost:3001/auth/login', this.state.inputs).then((response) => {
        //  PROVISOIR AVANT DAVOIR UN MEILLEUR BACK
        if(response.data != null){
          this.setState({userConnected: true});
          this.setState({userJWT: response.data.access_token});
        }
        // console.log(response);
      })
    }
  }



  render() {
    return (
      <div className="formulaire-component">
        <form>
          <div class="text-center">
            <h2>Connexion</h2>
            <small>(Fonctionne un peu pres)</small>
          </div>
          <hr/>    

          {
            this.state.userConnected ?
            <div class="alert alert-success" role="alert">
              <strong>Connexion réussite</strong>
              <p class="text-truncate"><strong>JWT:</strong> {this.state.userJWT}</p>
            </div>
            : <div></div>
          }


          <div class="form-group font-weight-bold">
            <label for="input-register-email">Email</label>
            <input name="email" type="text" class="form-control form-control-sm" id="input-register-email" placeholder="email@domaine.xx" value={this.state.inputs.email} onChange={this.handleInputChange} required />
          </div>

          <div class="form-group font-weight-bold">
            <label for="input-register-password">Mot de passe</label>
            <input name="password" type="password" class="form-control form-control-sm" id="input-register-password" placeholder="" value={this.state.inputs.password} onChange={this.handleInputChange} required />
          </div>

          <div class="form-group float-right">
            <button type="submit" class="btn btn-primary btn-sm" onClick={this.connexion}>Se connecter</button>
          </div>          

        </form>
      </div>
    ); 
  }
}

export default FormulaireLogin;