import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import NavBarMenu from '../menu/NavBarMenu';
import Counter from './Counter'
import { CartContext } from '../../context/cartContext';
import FooterMenu from '../menu/FooterMenu';
import {getFirestore} from '../../firebase';
import Loading from '../general/Loading';
import Page404 from '../general/Page404';
import ListaProductosEnCarrito from '../cart/ListaProductosEnCarrito';
import {Link} from 'react-router-dom';



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
        if(cart[i].id === data.id){
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
    setShowModal(true);
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
  const [showModal,setShowModal] = useState(false);

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


  const showHideClassName = showModal ? {"display": "block","background-color": "#00000047"} : {"display": "none"};

  const handleClose = () => {
    setShowModal(false);
  }

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
            <h1 className="mt-3">$ {data.precio}</h1>
            <h5 className="mt-3 mb-3">SKU: {data.id}</h5>
            <Counter callback={traeCantidad}/>
            <a href="#" className="btn btn-primary mt-3 d-block" onClick={AddtoCart}>AGREGAR AL CARRITO</a>
          </div>
          <div className="col-12">
            <h2 className="section-title">Descripción</h2>
            <p>{data.descripcion}</p>
            <h2 className="section-title">MEDIDAS</h2>
            <p>{data.medidas}</p>
          </div>
          </>
        }
      </div> }
      <div className="modal bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" style={showHideClassName}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Carrito de Compras</h5>
              <button type="button" className="close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body pl-5 pr-5">
            { cart.length === 0
            ? <div className="text-center mt-5">Su carrito no tiene productos, puede comprar haciendo <Link to={'/productos'}><a className="link" href="#">CLIC AQUÍ.</a></Link></div>
            : showModal
              ?<ListaProductosEnCarrito margin={true} modal={true}/>
              : <></>
            }
              
            </div>
          </div>
        </div>
      </div>

    </div>
    <FooterMenu/>
    </>
  );
}

export default Product;