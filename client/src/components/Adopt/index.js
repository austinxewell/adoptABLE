import React, { useState } from 'react'
import Modal from '../Modal';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import { capitalizeFirstLetter, cleanupName } from '../../utils/helper';
import './adopt.css'
import { useStoreContext } from '../../utils/GlobalState';

export default function Adopt () {

    const { loading, data } = useQuery(QUERY_USERS);
    const [state, dispatch] = useStoreContext();

    const families = data?.users || [];
    console.log(families);

    const [currentFamily, setCurrentFamily] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal(name, i) {
        setCurrentFamily(name);
        console.log(currentFamily)
        setIsModalOpen(!isModalOpen);
        console.log(isModalOpen)
    };

    return (
        <main className=''>
          <div className='container boxAdopt has-text-centered is-centered mt-3'>
            <h2 className='container'>
            Adopt
            </h2>
            <h3 className='container'>Families in need</h3>
          </div>
          <div className='container adoptContainer'>
            <div>
            {loading ? (
                <div className="p-3">
                    Loading Families!
                </div>
            ) : (
            <div className='boxAdopt adoptFamilyContainer columns is-vcentered'>
                {isModalOpen && <Modal currentFamily={currentFamily} onClose={toggleModal} />}
                <div className="columns is-flex-wrap-wrap">
                    {families.map((family, i) => (
                        <div className="column px-5 is-3" key={family.username}>
                            <div className="card p-3" onClick={() => toggleModal(family, i)}>
                                <div className="card-content">
                                    <div className="media-content">
                                        <p className="is-4 cardfamilyname has-text-centered">{cleanupName(capitalizeFirstLetter(family.username))}</p>
                                        

                                    </div>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>{family.familyMembers} family members</li>
                                        <li>{family.products.length} needed items</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
            )}
            </div>
            </div>
        </main>   
    )
}