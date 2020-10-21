import React from 'react';
import {Link} from 'react-router-dom';

function Banner1() {
  //console.log(props);
  return (
        <div className="banner1 container-fluid mt-5">
            <div className="row" style={{"height":"600px"}}>
                <div className="col-6" style={{
                    "background-image": "url(//cdn.shopify.com/s/files/1/2172/7915/files/Carola-Guzman_Destacado_1600x.jpg?v=1581023924)",
                    "background-position": "center center",
                    "background-repeat": "no-repeat",
                    "background-size": "cover"}}>

                </div>
                <div className="col-6">
                    <h5>Dale personalidad a tu cartera</h5>
                    <p>Arma tu combinación de cartera + strap</p>
                    <Link to="/productos">
                        <a href="#" className="btn btn-primary mt-3">VER PRODUCTOS</a>
                    </Link>
                </div>
            </div>
        </div>
         
  )
}

export default Banner1;  