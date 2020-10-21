import React, { useContext,useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/cartContext'


export default function ListaProductosEnCarrito(props){
    
    const {carrito, cantCarrito, preTotal} = useContext(CartContext);
    const [cart,setCart] = carrito;
    const [cant,setCant] = cantCarrito;
    const [pTotal, setPTotal] = preTotal;

    const [itemsTotal, setItemsTotal] = useState(0);
    const [precioTotal, setprecioTotal] = useState(0);

    useEffect(() => {
        let it = 0;
        let pr = 0;
        for (let i = 0; i < cart.length; i++) {
            it = it + cart[i].cantidad;
            pr = pr + (cart[i].cantidad * cart[i].precio)
        }
        setItemsTotal(it);
        setprecioTotal(pr);
        setPTotal(pr);
    },[cart]);

    function calcula(){
        let it = 0;
        let pr = 0;
        for (let i = 0; i < cart.length; i++) {
            it = it + cart[i].cantidad;
            pr = pr + (cart[i].cantidad * cart[i].precio)
        }
        setItemsTotal(it);
        setprecioTotal(pr);
    }

    function eliminaProducto(id){
        console.log(id);
        for (let i = 0; i < cart.length; i++) {
            if(cart[i].id == id){
                setCant(cant - cart[i].cantidad)
                cart.splice(i,1);
               }
          }
        console.log(cart);
        calcula();
    }

    useEffect(()=>{
        console.log(cart);
      },[cart]);
   
    
return <div className="row mt-5">
        <h4>Tiene {itemsTotal} productos.</h4>
        <div className="col-12">
            
            <ul class="list-group">
                {
                cart.map(item => <div key={item.id} className="itemCarritoList">
                    <div className="row">
                        <div className="col-2">
                            <img src={item.imagen} className="img-fluid" />
                        </div>
                        <div className="col-4">
                        <p className="carrito-title">{item.nombre}</p>
                        <p>SKU: {item.id}</p>
                        <div>
                            {!props.checkout
                            ? <><a href="#" className="btn btn-primary mt-3 d-block" onClick={() => eliminaProducto(item.id)}>Eliminar producto</a></>
                            : <></>
                            }
                            

                        </div>
                        </div>
                        <div className="col-2 text-center">
                            <p>Cantidad: {item.cantidad} </p>
                        </div>
                        <div className="col-4 text-right font-weight-bold">
                            <p>Precio unitario: $ {item.precio}</p>
                            <p>Precio: $ {item.precio * item.cantidad}</p>
                        </div>
                    </div>
                </div>)
                }    
            </ul>
            
        </div>
        
        <div className="col-12">
        <hr></hr>    
        </div>
        <div className="col-8">
            
        </div>
        <div className="col-4 text-right font-weight-bold">
            
            { !props.checkout
            ? <>
            <p style={{"font-size": "2em"}}>Total: $ {precioTotal}</p>
            <Link to={'/checkout/'}>
                    <a href="#" className="btn btn-primary mt-3 d-block">PROCEDER A LA COMPRA</a>
                </Link>
                <Link to={'/productos/'}>
                    <a href="#" className="btn btn-secondary mt-3 d-block">CONTINUAR COMPRANDO</a>
                </Link>
            </>
            : <><p style={{"font-size": "1.5em"}}>Total: $ {precioTotal}</p></>
            }
        </div>
    </div>

       
    

}





