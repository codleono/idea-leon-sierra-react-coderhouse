
import React, { useEffect, useState } from 'react';
import { productosGet, detalleProductoGet } from "../mocks/api";
import ItemList from '../components/ItemList';
import { useParams } from "react-router-dom";
import { db } from "../firebase/Firebase";
import { query, where, collection, getDocs } from "firebase/firestore";


function ItemListContainer({ saludo }) {

 const { id } = useParams();


 const [listaProductos, setListaProductos] = useState([]);

 useEffect(() => {
   //Evaluo si existe la categoria o no
   const q = id
     ? query(collection(db, "productos"), where("categoria_id", "==", id))
     : collection(db, "productos");
   //Hago el pedido a firebase
   getDocs(q)
     .then((result) => {
       console.log({ result });
       const lista = result.docs.map((product) => {
         return {
           id: product.id,
           ...product.data(),
         };
       });
       console.log({ lista });
       setListaProductos(lista);
     })
     .catch((error) => console.log(error))
     
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