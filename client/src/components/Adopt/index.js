import React, { useState } from 'react'
import placeholder from '../../assets/images/1280x960.png';
import Modal from '../Modal';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import { capitalizeFirstLetter, cleanupName } from '../../utils/helper';

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
        <section>
          <br/>
          <div className='columns is-centered'>
            <h2 className=''>
            Adopt
            </h2>
          </div> 
        <main className="purplecolor1">
            <div className="p-3">
                <h2>Families in need</h2>
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
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Phasellus nec iaculis mauris.
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
            )}
        </main>   
        </section> 
    )
}