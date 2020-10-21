import React from "react";
import {Link} from 'react-router-dom';
import image01 from '../../img/1.png';
import image02 from '../../img/2.png';
import image03 from '../../img/3.png';


const stylesChevrons = {
    "color": "black",
    "font-size": "2em"
}
class SlidersHome extends React.Component{
    render() {
        return (

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={image01} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block textos-slider izquierda">
                  <h5>Dale personalidad a tu cartera</h5>
                  <p>Arma tu combinación de cartera + strap</p>
                  <Link to="/productos">
                    <a href="#" className="btn btn-primary mt-3">VER PRODUCTOS</a>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image02} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block textos-slider derecha">
                  <h5>La libertad de combinar</h5>
                  <p>Cuero natural hecho a mano</p>
                  <Link to="/productos">
                    <a href="#" className="btn btn-primary mt-3">VER PRODUCTOS</a>
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image03} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block textos-slider izquierda">
                  <h5>Carteras Únicas</h5>
                  <p>Diseño y confección en Argentina</p>
                  <Link to="/productos">
                    <a href="#" className="btn btn-primary mt-3">VER PRODUCTOS</a>
                  </Link>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span style={stylesChevrons}><i class="fas fa-chevron-left"></i></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span style={stylesChevrons}><i class="fas fa-chevron-right"></i></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        )}
  };

export default SlidersHome;


