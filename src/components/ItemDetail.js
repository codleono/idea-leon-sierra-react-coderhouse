import ItemCount from './ItemCount';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ItemDetail = ({data}) => {
  const {title, description, price, pictureUrl, stock } = data;
  const [count, setCount] = useState(0);
  const [compra, setCompra] = useState(false);


  // cantidad del carrito
  const onAdd = () => {
    setCompra(true);  
    
  };
  const navigate = useNavigate()
  return (
    <Row>
      <Col col-4>
        <img
          src={pictureUrl}
          className="card-img-top"
          alt={title}
          style={{ width: "30rem", margin: " .5rem", padding: ".10rem" }}
        />
      </Col>
      <Col col-8>
        <div
          className="card-body"
          style={{ width: "20rem", margin: " .5rem", padding: ".40rem" }}
        >
          <p className="">
            <strong>{title}</strong>
          </p>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <strong>Precio: </strong>$ {price}
          </p>
          <p className="card-text">
            <strong>Stock: </strong>
            {stock}
          </p>
          <p className="card-text">
            <strong>Cantidad:</strong>
          </p>
        </div>
        {compra ? (
          <button onClick={() => navigate("/carrito")}>Ir a carrito</button>
        ) : (
          <ItemCount
            stock={10}
            initial={1}
            onAdd={onAdd}
            count={count}
            setCount={setCount}
          />
        )}
      </Col>
    </Row>
  );
}

export default ItemDetail;