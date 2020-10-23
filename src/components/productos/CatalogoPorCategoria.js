import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import CardProducto from './CardProducto';
import NavbarMenu from '../menu/NavBarMenu';
import FooterMenu from '../menu/FooterMenu';
import Loading from '../general/Loading';
import {getFirestore} from '../../firebase';


export default function CatalogoPorCategoria(){
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const {idCate} = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("productos");
        const prodsPorCate = itemCollection.where('categoria','array-contains', idCate );
        prodsPorCate.get().then((query)=>{
            if(query.size === 0){
                console.log('no hay resultados');
            }
            setData(query.docs.map(doc => {return {...doc.data(), id: doc.id} }));
        }).catch((error) =>{
            console.log("Error en la busqueda", error);
        }).finally(() => {
            setLoading(false);
        });
    }, [idCate])

    useEffect(()=>{
        console.log(data);
    }, [data])


    
        return <div>
                <div><NavbarMenu/>
                    <div className="container mt-5">
                        <h2>Todos los productos con la categoria "{idCate}"</h2>
                        <p>{data.length} productos.</p>
                        <div className="row">
                            { loading
                            ? <Loading/>
                            :   data.map(item => <CardProducto data={item}></CardProducto>)}
                        </div>
                    </div>
                </div>
                <FooterMenu/>
               </div>
    

}





