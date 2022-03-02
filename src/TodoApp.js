import { useState } from 'react';

export const TodoApp = () => {
    const [ todoText, setTodoText ] = useState('');
    const [ todos, setTodos ] = useState([]);
    return (
        <>
        <input
            onChange={ (event) => {
                console.log(event.target.value);
                setTodoText(event.target.value);
            }}
            value={todoText}
        />
        <button>Submit</button>
        {
            todos.length === 0 ?
            <h1>No todos yet!</h1>
            :
            todos.map(todo => <p>{todoText}</p>)
        }
        </>
    );
};

export default TodoApp;