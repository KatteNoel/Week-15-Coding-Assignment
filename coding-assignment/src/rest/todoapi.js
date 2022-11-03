const TODO_ENDPOINT = 'https://63432edbba4478d478497a6d.mockapi.io/todo';

class ToDoAPI {
    get = async () => {
        try {
            const response = await fetch(TODO_ENDPOINT);
            const data = await response.json();
            return data;
        } catch(e) {
            console.log("error fetching todos", e);
        }
    }

    put = async (toDo) => {
        console.log(toDo.id);
        try {
            const response = await fetch(`${TODO_ENDPOINT}/${toDo.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(toDo)
            });
            const data = await response.json();
            return data;
        } catch (e) {
            console.log("error updating todos", e);
        }
    }

    create = async (toDo) => {
        try {
            const response = await fetch(TODO_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(toDo)
            });
            //const data = await response.json();
            return response;
        } catch (e) {
            console.log("error creating todo", e);
        }
    }

    delete = async (id) => {
        try {
            const response = await fetch(`${TODO_ENDPOINT}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            return data;
        }
        catch (e) {
            console.log("error deleting todo", e);
        }
    }
}

export const toDoApi = new ToDoAPI();