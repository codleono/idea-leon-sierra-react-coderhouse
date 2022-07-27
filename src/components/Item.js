import React from 'react'



const Item = ({producto}) => {
  return (
    <div className="card" style={{width: '20rem', margin:'.5rem'}}>
    <img src={producto.pictureUrl} className="card-img-top" alt={producto.title}/>
        <div className="card-body">
        <p className="card-text">{producto.title}</p>
        <p className="card-text">{producto.description}</p>
        <p className="card-text">${producto.price}</p>
        <button  className="btn btn-primary">Ver mas</button>
        </div>
    </div>

  )
}

export default Item