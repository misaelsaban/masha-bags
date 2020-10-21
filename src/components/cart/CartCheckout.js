import React, { useContext, useState } from 'react';
import NavbarMenu from '../menu/NavBarMenu';
import ListaProductosEnCarrito from './ListaProductosEnCarrito';
import FormCheckout from '../forms/FormCheckout';
import FooterMenu from '../menu/FooterMenu';
import {CartContext} from '../../context/cartContext'
import Loading from '../general/Loading';
import {Link} from 'react-router-dom';


import {getFirestore} from '../../firebase';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const CartCheckout = () => {
  
  const {carrito, cantCarrito, preTotal} = useContext(CartContext);
  const [cart,setCart] = carrito;
  const [cant,setCant] = cantCarrito;
  const [pTotal, setPTotal] = preTotal;


  const [orderId, setOrderId] = useState(false);
  const [loading, setLoading] = useState(false);


  const createOrder = (buyer) => {
    setLoading(true);
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer: buyer, 
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      state: 'Generate',
      total: pTotal
    }
    // Creamos la nueva orden
    orders.add(newOrder).then(({id}) => {
      setOrderId(id);
      // Destruimons el carrrito
      setCart([]);
      setCant(0);
    }).catch( err => {
      //setError(err);
      console.log(err);
    }).finally(()=>{
      setLoading(false);
    })

  }

  return (
    <div>
      <NavbarMenu/>
      <div className="container">
      {loading
      ? <Loading tamanio={true}/>
      : <>
          {orderId
          ? <div className="text-center mt-5">
              <h1 className="mt-3">¡Muchas gracias por tu pedido!</h1>
              <h4 className="mt-2">Su id de orden es {orderId}</h4>

            </div>
          : <>
              <h1 className="mt-3 text-center">Checkout</h1> 
              <div className="row">
                  <div className="col-8">
                      <ListaProductosEnCarrito checkout={true}/>
                  </div>
                  <div className="col-4">
                      <FormCheckout createOrder={createOrder}/>
                  </div>
              </div>
            </>
          }
        </>
      }
      </div>
      <FooterMenu/>
    </div>

  )


}

export default CartCheckout;