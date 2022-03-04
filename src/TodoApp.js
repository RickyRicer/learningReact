import { useState, useEffect } from 'react';

export const TodoApp = () => {
	const [todoInput, setTodoInput] = useState('');
	const [todos, setTodos] = useState([]);
    // useEffect is meant for making API requests to GET data, setting initial state that's coming from a database or some 3rd party service.
    useEffect(() => {
        (async () => {
            const { data } = axios.get('https://jsonplaceholder.typicode.com/todos');
        })
    }, []);
	return (
		<>
			<input
				name='username'
				onChange={(event) => {
					setTodoInput(event.target.value);
				}}
				value={todoInput}
			/>
			<button
				onClick={() => {
					// console.log(todoInput);
					const newTodos = [...todos, todoInput];
					setTodos(newTodos);
					setTodoInput('');
				}}
			>
				Submit
			</button>
			{
				todos.length === 0 ?
					<h1>No todos yet</h1>
					:
					todos.map(todo => <p>{todo.title}</p>)
			}
		</>
	);
};

export default TodoApp;