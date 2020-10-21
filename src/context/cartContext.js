import React, {useState} from 'react';


export const CartContext = React.createContext([]);
export const CartProvider = (props) => {
    
    const [cart, setCart] = useState([]);
    const [cant, setCant] = useState(0);
    const [pTotal, setPTotal] = useState(0);

    return (
        <CartContext.Provider value={{carrito: [cart, setCart], cantCarrito: [cant,setCant], preTotal :  [pTotal, setPTotal]}}>
            {props.children}
        </CartContext.Provider>
    )
}