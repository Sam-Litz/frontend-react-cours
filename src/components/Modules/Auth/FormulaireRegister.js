import React, { Component } from 'react';
import '../../../css/Associations.css';

import axios from 'axios'

class FormulaireRegister extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputs:{
        nom: '',
        prenom: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      //provisoir
      userCreated: false,
      //
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.inscription = this.inscription.bind(this);
    this.checkInputs = this.checkInputs.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let state = this.state;
    state.inputs[name] = value;
    this.setState(state);
  }

  inscription(e){
    e.preventDefault();
    if(!this.checkPasswordLength() && this.checkPassword() && this.checkInputs()){
      axios.post('http://localhost:3001/users', this.state.inputs).then((response) => {
        //  PROVISOIR AVANT DAVOIR UN MEILLEUR BACK
        if(response.data != null){
          this.setState({userCreated: true});
        }
      })
    }
  }

  checkInputs(){
    return this.state.inputs.nom !== '' && this.state.inputs.prenom !== '' && this.state.inputs.email !== '' && this.state.inputs.password !== '';
  }

  checkPassword(){
    return this.state.inputs.password === this.state.inputs.confirmPassword;
  }
  checkPasswordLength(){
    return this.state.inputs.password.length !== 0 && this.state.inputs.password.length < 5;
  }

  render() {
    const passwordDifferents = this.checkPassword();
    const checkPasswordLength = this.checkPasswordLength();
    return (
      <div class="formulaire-component">
        <form>
          <div class="text-center">
            <h2>Inscription</h2>
          </div>
          <hr/>

          {
            this.state.userCreated ?
            <div class="alert alert-success" role="alert">
              L'utilisateur à bien été créé
            </div>
            : <div></div>
          }

          <div class="form-row font-weight-bold">
            <div class="form-group col">
              <label for="input-register-nom">Nom</label>
              <input name="nom" type="text" class="form-control form-control-sm" id="input-register-nom" placeholder="Alphonse" value={this.state.inputs.nom} onChange={this.handleInputChange} required />
            </div>
            <div class="form-group col">
              <label for="input-register-prenom">Prénom</label>
              <input name="prenom" type="text" class="form-control form-control-sm" id="input-register-prenom" placeholder="LAPIERRE" value={this.state.inputs.prenom} onChange={this.handleInputChange} required />
            </div>
          </div>      

          <div class="form-group font-weight-bold">
            <label for="input-register-email">Email</label>
            <input name="email" type="text" class="form-control form-control-sm" id="input-register-email" placeholder="email@domaine.xx" value={this.state.inputs.email} onChange={this.handleInputChange} required />
          </div>

          <div class="form-group font-weight-bold">
            <label for="input-register-password">Mot de passe</label>
            <input name="password" type="password" class="form-control form-control-sm" id="input-register-password" placeholder="" value={this.state.inputs.password} onChange={this.handleInputChange} required />
          </div>
          {
            checkPasswordLength ? <p class="text-danger">Le mot de passe doit avoir au moins 5 caractères</p> : <p></p>
          }

          <div class="form-group font-weight-bold">
            <label for="input-register-confirm-password">Confirmer le mot de passe</label>
            <input name="confirmPassword" type="password" class="form-control form-control-sm" id="input-register-confirm-password" placeholder="" value={this.state.inputs.confirmPassword} onChange={this.handleInputChange} required />
          </div>

          {
            !passwordDifferents ? <p class="text-danger">Les mots de passe ne correspondent pas</p> : <p></p>
          }

          <div class="form-group float-right">
            <button type="submit" class="btn btn-primary btn-sm" onClick={this.inscription}>S'incrire</button>
          </div>          

        </form>
      </div>
    ); 
  }
}

export default FormulaireRegister;