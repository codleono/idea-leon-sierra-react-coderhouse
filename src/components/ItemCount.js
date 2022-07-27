import React, { useState } from "react";

const ItemCount = ({stock, initial, onAdd}) =>{
    const [count, setCount] = useState(initial);

    const addCount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
     const restCount = () => {
         if (count > initial ) {
             setCount(count -1);
         }
     };
     return(
         <div className="text-center">
             <div className="row container-fluid">
                <div className="col col-4"> </div>

                 <div className="col col-1">
                    <button className="btn btn-outline-success" onClick={restCount}> - </button>
                 </div>
                 <div className="col col-2">
                    <p> {count} </p>
                 </div>
                 <div className="col col-1">
                    <button className="btn btn-outline-success"  onClick={addCount}> + </button>
                 </div> 
                 <div className="col col-4"> </div>   
             </div>
             <br/>
             <br/>
             <div>
                 <button className="btn btn-outline-primary"  color="success" onClick={()=>onAdd(count)}> Comprar </button>
             </div>
         </div>
     )

}
 export default ItemCount