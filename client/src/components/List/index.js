import React from 'react';
import './list.css'

export default function List (products) {
    //var {productName } = products;
    //console.log(productName)
    if(!products.list.length) {
        console.log('no products')
        return (
            <div> No items selected for this family. </div>
        )
    }
    return (
        <div>
            <ul>
                {products.list.map((item) => (
                    <ol key={item.productName}><h5>{item.productName}</h5></ol>
                ))}
            </ul>
        </div> 
    )
}