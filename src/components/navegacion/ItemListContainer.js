
import React from 'react';


function ItemListContainer({ greeting }) {
    return (
        <div className='text-center'>
            <p>
               <h1> {greeting}</h1>
            </p>
        </div>
    );
}

export default ItemListContainer;