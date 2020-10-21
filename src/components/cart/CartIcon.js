import React, { useContext } from 'react';
import {CartContext} from '../../context/cartContext'


const CartIcon = () => {
    const {carrito, cantCarrito} = useContext(CartContext);
    const [cart,setCart] = carrito;
    const [cant,setCant] = cantCarrito;
    
          
        return (
            <div className="carrito">
                <a href="cart" style={{color: "black"}}>
                    <span><i className="fas fa-shopping-cart"></i><span className="badge badge-success badge-masha">{cant}</span></span>
                </a>
            </div>
        )
  };

export default CartIcon;


