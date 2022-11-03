import React, { Component } from 'react';
import { ToDo } from './todo';
import { toDoApi } from '../rest/todoapi';
import { NewToDoForm } from './newtodoform';

export class ToDoList extends Component {
    state = {
        toDos: []
    };

    componentDidMount() {
        this.fetchToDos();
    }

    fetchToDos = async () => {
        const toDos = await toDoApi.get();
        this.setState({toDos});
    };

    updateToDo = async (updatedToDo) => {
        console.log(updatedToDo);
        await toDoApi.put(updatedToDo);
        this.fetchToDos();
    };

    createToDo = async (newToDo) => {
        await toDoApi.create(newToDo);
        this.fetchToDos();
        document.getElementById("create-to-do").value = '';
    };

    deleteToDo = async (id) => {
        await toDoApi.delete(id);
        this.fetchToDos();
    };

    render() {
        return (
            <div>
                <NewToDoForm fetchToDos={this.fetchToDos}/>
                {
                    this.state.toDos.map((toDo) => (
                    <ToDo toDo={toDo} key={toDo.id} updateToDo={this.updateToDo} deleteToDo={this.deleteToDo}/>
                ))}
            </div>
        );
    }
}