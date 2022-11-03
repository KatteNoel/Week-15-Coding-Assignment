import { toDoApi } from '../rest/todoapi';

export const NewToDoForm = (props) => {

    const onSubmit = (e) => {
        e.preventDefault();
        let name = document.getElementById("create-to-do").value;
        toDoApi.create({ name: name, details: [] });
        props.fetchToDos();
        document.getElementById("create-to-do").value = '';
    }

    return (
        <div className="card">
            <div className="card-header"> <h3>Add a New To-Do</h3> </div>
            <div className="card-body">
            <form className="form-control" onSubmit={onSubmit}>
                <input type="text" placeholder="New To-Do Item" id="create-to-do"></input>
                <button type="submit" className="btn btn-primary">Create New To-Do Item</button>
            </form>
            </div>
        </div>
    );
};