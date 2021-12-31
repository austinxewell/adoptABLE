import React, { useState } from 'react'
import placeholder from '../../assets/images/1280x960.png';
import Modal from '../Modal';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import { capitalizeFirstLetter, cleanupName } from '../../utils/helper';
import './adopt.css'

export default function Adopt () {

    const { loading, data } = useQuery(QUERY_USERS);

    const families = data?.users || [];
    console.log(families);

    const [currentFamily, setCurrentFamily] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal(name, i) {
        setCurrentFamily(name);
        console.log(currentFamily)
        setIsModalOpen(!isModalOpen);
        console.log(isModalOpen)
    }

    return (
        <main>
            <br/>
            <div className='columns is-centered mt-3'>
                <h2>Adobt</h2>
            </div>
            <div className="columns is-centered">
                <h3>Families in need</h3>
            </div>
            {loading ? (
                <div className="p-3">
                    Loading Families!
                </div>
            ) : (
            <div>
                {isModalOpen && <Modal currentFamily={currentFamily} onClose={toggleModal} />}
                <div className="columns is-flex-wrap-wrap">
                    {families.map((family, i) => (
                        <div className="column px-5 is-3" key={family.username}>
                            <div className="card p-3" onClick={() => toggleModal(family, i)}>
                                <div className="card-content">
                                    <div className="media-content">
                                        <p className="title is-4 cardfamilyname">{cleanupName(capitalizeFirstLetter(family.username))}</p>
                                        

                                    </div>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>{family.familyMembers} Family members</li>
                                        <li>{family.products.length} needed items</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
            )}
        </main>   
    )
}