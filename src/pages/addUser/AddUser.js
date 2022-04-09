import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/userSlice/userSlice';

import "./AddUser.css";

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [name, setName] = useState("");
    const [surName, setSurName] = useState("");

    const onNameChange = (e) => setName(e.target.value);
    const onSurNameChange = (e) => setSurName(e.target.value);

    const canSave = Boolean(name) && Boolean(surName)

    const addnewUser = () => {
        dispatch(addUser({ id: Math.random(), name, surName }))
        setName("");
        setSurName("");
        navigate(`/`);
    }

    return (
        <div className='add-new-user-container'>
          
                <input
                    className='add-new-user-input'
                    type="text"
                    placeholder='Enter author name'
                    value={name}
                    onChange={onNameChange}
                />
                <input
                    className='add-new-user-input'
                    type="text"
                    placeholder='Enter author surname'
                    value={surName}
                    onChange={onSurNameChange}
                />
            <button
                className='add-new-user-button'
                disabled={!canSave}
                onClick={addnewUser}
            >
                Add New User
            </button>
        </div>
    );
};

export default AddUser;