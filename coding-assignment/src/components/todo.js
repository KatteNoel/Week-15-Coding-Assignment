import React from 'react';
import { NewDetailForm } from './newdetailform.js';

export const ToDo = (props) => {
    const { toDo, updateToDo, deleteToDo } = props;
    
    const deleteDetail = (detailId) => {
        console.log(detailId);
        const updatedToDo = {
            ...toDo,
            details: toDo.details.filter((x) => x.id !== detailId)
        };
        updateToDo(updatedToDo);
    };

    const addNewDetail = (detail) =>
    {
        let index = toDo.details.length;
        updateToDo({...toDo, details: [...toDo.details, {name: detail.name, id: index}]})
    }

    const details = () => {
        return (
            <ul>
                {toDo.details.map((detail, index) => (
                <li key={index}>
                    <label>{`${detail.name}`}</label>
                    <button className="btn btn-danger" onClick={(e) => deleteDetail(detail.id)}>Delete Detail</button>
                </li>
                ))}
            </ul>
        );
    };

    const deleteClick = (e) => {
        deleteToDo(toDo.id);
    }

    return (
        <div className="card">
            <div className="card-header"><h3>{toDo.name}</h3></div>
            <div className="card-body">
                {
                    details({ details, id: toDo.id, deleteDetail })
                }
            </div>
            <div className="card-footer">
                <NewDetailForm addNewDetail={addNewDetail}/>
            </div>
            <button className="btn btn-danger" onClick={deleteClick}>Delete To-Do</button>
        </div>
    );
};