import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import Loading from '../general/Loading';

import {getFirestore} from '../../firebase';

export default function CategoriasMenu(){
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("categorias");
        const categorias = itemCollection.where('show-menu', '==' , true );
        categorias.get().then((query)=>{
            if(query.size === 0){
                console.log('no hay resultados');
            }
            setData(query.docs.map(doc => {return {...doc.data(), id: doc.id} }));
        }).catch((error) =>{
            console.log("Error en la busqueda", error);
        }).finally(() => {
            setLoading(false);
        });
    }, [])

    useEffect(()=>{
        //console.log(data);
    }, [data])


    
        return <div className="menuCategorias">
                    { loading
                    ? <Loading/>
                    : <ul clasName="ul-categorias"> 
                        {data.map(item => <li key={item.id}><Link to={'/categories/'+item.slug}>{item.nombre}</Link></li>)}
                    </ul>
                    }
                </div>
    

}





