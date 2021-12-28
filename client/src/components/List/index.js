import React from 'react';

export default function List () {
    const { items } = family.products
    return (
        <div>
            {items ? (
                <div> No items selected for this family. </div>
            ) : (
                <div>
                    <ul>
                        {items.map((item) => (
                            <li>{item.productName}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>  
    )
}