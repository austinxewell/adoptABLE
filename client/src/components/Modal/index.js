import React from 'react';

function Modal ({ onClose, currentFamily }) {
    const { name, count } = currentFamily;
    console.log('should be displaying modal')
    return(
        <div>
            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">a name</p>
                    </header>
                    <section className="modal-card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris
                    </section>
                    <footer className="modal-card-foot">
                        <p>5 kids in the family</p>
                        <button className="button is-success">Adopt</button>
                        <button className="button" onClick={onClose}>Cancel</button>
                    </footer>
                </div>
            </div>
        </div>
        
    ) 
};

export default Modal;