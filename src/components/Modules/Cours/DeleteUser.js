import React, { Component } from 'react';
import '../../../css/Associations.css';

import axios from 'axios'

class DeleteUser extends Component {

  constructor(props){
    super(props);
    this.state = {
      userList: [],
    };
    this.getUsers = this.getUsers.bind(this);
    // this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount(){
    this.getUsers();
  }
  

  getUsers(){
    axios.get('http://localhost:3001/users').then((response) => {
      //  PROVISOIR AVANT DAVOIR UN MEILLEUR BACK
      if(response.data != null){
        this.setState({userList: response.data});
      }
    })    
  }

  deleteUser(id){
    axios.get('http://localhost:3001/users/delete/' + id).then((response) => {
      //  PROVISOIR AVANT DAVOIR UN MEILLEUR BACK
      if(response.data != null){
        this.getUsers();
      }
    })  
  }


  render() {
    return (
      <div className="formulaire-component">
        <h2>Supprimer un utilsateur</h2>
        {
          this.state.userList.map((u) => <p><strong>Email: </strong>{u.email}<button class="btn btn-danger btn-sm" onClick={(e) => this.deleteUser(u._id)}>Supprimer</button></p>)
        }
      </div>
    ); 
  }
}

export default DeleteUser;