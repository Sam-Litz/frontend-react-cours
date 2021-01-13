import React, { Component } from 'react';
import '../../../css/Associations.css';

class FormulaireRegister extends Component {
  render() {
    return (
      <div className="formulaire-component">
        <form>
          <div class="text-center">
            <h2>Inscription</h2>
          </div>
          <hr/>

          <div class="form-row font-weight-bold">
            <div class="form-group col">
              <label for="input-register-nom">Nom</label>
              <input type="text" class="form-control" id="input-register-nom" placeholder="Alphonse"/>
            </div>
            <div class="form-group col">
              <label for="input-register-prenom">Prénom</label>
              <input type="text" class="form-control" id="input-register-prenom" placeholder="LAPIERRE"/>
            </div>
          </div>      

          <div class="form-group font-weight-bold">
            <label for="input-register-email">Email</label>
            <input type="text" class="form-control" id="input-register-email" placeholder="email@domaine.xx"/>
          </div>

          <div class="form-group font-weight-bold">
            <label for="input-register-password">Mot de passe</label>
            <input type="password" class="form-control" id="input-register-password" placeholder=""/>
          </div>

          <div class="form-group font-weight-bold">
            <label for="input-register-confirm-password">Confirmer le mot de passe</label>
            <input type="password" class="form-control" id="input-register-confirm-password" placeholder=""/>
          </div>

          <div class="form-group float-right">
            <button type="button" class="btn btn-primary">S'incrire</button>
          </div>          

        </form>
      </div>
    ); 
  }
}

export default FormulaireRegister;