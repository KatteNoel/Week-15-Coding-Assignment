import React, { useState } from 'react';

export const NewDetailForm = (props) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name) {
            props.addNewDetail({name});
            setName('');
        } else {
            console.log('invalid input');
        }
    }

    return (
        <div>
            <h4>Add A New Detail</h4>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Detail Description" onChange={(e) => setName(e.target.value)} value={name}></input>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    );
};