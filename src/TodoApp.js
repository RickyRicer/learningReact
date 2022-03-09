import { useState, useEffect } from 'react';
import { PacmanLoader } from 'react-spinners/PacmanLoader';

import axios from 'axios';


export const TodoApp = () => {
	const [todoInput, setTodoInput] = useState('');
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	//Use useEffect is meant for making API requests to GET data and setting initial state
	// that's coming from a database or some 3rd party service
	// useEffect is all react life cycle methods in 1
	// by default useEffect behaves like componentDidMount
	useEffect(() => {
	//	this is where we do our api fetching
		(async () => {
			setIsLoading(true);
			const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
			setTodos(data);
			setIsLoading(true);
		})();
	}, []);

	return isLoading ?
	<PacmanLoader
		size={30}
		margin={2}
	/>
	:
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
};

export default TodoApp;