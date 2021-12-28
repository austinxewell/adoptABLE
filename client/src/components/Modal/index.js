import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helper';

function Modal ({ onClose, currentFamily }) {
    const { name, familysize } = currentFamily;

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
                    <p className="modal-card-title cardfamilyname">{capitalizeFirstLetter(name)}</p>
                </header>
                <section className="modal-card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris
                
                    {showList ? (
                        <div>Show list</div>
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