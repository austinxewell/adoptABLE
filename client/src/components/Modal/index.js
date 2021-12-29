import React, { useState } from 'react';
import { capitalizeFirstLetter, cleanupName } from '../../utils/helper';
import List from '../List';

function Modal ({ onClose, currentFamily }) {
    const { username, products, familyMembers, email } = currentFamily;

    const [showList, setShowList] = useState(false);

    function toggleList() {
        setShowList(!showList);
        console.log(showList);
    }

    return(
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title cardfamilyname">{cleanupName(capitalizeFirstLetter(username))}</p>
                </header>
                <section className="modal-card-body">
                <span>{familyMembers} People in this family.</span>
                
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
                    <button className="button is-success">Adopt</button>
                    <button className="button" onClick={onClose}>Cancel</button>
                </footer>
            </div>
        </div>
    ) 
};

export default Modal;