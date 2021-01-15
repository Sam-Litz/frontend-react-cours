import React, { Component } from 'react';
import '../../../css/Associations.css';

import axios from 'axios'

class FormulaireCreateAsso extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputs:{
        nom: '',
        lienSiteWeb: '',
        description: '',

      },
      //provisoir
      assoCreated: false,
      //
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.createAsso = this.createAsso.bind(this);
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let state = this.state;
    state.inputs[name] = value;
    this.setState(state);
  }

  createAsso(e){
    e.preventDefault();
    if(this.checkInputs()){
      axios.post('http://localhost:3001/associations', this.state.inputs).then((response) => {
        //  PROVISOIR AVANT DAVOIR UN MEILLEUR BACK
        if(response.data != null){
          this.setState({assoCreated: true});
        }
      })
    }
  }

  checkInputs(){
    return this.state.inputs.nom !== '';
  }


  render() {
    return (
      <div className="formulaire-component">
        <form>
          <div class="text-center">
            <h2>Créer une assocation</h2>
          </div>
          <hr/>

          {
            this.state.assoCreated ?
            <div class="alert alert-success" role="alert">
              L'association à bien été créée
            </div>
            : <div></div>
          }

          <div class="form-group">
            <label for="input-register-nom">Nom</label>
            <input name="nom" type="text" class="form-control form-control-sm" id="input-register-assocation-nom" placeholder="La France Insoumise" value={this.state.inputs.nom} onChange={this.handleInputChange} required />
          </div>
          
          <div class="form-group">
            <label for="input-register-prenom">Description</label>
            <textarea name="description" type="text" class="form-control form-control-sm" id="input-register-assocation-description" placeholder="Ceci est une description..." value={this.state.inputs.description} onChange={this.handleInputChange} ></textarea>
          </div>

          <div class="form-group font-weight-bold">
            <label for="input-register-email">Lien site web</label>
            <input name="lienSiteWeb" type="text" class="form-control form-control-sm" id="input-register-assocation-lienSiteWeb" placeholder="https://google.fr" value={this.state.inputs.lienSiteWeb} onChange={this.handleInputChange} />
          </div>

          <div class="form-group float-right">
            <button type="submit" class="btn btn-primary btn-sm" onClick={this.createAsso}>Enregistrer l'association</button>
          </div>

        </form>
      </div>
    ); 
  }
}

export default FormulaireCreateAsso;