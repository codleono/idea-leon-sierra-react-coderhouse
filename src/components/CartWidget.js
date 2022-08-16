
import React, {useContext} from 'react';
import { BsCart3 } from "react-icons/bs";
import {CartContext} from "./context/cartContext";
import {Link} from "react-router-dom";


function CartWidget() {

    const {cantidadTotalDeProductosCarrito} = useContext(CartContext)
    return (

        <>
            {
                cantidadTotalDeProductosCarrito() > 0 ? (
                    <Link to="/carrito">
                        <BsCart3 /> {cantidadTotalDeProductosCarrito()}
                    </Link>
                ): ""
            }

        </>

    );
    
}

export default CartWidget;