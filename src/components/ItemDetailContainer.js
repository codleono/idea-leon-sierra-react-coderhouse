import React from 'react';
import ItemDetail  from './ItemDetail';

import {useState, useEffect} from 'react';
import { detalleProductoGet } from "../mocks/api";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";



export const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    //Le decimos nuestra base de datos y en que colección esta
    const collecionProductos = collection(db, "productos");
    //La referencia de que tiene que traer (id)
    const referenciaDoc = doc(collecionProductos, id);
    //Traemos un solo documento
    getDoc(referenciaDoc)
      .then((result) => {
        setData({
          id: result.id,
          ...result.data(),
        });
      })
      .catch((error) => {
        console.log({ error });
      })
      
  }, [id]);


  

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}
export default ItemDetailContainer;