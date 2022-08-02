// productos
const productos = [
  {
    id: "1",
    title: "POLERÓN",
    description: "POLERÓN MERRELL PARA HOMBRE JMS26534-353 AZUL",
    price: "50",
    pictureUrl:
      "https://home.ripley.com.pe/Attachment/WOP_5/2020290818909/2020290818909_2.jpg",
    stock: 10,
  },
  {
    id: "2",
    title: "POLERÓN ",
    description: "POLERÓN MERRELL PARA HOMBRE JMS26337-320 VERDE",
    price: "100",
    pictureUrl:
      "https://home.ripley.com.pe/Attachment/WOP_5/2020290818657/2020290818657_2.jpg",
    stock: 10,
  },
  {
    id: "3",
    title: "PANTALÓN",
    description: "PANTALÓN ESSENTIALS PLAIN TAPERED STANFORD",
    price: "150",
    pictureUrl:
      "https://cdn.shopify.com/s/files/1/0881/3798/products/50019-ROMBOS-LEGGINS-FTE_1024x1024.jpg?v=1567917788",
    stock: 10,
  },
  {
    id: "4",
    title: "BUZO CONJUNTO",
    description: "BUZO CONJUNTO HOMBRE ADIDAS ESSENTIALS 3 TIRAS PRIMEGREEN",
    price: "200",
    pictureUrl:
      "https://home.ripley.com.pe/Attachment/WOP_5/2020263249099/2020263249099-1.jpg",
    stock: 10,
  },
  {
    id: "5",
    title: "CASACA",
    description: "CASACA NIKE PARA HOMBRE DM6593-010 NEGRO",
    price: "550",
    pictureUrl:
      "https://home.ripley.com.pe/Attachment/WOP_5/2020291554165/2020291554165_2.jpg",
    stock: 10,
  },
  {
    id: "6",
    title: "BUZO CONJUNTO",
    description:
      "BUZO CONJUNTO PARA HOMBRE REEBOK TRAINING ESSENTIALS TRACKSUIT HF1727",
    price: "50",
    pictureUrl:
      "https://home.ripley.com.pe/Attachment/WOP_5/2020273708142/2020273708142_2.jpg",
    stock: 10,
  },
  {
    id: "7",
    title: "BUZO CONJUNTO ",
    description: "BUZO CONJUNTO HOMBRE REEBOK DE POLIALGODÓN WORKOUT READY",
    price: "100",
    pictureUrl:
      "https://home.ripley.com.pe/Attachment/WOP_5/2020285915095/2020285915095_2.jpg",
    stock: 10,
  },
  {
    id: "8",
    title: "POLERA",
    description: "POLERA PARA HOMBRE REEBOK 100% ALGODÓN IDENTITY H54477",
    price: "150",
    pictureUrl:
      "https://home.ripley.com.pe/Attachment/WOP_5/2020285889198/2020285889198_2.jpg",
    stock: 10,
  },
  {
    id: "9",
    title: "POLERA",
    description: "POLERA PARA HOMBRE REEBOK 100% ALGODÓN IDENTITY H54481",
    price: "200",
    pictureUrl:
      "https://home.ripley.com.pe/Attachment/WOP_5/2020285889297/2020285889297_2.jpg",
    stock: 10,
  },
];

// promesa DATA
export const data = new Promise((resolve, reject) => {
  // acciones
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(productos);
    } else {
      reject("No hay Stock del Producto");
    }
  }, 2000);
});
