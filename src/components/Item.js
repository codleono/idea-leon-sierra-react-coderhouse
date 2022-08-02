import React from 'react'




const Item = ({producto}) => {
    const{id,
    title,
    description,
    price,
    pictureUrl,
    stock }
    = producto;
  return (
    <div className="card" style={{ width: "20rem", margin: ".5rem" }}>
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <p className="card-text">{title}</p>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <p className="card-text">stock: {stock}</p>
      
           <button className="btn btn-primary">Ver mas</button> 
        
        
      </div>
    </div>
  );
}

export default Item