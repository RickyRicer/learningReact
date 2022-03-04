import { Component } from 'react';

class TodoAppV2 extends Component {
	state = {
		todoInput: '',
		todos: [],
	}

	handleSubmit = () => {
		const newTodo = {
			id: this.state.todos.length + 1,
			title: this.state.todoInput,
		};
		const newTodosState = [...this.state.todos, newTodo ];

		this.setState({
			todoInput: '',
			todos: newTodosState,
		});
	}

	handleChange = (event) => {
		this.setState({ ...this.state, todoInput: event.target.value });
	}

	render() {
		return (
			<>
				<input
					name='username'
					onChange={this.handleChange}
					value={this.state.todoInput}
				/>
				<button
					onClick={this.handleSubmit}
				>
					Submit
				</button>
				{
					this.state.todos.length === 0 ?
						<h1>No todos yet</h1>
						:
						this.state.todos.map(todo => <p>{todo.title}</p>)
				}
			</>
		)
	}

}

export default TodoAppV2;