import React from 'react'
import Item from './Item'

const ItemList = ({listaProductos}) => {
  return (
    <div style={{display:'flex', justifyContent: 'space-between', alignItems:'center', flexWrap:'wrap'}}>

      {listaProductos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
      {/* {listaProductos.map((producto) => <p key={producto.id}>{producto.pictureUrl}{' '}{producto.title}{' '}{producto.description}</p>)} */}
    </div>
  )
}

export default ItemList