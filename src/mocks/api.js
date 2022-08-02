export const productosGet = async () => {
  const resp = await fetch("http://localhost:3030/productos");
  return resp.json();
};

export const detalleProductoGet = async () => {
  const resp = await fetch(`http://localhost:3030/productos?id=1`);
  const data = resp.json();
  return data;
};
