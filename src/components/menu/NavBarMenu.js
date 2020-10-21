import React from "react";
import CartIcon from '../cart/CartIcon';
import CategoriasMenu from './CategoriasMenu'
import {Link} from 'react-router-dom';
import logoMasha from '../../img/logo-masha.svg';

class NavBarMenu extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        estado : true
      }
      this.cambioIcono = this.cambioIcono.bind(this)
    }

    cambioIcono() {
      
      this.setState(prevState => ({
        estado: !prevState.estado
      }));

    }

    render() {
        return (
          <div>
            <div>
          <div className="barraMenu">
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <a href="">
                    <i className="fas fa-truck"></i> Envío gratis Desde $3799 según tu zona
                  </a>
                </div>
                <div className="col-3">
                  <a href="">
                    <i class="fas fa-sync-alt"></i> Cambio y devolución gratis a todo el paí­s
                  </a>
                </div>
                <div className="col-3">
                  <a href="">
                    <i class="fas fa-mobile"></i> Descargá gratis nuestra APP
                  </a>
                </div>
                <div className="col-3">
                  <a href="">
                    <i class="fas fa-sign-in-alt"></i> Ingresá o Registrate
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
              <Link to={'/'}  style={{"width" : "30%"}}>
                <img src={logoMasha} className="d-block" style={{"width" : "60%"}} alt="image01"/>
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" 
                      data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                      aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to={'/'}>
                      <a className="nav-link" href="">HOME <span className="sr-only">(current)</span></a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/productos'}>
                      <a className="nav-link" href="#">CATÁLOGO</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/'}>
                      <a className="nav-link" href="#">OFERTAS</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/'}>
                      <a className="nav-link" href="#">VERANO 2020</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/'}>
                      <a className="nav-link" href="#">OUTLET</a>
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav mr-0">
                  <li className="nav-item">
                    <i className="far fa-heart" style={{"font-size": "1.4em","margin-right": ".8em","margin-top": "5px"}}></i>
                  </li>
                  <li className="nav-item">
                    <Link to={'/cart'}>
                      <CartIcon icono={this.state.estado}/>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      <CategoriasMenu/>
      </div>
        )}
  };

export default NavBarMenu;


