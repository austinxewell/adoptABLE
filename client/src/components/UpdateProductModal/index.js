import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { DELETE_PRODUCT, UPDATE_PRODUCT } from "../../utils/mutations";


export default function NewProductModal({ currentProduct, onClose }) {
    const [product, setProduct] = useState({ productName: '', productNote: '', productId: ""});
    const [updateProduct] = useMutation(UPDATE_PRODUCT)
    const [deleteitem] = useMutation(DELETE_PRODUCT)

    useEffect(() => {
        setProduct({
            productName: currentProduct.productName,
            productNote: currentProduct.productNote,
            productId: currentProduct._id
        })
    }, [])
    

    const updateOldProduct = async () => {
        console.log(product)
        const updatingProduct = await updateProduct({
            variables: {
                productId: product.productId,
                productName: product.productName,
                productNote: product.productNote
            }
        })
        console.log(updatingProduct);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setProduct({
            ...product,
            [name]: value
        })
    }

    const handleDelete = async (product) => {
        console.log(DELETE_PRODUCT)
        const removeProduct = await deleteitem({
            variables: {
                productId: product.productId
            }
        })
        console.log(removeProduct)
    }

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Update product Information</p>
                </header>
                <section className="modal-card-body">
                    <label>Item Name</label>
                    <input name='productName' value={product.productName} onChange={handleInputChange}></input>
                    <hr />
                    <label>Item note</label>
                    <textarea name="productNote" value={product.productNote} onChange={handleInputChange} placeholder="Description, shoe, clothing size, or gender"></textarea>
                    <hr />
                    <button className="button is-success" onClick={() => updateOldProduct(product)}>Update Product</button>
                    <button className="button" onClick={onClose}>Cancel</button>
                    <button className="button is-danger" onClick={() => handleDelete(product)}>Delete Product</button>
                </section>
            </div>
        </div>
    )
}
