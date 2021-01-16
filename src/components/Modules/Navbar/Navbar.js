import React, { Component } from 'react';
import {MenuItems} from './MenuItems';
import '../../../css/Navbar.css';
import {Link} from 'react-router-dom'

class NavBar extends Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return(
      <div className="navbar-component">
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
          <a className="navbar-brand"><Link to='/'>ToDoAsso</Link></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* Accueil */}
              {/* <li className="nav-item active">
                <a className="nav-link"><Link to='/'>Accueil</Link></a>
              </li> */}
              {/* Fonctionnalités */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Fonctionnalités
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item">wesh</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">poto</a>
                </div>
              </li>
              {/* Associations */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Associations
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item">Action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Another action</a>
                </div>
              </li>
              {/* Réseaux */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Réseaux
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item">Action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Another action</a>
                </div>
              </li>
              {/* Prix */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Prix
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item">Action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Another action</a>
                </div>
              </li>
              {/* Ressources */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ressources
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item">Action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Another action</a>
                </div>
              </li>
              {/* Connexion */}
              <li className="nav-item">
                <a className="nav-link"><Link to='/auth'>Connexion</Link></a>
              </li>
              {/* Client */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Mon compte
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item">Informations personnels</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Paramètres</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Informations personnels</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Paramètres</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Informations personnels</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Paramètres</a>
                  <a className="dropdown-item">Informations personnels</a>
                  <a className="dropdown-item">Paramètres</a>
                  <a className="dropdown-item">Informations personnels</a>
                  <a className="dropdown-item">Paramètres</a>

                </div>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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