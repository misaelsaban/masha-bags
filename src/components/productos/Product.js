import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import NavBarMenu from '../menu/NavBarMenu';
import Counter from './Counter'
import { CartContext } from '../../context/cartContext';
import FooterMenu from '../menu/FooterMenu';
import {getFirestore} from '../../firebase';
import Loading from '../general/Loading';
import Page404 from '../general/Page404';




function Product() {
  const { idProduct } = useParams();
  const [cantidad, setCount] = useState(1);

  const {carrito, cantCarrito} = useContext(CartContext);
  const [cart,setCart] = carrito;
  const [cant,setCant] = cantCarrito;

  const stylesProduct = {    
    "width": "70%",
    "display": "block",
    "margin": "0 auto"
  }


  // Funcion Add To Cart
  const AddtoCart = () => {
    let act = true;
    let canti = 0;
    if(cart.length !== 0){
      
      for (let i = 0; i < cart.length; i++) {
        if(cart[i].id == data.id){
            act = false;
            cart[i].cantidad = cart[i].cantidad + cantidad;
            console.log('solo actualiza cantidad');          
        }
        // Sumamos las cantidades
        canti = canti + cart[i].cantidad;
      }
      // no actualiza prod, insertamos nuevo
      if(act){
        data["cantidad"] = cantidad;
        cart.push(data);
        console.log('nuevo prod al carrito act');
        canti = canti + cantidad;
      }

            
    } else {
      data["cantidad"] = cantidad;
      cart.push(data);
      console.log('nuevo prod al carrito 1er');
      canti = canti + cantidad;
    }

    setCant(canti);
  }

  // Funcion que tra la cantidad
  const traeCantidad= (c) => {
    const cantidad  = c;
    //console.log(cantidad);
    setCount(count => cantidad)
  }

  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page404, setPage404] = useState(false);

  useEffect(() => {
      setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("productos");
        const item = itemCollection.doc(idProduct);
        //console.log(idProduct);
        item.get().then((doc)=>{
            if(!doc.exists){
                console.log('no existe el producto.');
                setPage404(true);
                return;
            }
            setData({id: doc.id,...doc.data()});
        }).catch((error) =>{
            console.log("Error en la busqueda", error);
        }).finally(() => {
            setLoading(false);
        });

  }, [])

  useEffect(()=>{
    console.log(data);
  }, [data])

 
  useEffect(()=>{
    console.log(cart);
  },[cart]);

return (
    <>
    <NavBarMenu/>
    <div className="container">
    { loading
    ? <Loading/>
    : <div className="row mt-5">
        { page404
        ? <Page404/>
        : <><div className="col-8">
            <img className="card-img-top" src={data.imagen} alt="img" style={stylesProduct}/>
          </div>
          <div className="col-4">
            <h2 className="card-title">{data.nombre}</h2>
            <h1>$ {data.precio}</h1>
            <Counter callback={traeCantidad}/>
            <a href="#" className="btn btn-primary mt-3 d-block" onClick={AddtoCart}>AGREGAR AL CARRITO</a>
          </div>
          <div className="col-12">
            <h2 className="section-title">Descripción</h2>
            <p>{data.descripcion}</p>
            <h2 className="section-title">MEDIDAS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus in turpis at facilisis.
              Pellentesque sodales ut ante eu mollis. Maecenas laoreet efficitur facilisis. In vehicula justo eget cursus blandit.</p>
          </div>
          </>
        }      
        
      </div> }    
    </div>
    <FooterMenu/>
    </>
  );
}

export default Product;