import React, { useState } from 'react'
import placeholder from '../../assets/images/1280x960.png';
import Modal from '../Modal';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import { capitalizeFirstLetter } from '../../utils/helper';

export default function Adopt () {

    const { loading, data } = useQuery(QUERY_USERS);

    const families = data?.users || [];
    console.log(families);

    const [currentFamily, setCurrentFamily] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const peeps = [
        {name: "john",
        familysize: 3
        },
        {name: "samantha",
        familysize: 2
        },
        {name: "Kim",
        familysize: 3
        },
        {name: "Joan",
        familysize: 6
        },
        {name: "smiths",
        familysize: 2
        },
        {name: "deans",
        familysize: 4
        }
    ];

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
            {loading ? (
                <div>
                    Loading Families!
                </div>
            ) : (
            <div>
                {isModalOpen && <Modal currentFamily={currentFamily} onClose={toggleModal} />}
                <div className="columns is-flex-wrap-wrap">
                    {peeps.map((family, i) => (
                        <div className="column px-5 is-3" key={family.name}>
                            <div className="card" onClick={() => toggleModal(family, i)}>
                                <div className="card-image">
                                    <figure className="image is-4by3">
                                        <img src={placeholder} alt="placeholder" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media-content">
                                        <p className="title is-4 cardfamilyname">{capitalizeFirstLetter(family.name)}</p>
                                        <p className="subtitle is-6">{family.familysize}</p>

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