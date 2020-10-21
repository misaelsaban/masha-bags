import React, { useContext } from 'react';
import NavbarMenu from '../menu/NavBarMenu';
import ListaProductosEnCarrito from './ListaProductosEnCarrito';
import FooterMenu from '../menu/FooterMenu';
import {CartContext} from '../../context/cartContext'
import {Link} from 'react-router-dom';

const Cart = () => {
  const {carrito, cantCarrito} = useContext(CartContext);
  const [cart,setCart] = carrito;
  const [cant,setCant] = cantCarrito;

  return (
    <div>
      <NavbarMenu/>
      <div className="container">
        <h1 className="mt-3 text-center">Carrito de Compras</h1>
        { cart.length === 0
        ? <div className="text-center mt-5">Su carrito no tiene productos, puede comprar haciendo <Link to={'/productos'}><a className="link" href="#">CLIC AQUÍ.</a></Link></div>
        : <ListaProductosEnCarrito data={cart}/>
        }
      </div>
      <FooterMenu/>
    </div>

  )


}

export default Cart;