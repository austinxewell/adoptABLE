import React, { useEffect, useState } from 'react';
import { QUERY_ME_BASIC } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { capitalizeFirstLetter, cleanupName } from '../../utils/helper';
import './profile.css';
import NewProductModal from '../NewProductModal';
import UpdateProductModal from '../UpdateProductModal';
import { useMutation } from '@apollo/client';
import { DELETE_ADOPTED_FAMILY, UPDATE_USER } from '../../utils/mutations';
import UpdateProfile from '../UpdateProfile';
import { useHistory } from 'react-router';

export default function Profile() {
    const [currentProduct, setCurrentProduct] = useState();
    const {loading, data} = useQuery(QUERY_ME_BASIC);
    const me = data?.me || [];
    const history = useHistory();
    const { products, adoptedFamily } = me;
    const [removeFamily] = useMutation(DELETE_ADOPTED_FAMILY);

    const [isEditOn, setIsEditOn] = useState(false);

    const [isProductModalOpen, setIsProductModalOpen] = useState(false);
    const [isUpdateProductModalOpen, setIsUpdateProductModalOpen] = useState(false);

    function toggleProductModal() {
        setIsProductModalOpen(!isProductModalOpen);
    }



    function toggleEdit() {
        setIsEditOn(!isEditOn);
    }

    function toggleUpdateProductModal(product) {
        setCurrentProduct(product)
        setIsUpdateProductModalOpen(!isUpdateProductModalOpen);
    }

    const handleDeleteFriend = async (friend) => {
        console.log(friend)
        const removing = await removeFamily({
            variables: {
                adoptedFamilyId: friend._id
            }
        })
        console.log(removing);
        history.go(0);
    }

    return (
        <main>
            {loading ? (
                <div>
                    Loading Profile
                </div>
            ) : (
                    <div>
                        {isEditOn && <UpdateProfile onClose={toggleEdit} me={me}/> }
                        {isUpdateProductModalOpen && <UpdateProductModal currentProduct={currentProduct} onClose={toggleUpdateProductModal} />}
                        {isProductModalOpen && <NewProductModal onClose={toggleProductModal} />}
                        <div>
                            <h2>Profile</h2>
                        </div>
                        <div>
                            <h3>{capitalizeFirstLetter(me.username)}</h3>
                            <hr />
                            <label>Current Email:</label>
                            <div className="userinfo">{me.email}</div>
                            <label>Family Count:</label>
                            <div className="userinfo">{me.familyMembers}</div>
                            <button className="button is-info" onClick={toggleEdit}>Update Information</button>
                            <hr/>
                            <div className="columns">
                                <div className="column is-3">
                                    <div className="container sectionheader">Current Items Needed</div>
                                    {products.map((product) => (
                                        <div className="card" key={product._id} onClick={() => toggleUpdateProductModal(product)}>
                                            <div className="card-header">{capitalizeFirstLetter(product.productName)}</div>
                                            <div className="card-content">
                                                <span className="productnote">Product Notes:</span>
                                                <br/>
                                                <p className="productnotes">
                                                    {capitalizeFirstLetter(product.productNote)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                    <button onClick={() => toggleProductModal()} className="button is-info pb-5">Add new item</button>
                                </div>
                                <div className="column is-9">
                                    <div className="container friendsheader sectionheader">Friends</div>
                                    <div className="columns is-flex-wrap-wrap">
                                        {adoptedFamily.map((friends) => (
                                            <div key={friends.username} className="card column is-3">
                                                <div className="card-header">
                                                    {capitalizeFirstLetter(friends.username)}
                                                </div>
                                                <div className="card-conent">
                                                    <button className="button is-danger" onClick={() => handleDeleteFriend(friends)}>Delete</button>
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