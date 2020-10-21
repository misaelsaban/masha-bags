
import React, {useContext} from 'react';
//import logo from './logo.svg';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import './App.css';
import NavBarMenu from './components/menu/NavBarMenu';
import SlidersHome from './components/general/Sliders-Home';
import Ofertas from './components/productos/Ofertas';
import Cart from './components/cart/Cart';
import CartCheckout from './components/cart/CartCheckout';
import Product from './components/productos/Product';
import Catalogo from './components/productos/Catalogo';
import CatalogoPorCategoria from './components/productos/CatalogoPorCategoria';
import Banner1 from './components/general/Banner1';
import Newsletter from './components/forms/Newsletter';

import FooterMenu from './components/menu/FooterMenu';
import {CartProvider} from './context/cartContext';

function App() {
  const cartContext = React.createContext();
  return (
      <BrowserRouter>
        <Switch>
          <CartProvider>
            <Route exact path="/">
              <NavBarMenu/>
              <SlidersHome/>
              <Ofertas/>
              <Banner1/>
              <Newsletter/>
              <FooterMenu/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/product/:idProduct">
              <Product/>
            </Route>
            <Route path="/productos/">
              <Catalogo/>
            </Route>
            <Route path="/categories/:idCate">
              <CatalogoPorCategoria/>
            </Route>
            <Route path="/checkout/">
              <CartCheckout/>
            </Route>
          </CartProvider>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
