import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';
import CardProductoCarrousel from './CardProductoCarrousel';
import {getFirestore} from '../../firebase';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Loading from "../general/Loading";


import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

export default function Ofertas(){
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("productos");
        itemCollection.get().then((query)=>{
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
       // console.log(data);
    }, [data])

    const params = {
        spaceBetween: 30,
        slidesPerView:3,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }


    return <div className="container">
            <h2 className="section-title">Nuestras Ofertas</h2>
            { loading 
            ? <Loading/>
            : <Swiper {...params}
            >
            {data.map(item => <SwiperSlide><CardProductoCarrousel data={item}></CardProductoCarrousel></SwiperSlide>)}
            </Swiper> }
            <div><span className="swiper-button-next"></span></div>
            <div><span className="swiper-button-prev"></span></div>
        </div>
}





