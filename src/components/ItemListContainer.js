
import React, { useEffect, useState } from 'react';
import { productosGet, detalleProductoGet } from "../mocks/api";
import ItemList from '../components/ItemList';
import { useParams } from "react-router-dom";


function ItemListContainer({ saludo }) {

 const { id } = useParams();


 const [listaProductos, setListaProductos] = useState([]);

 useEffect(() => {
   if (id == null) {
     productosGet()
       .then((resp) => {
         setListaProductos(resp);
       })
       .catch((error) => console.error(error));
   } else {
     detalleProductoGet(id)
       .then((resp) => {
         setListaProductos(resp);
       })
       .catch((error) => console.error(error));
   }
 }, [id]);

 console.log({ listaProductos });
  return (
    <div className="text-center">
      <h1> {saludo}</h1>
      {/* {mensaje && <p>{mensaje} </p>}
            {loading ? <p>Cargando....</p> : <ItemList listaProductos={listaProductos}/>} */}

      {/* <ItemCount stock={10} initial = {1} onAdd ={onAdd}/>*/}

      <ItemList listaProductos={listaProductos} />
    </div>
  );
}

export default ItemListContainer