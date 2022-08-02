
import React, { useEffect, useState } from 'react';
import { productosGet } from '../mocks/api';
import ItemList from '../components/ItemList'


function ItemListContainer({ saludo }) {

  const [listaProductos, setlistaProductos] = useState({});

  useEffect(() => {
    productosGet()
      .then((resp) => {
        setlistaProductos(resp);
      })
      .catch((error) => console.error(error));
  }, []);

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