import React, { Component } from 'react';
import {MenuItems} from './MenuItems';
import '../../css/Navbar.css';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return(
      <div className="navbar-component">
        <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
          <a class="navbar-brand"><Link to='/'>ToDoAsso</Link></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              {/* Accueil */}
              {/* <li class="nav-item active">
                <a class="nav-link"><Link to='/'>Accueil</Link></a>
              </li> */}
              {/* Fonctionnalités */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Fonctionnalités
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item">wesh</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item">poto</a>
                </div>
              </li>
              {/* Associations */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Associations
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item">Action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item">Another action</a>
                </div>
              </li>
              {/* Réseaux */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Réseaux
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item">Action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item">Another action</a>
                </div>
              </li>
              {/* Prix */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Prix
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item">Action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item">Another action</a>
                </div>
              </li>
              {/* Ressources */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ressources
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item">Action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item">Another action</a>
                </div>
              </li>
              {/* Connexion */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Connexion
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item">Action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item">Another action</a>
                </div>
              </li>
              {/* Client */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mon compte
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item">Informations personnels</a>
                  <a class="dropdown-item">Paramètres</a>
                </div>
              </li>
            </ul>
            {/* <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </nav>
      </div>
      // <nav className="NavbarItems">
      //   <h1 className="navbar-logo"> React <i className="fab fa-react"></i></h1>
      //   <div className="menu-icon">
        
      //   </div>
      //   <ul>
      //       {MenuItems.map((item,index) => {
      //         return (
      //           <li key={index}>
      //             <a className={item.cName}>
      //               <Link to={item.url}>{item.title}</Link>
      //             </a>
      //           </li>
      //         )
      //       })}
      //   </ul>
      // </nav>
    )
  }
  
}

export default NavBar;