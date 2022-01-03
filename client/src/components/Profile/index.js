import React, { useState } from 'react';
import { QUERY_ME_BASIC } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { capitalizeFirstLetter, cleanupName } from '../../utils/helper';
import './profile.css';
import NewProductModal from '../NewProductModal';
import UpdateProductModal from '../UpdateProductModal';

export default function Profile() {
    const [currentProduct, setCurrentProduct] = useState("");
    const {loading, data} = useQuery(QUERY_ME_BASIC);
    const me = data?.me || [];
    const { products, adoptedFamily } = me;

    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [isUpdateProductModalOpen, setIsUpdateProductModalOpen] = useState(false);

    function toggleProductModal() {
        setIsProductModalOpen(!isProductModalOpen);
    }

    function toggleUpdateProductModal(products) {
        setIsUpdateProductModalOpen(!isUpdateProductModalOpen);
        console.log(products)
    }

    function updateProduct(product) {
        setCurrentProduct(product)
        toggleUpdateProductModal();
    }

    return (
        <main>
            {loading ? (
                <div>
                    Loading Profile
                </div>
            ) : (
                    <div>
                        {isUpdateProductModalOpen && <UpdateProductModal onClose={toggleUpdateProductModal} />}
                        {isProductModalOpen && <NewProductModal onClose={toggleProductModal} />}
                        <div>
                            <h2>Profile</h2>
                        </div>
                        <div>
                            <h3>{capitalizeFirstLetter(me.username)}</h3>
                            <hr />
                            <label>Current Email:</label>
                            <br />
                            <span>{me.email}</span>
                            <label>Current Items Needed</label>
                            <div className="columns">
                                <div className="column is-3">
                                    {products.map((products) => (
                                        <div className="card" key={products.productName} onClick={() => updateProduct(products)}>
                                            <div className="card-header">{capitalizeFirstLetter(products.productName)}</div>
                                            <div className="card-content">
                                                <span className="productnote">Product Notes:</span>
                                                <br/>
                                                <p className="productnotes">
                                                    {capitalizeFirstLetter(products.productNote)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={() => toggleProductModal()} className="button is-link">Add new item</button>
                                </div>
                                <div className="column is-9">
                                    <div className="columns">
                                        {adoptedFamily.map((friends) => (
                                            <div key={friends.username} className="card column is-3">
                                                <div className="card-header">
                                                    {capitalizeFirstLetter(friends.username)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </main>
    )
}