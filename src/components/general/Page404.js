import React from 'react';
import {Link} from 'react-router-dom';

function Page404() {
  //console.log(props);
  return (
    <div className="container mt-5 text-center">
       <h1>PÁGINA NO ENCONTRADA</h1>
       <p>Lo sentimos, pero la página solicitada no existe. Pero puedes seguir viendo más productos.</p>
      <Link to="/productos">
          <a href="#" className="btn btn-primary mt-3">VER PRODUCTOS</a>
      </Link>
    </div>
  )
}

export default Page404;  