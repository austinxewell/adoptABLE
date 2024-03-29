import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter, cleanupName } from '../../utils/helper';
import List from '../List';
import { ADOPT_USER } from '../../utils/mutations';
import './modal.css'
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router';

function Modal ({ onClose, currentFamily }) {
    const { _id, username, products, familyMembers, email } = currentFamily;
    const [adoptUser] = useMutation(ADOPT_USER)
    const [adopted, setAdopted] = useState(false)
    const [adoptButton, setAdoptButton] = useState('')

    const [showList, setShowList] = useState(false);

    useEffect(() => {
        if(adopted) {
            setAdoptButton('Adopted')
        } else {
            setAdoptButton('Adopt')
        }
    })

    const history = useHistory();

    function toggleList() {
        setShowList(!showList);
        console.log(showList);
    }

    function toggleAdoption() {
        setAdopted(!adopted);
    }

    const adoptFamily = async (id) => {
        console.log(`we adopted family ` + id)
        const addingUser = await adoptUser({
            variables: {
                adoptedFamilyId: id
            }
        })
        console.log(addingUser);
        toggleAdoption();
        history.go(0);
        // setAllFriends([
        //     ...currentFriends,
        //     id
        // ])
    };

    return(
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title cardfamilyname">{cleanupName(capitalizeFirstLetter(username))}</p>
                </header>
                <section className="modal-card-body">
                <h4>{familyMembers} People in this family.</h4>
                
                    {showList ? (
                        <div>
                            <List 
                                list={products}
                            />
                            <a href="#" onClick={() => toggleList()}>Minimize List</a>
                        </div>
                    ) : (
                        <div>
                            <a href="#" onClick={() => toggleList()}>View Family Needs</a>
                        </div>
                    )}
                    
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success" onClick={() => adoptFamily(_id)}>{adoptButton}</button>
                    <button className="button" onClick={onClose}>Close</button>
                </footer>
            </div>
        </div>
    ) 
};

export default Modal;