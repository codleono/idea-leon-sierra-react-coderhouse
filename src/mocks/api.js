export const productosGet = async () => {
  const resp = await fetch("http://localhost:3030/productos");
  return resp.json();
};

export const detalleProductoGet = async (id) => {
  const resp = await fetch(`http://localhost:3030/productos?id=${id}`);
  const data = resp.json();
  return data;
};



export const getCategoria = async () => {
  const resp = await fetch("http://localhost:3030/categorias");
  return resp.json();
};

// export const getProductoCategoria = async (id) => {
//   const resp = await fetch(
//     `http://localhost:3030/productos?categoria_id=${id}`
//   );
//   const data = await resp.json();
//   return data;
// };




