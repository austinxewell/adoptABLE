import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_PRODUCT } from "../../utils/mutations";


export default function NewProductModal({ product, onClose }) {
    const [newproduct, setNewProduct] = useState({ productName: '', productNote: ''});
    const [addProduct] = useMutation(ADD_PRODUCT)
    console.log(product)

    const addNewProduct = async (newproduct) => {
        console.log(newproduct)
        const addingProduct = await addProduct({
            variables: {
                productName: newproduct.productName,
                productNote: newproduct.productNote
            }
        })
        console.log(addingProduct);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewProduct({
            ...newproduct,
            [name]: value
        })
        console.log(newproduct)
    }

    // if(product.productName) {
    //     setNewProduct({
    //         ...newproduct,
    //         [productName]: product.productName,
    //         [productNote]: product.productNote
    //     })
    //     console.log(newproduct)
    // }

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">New product Information</p>
                </header>
                <section className="modal-card-body">
                    <label>Item Name</label>
                    <input name='productName' onChange={handleInputChange}></input>
                    <hr />
                    <label>Item note</label>
                    <textarea name="productNote" onChange={handleInputChange} placeholder="Description, shoe, clothing size, or gender"></textarea>
                    <hr />
                    <button className="button is-success" onClick={() => addNewProduct(newproduct)}>Add Item</button>
                    <button className="button" onClick={onClose}>Cancel</button>
                </section>
            </div>
        </div>
    )
}
