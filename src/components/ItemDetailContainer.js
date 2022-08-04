import React from 'react';
import ItemDetail  from './ItemDetail';

import {useState, useEffect} from 'react';
import { detalleProductoGet } from "../mocks/api";
import { useParams } from "react-router-dom";



export const ItemDetailContainer = () => {

  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    detalleProductoGet(id)
      .then((resp) => {
        setData(
          resp.filter((producto) => parseInt(producto.id) == parseInt(id))[0]
        );
      })
      .catch((error) => console.error(error));
  }, [id]);


  

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}
export default ItemDetailContainer;