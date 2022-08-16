import React, {useContext} from 'react';
import {CartContext} from "./context/cartContext";
import {useNavigate} from "react-router-dom";


 const Carrito = () => {

     const navigate = useNavigate()
     const {cart, precioTotal, removeItem, cantidadTotalDeProductosCarrito} = useContext(CartContext)
    return (
        <>{
            cantidadTotalDeProductosCarrito() > 0 ? (
                <div className="container mt-3">
                    <h2>Productos selecionados: </h2>
                    <p>Productos :</p>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Nombre Producto</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th className="text-end">Sub total</th>
                            <th className="text-center">Aciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cart.map(elemt=>(
                                <tr key={elemt.id}>
                                    <td>{elemt.title}</td>
                                    <td>{elemt.cantidad}</td>
                                    <td>{elemt.price}</td>
                                    <td className="text-end">{elemt.price * elemt.cantidad}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=> removeItem(elemt.id)}><i className="fa bi-trash-fill"></i></button>
                                    </td>
                                </tr>
                            ))


                        }
                        <tr>
                            <td>Total</td>
                            <td colSpan="3" className="text-end">{precioTotal()}</td>
                        </tr>

                        </tbody>

                    </table>
                </div>
            ) : (
                <div>
                    <h1>no hay nada.... </h1>

                    <button className="btn btn-danger" onClick={()=> navigate("/")}> Seguir comprando Banda</button>
                </div>

            )
        }

        </>
    )
}
export default Carrito;
