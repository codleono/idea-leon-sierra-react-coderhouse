
import React, { useEffect, useState } from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

function ItemListContainer({greeting}) {
    // GUARDAR MI useEffect
    const[listaProductos, setListaProductos] = useState([])

    // mostrar mensaje
    const[mensaje, setMensaje] = useState(false)

    //finalizar 
    const[loading, setLoading] = useState(true)

    // cantidad del carrito
    const onAdd = (cantidad) => {
        setMensaje(`agregaste ${cantidad} Items en el carrito`)
    }

    // productos
    const productos =[
        {id:'1', title:'POLERÓN', description:"POLERÓN MERRELL PARA HOMBRE JMS26534-353 AZUL", price:'50', pictureUrl:'https://home.ripley.com.pe/Attachment/WOP_5/2020290818909/2020290818909_2.jpg'},
        {id:'2', title:'POLERÓN ', description:"POLERÓN MERRELL PARA HOMBRE JMS26337-320 VERDE", price:'100', pictureUrl:'https://home.ripley.com.pe/Attachment/WOP_5/2020290818657/2020290818657_2.jpg'},
        {id:'3', title:'PANTALÓN', description:"PANTALÓN ESSENTIALS PLAIN TAPERED STANFORD", price:'150', pictureUrl:'https://cdn.shopify.com/s/files/1/0881/3798/products/50019-ROMBOS-LEGGINS-FTE_1024x1024.jpg?v=1567917788'},
        {id:'4', title:'BUZO CONJUNTO', description:"BUZO CONJUNTO HOMBRE ADIDAS ESSENTIALS 3 TIRAS PRIMEGREEN", price:'200', pictureUrl:'https://home.ripley.com.pe/Attachment/WOP_5/2020263249099/2020263249099-1.jpg'},
        {id:'5', title:'CASACA', description:"CASACA NIKE PARA HOMBRE DM6593-010 NEGRO", price:'550', pictureUrl:'https://home.ripley.com.pe/Attachment/WOP_5/2020291554165/2020291554165_2.jpg'},
        {id:'6', title:'BUZO CONJUNTO', description:"BUZO CONJUNTO PARA HOMBRE REEBOK TRAINING ESSENTIALS TRACKSUIT HF1727", price:'50', pictureUrl:'https://home.ripley.com.pe/Attachment/WOP_5/2020273708142/2020273708142_2.jpg'},
        {id:'7', title:'BUZO CONJUNTO ', description:"BUZO CONJUNTO HOMBRE REEBOK DE POLIALGODÓN WORKOUT READY", price:'100', pictureUrl:'https://home.ripley.com.pe/Attachment/WOP_5/2020285915095/2020285915095_2.jpg'},
        {id:'8', title:'POLERA', description:"POLERA PARA HOMBRE REEBOK 100% ALGODÓN IDENTITY H54477", price:'150', pictureUrl:'https://home.ripley.com.pe/Attachment/WOP_5/2020285889198/2020285889198_2.jpg'},
        {id:'9', title:'POLERA', description:"POLERA PARA HOMBRE REEBOK 100% ALGODÓN IDENTITY H54481", price:'200', pictureUrl:'https://home.ripley.com.pe/Attachment/WOP_5/2020285889297/2020285889297_2.jpg'},
    
    ]

    // promesa DATA
    const data = new Promise ((resolve, reject) =>{
        // acciones
        let condition = true
        setTimeout(()=> {
            if (condition) {
                resolve(productos)                
            }else {
                reject('No hay Stock del Producto')
            }

        },2000)
    })

    console.log ('me monte')

    //tratar una promesa =>useEffect = trabaja debajo cuando trabaja el componete
    useEffect(()=>{
        console.log('soy el useEffect')
        data
        .then((res)=>setListaProductos(res))
        .catch(()=> setMensaje('hubo un error'))
        .finally(()=> setLoading(false))

    }, [])

    return (
        <div className='text-center'>
            <h1> {greeting}</h1>
            {mensaje && <p>{mensaje} </p>}
            {loading ? <p>Cargando....</p> : <ItemList listaProductos={listaProductos}/>}
            
           {/* <ItemCount stock={10} initial = {1} onAdd ={onAdd}/>*/}
        </div>
    );
}

export default ItemListContainer