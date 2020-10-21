import React from "react";
import {Link} from 'react-router-dom';

import LogoFooter from '../../img/logo-masha-vertical-negativo.svg';

function FooterMenu() {
    return <div><footer className="page-footer font-small pt-5 mt-5">
            <div className="container text-center text-md-left pb-5">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <img src={LogoFooter} className="d-block" style={{"width" : "20%"}} alt="image01"/>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"/>
                    <div className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">MENÚ</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to={'/'}>
                                    <a href="http://misa.com">HOME</a>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/productos'}>
                                    <a href="http://misa.com">CATÁLOGO</a>
                                </Link>
                            </li>
                            <li>
                                <a href="http://misa.com">OFERTAS</a>
                            </li>
                            <li>
                                <a href="http://misa.com">VERANO 2020</a>
                            </li>
                            <li>
                                <a href="http://misa.com">OUTLET</a>
                            </li>
                        </ul>
                    </div>
                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">SÍGUENOS</h5>
                    <ul className="list-unstyled">
                        <li>
                            <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i> @masha.bags.ar</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i> Masha Bags</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i> Masha Bags</a>
                        </li>
                    </ul>
                </div>            
                </div>
            </div>
            <div className="footer-copyright text-center py-3 ">
                © 2020 Copyright <a href="http://misaelsaban.com.ar/"> Misael Sabán</a>
            </div>
            </footer>
        </div>
  };
  

  export default FooterMenu;


