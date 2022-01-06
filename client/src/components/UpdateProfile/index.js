import React, { useState, useEffect} from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';
import { useHistory } from 'react-router';
import './updateprofile.css'

export default function UpdateProfile({ me, onClose }) {
    const [updateUser] = useMutation(UPDATE_USER);
    const [currentMe, setCurrentMe] = useState({ email: "", familyMembers: ""});
    const history = useHistory();
    useEffect(() => {
        setCurrentMe({
            email: me.email,
            familyMembers: me.familyMembers
        })
    }, [])

    const updateMe = async () => {
        const updatedMe = await updateUser({
            variables: {
                email: currentMe.email,
                familyMembers: currentMe.familyMembers
            }
        })
        console.log(updatedMe)
        onClose();
        history.go(0);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setCurrentMe({
            ...currentMe,
            [name]: value
        })
    }

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Update User Information</p>
                </header>
                <section className="modal-card-body">
                    <label>Email:</label>
                    <input name="email" value={currentMe.email} onChange={handleInputChange}></input>
                    <label>Family Members:</label>
                    <input name="familyMembers" value={currentMe.familyMembers} onChange={handleInputChange}></input>
                    <hr />
                    <button className="button is-success" onClick={updateMe}>Save</button>
                    <button className="button is-danger" onClick={onClose}>Cancel</button>
                </section>
            </div>
        </div>
    )
}