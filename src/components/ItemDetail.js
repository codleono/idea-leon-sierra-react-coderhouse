import React from 'react'
import ItemCount from './ItemCount';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ItemDetail = ({data}) => {
  const {title, description, price, pictureUrl, stock } = data;
  // cantidad del carrito
  const onAdd = (cantidad) => {
    setMensaje(`agregaste ${cantidad} Items en el carrito`);
  };
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
            <strong>Stock: </strong>{stock}
          </p>
          <p className="card-text">
            <strong>Cantidad:</strong>
          </p>
        </div>
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      </Col>
    </Row>
  );
}

export default ItemDetail;
