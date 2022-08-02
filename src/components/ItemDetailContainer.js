import React from 'react';
import ItemDetail  from './ItemDetail';
import ItemCount from './ItemCount';
import {useState, useEffect} from 'react';
import { detalleProductoGet } from "../mocks/api";



export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  

  useEffect(() => {
    detalleProductoGet()
      .then((resp) => {
        setData(resp[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  );
}
export default ItemDetailContainer;