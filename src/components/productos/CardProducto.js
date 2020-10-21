import React from "react";
import {Link} from 'react-router-dom';

class CardProducto extends React.Component{
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.traeContador = this.traeContador.bind(this);
    }

    traeContador(count){
        if(0 <= count){
            this.setState({ count: count});
        }
        if(count < 10){
            this.setState({ count: count});
        }

    }


    render() {
        return (
            <div className="col-3">
            <Link to={'/product/' + this.props.data.id} >
                <div className="card cardShadow" style={{"width": "18rem"}}>
                    <img className="card-img-top" src={this.props.data.imagen} alt="img"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.nombre}</h5>
                        <p className="textProductDescription">{this.props.data.descripcion.substring(0, 60)+'...'}</p>
                        <p className="precio">$ {this.props.data.precio}</p>
                        <a href="#" className="btn btn-primary mt-3 d-block">VER MÁS</a>
                    </div>
                </div>
            </Link>
            </div>
        )}
  };

export default CardProducto;