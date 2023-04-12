import React, { useState } from 'react'
import './assets/css/App.css'
import NoteList from './components/NoteList'

const todosList = [
	{
		id: 1,
		title: 'Task #1',
		description: 'Description of task #1',
		status: 'pending'
	},
	{
		id: 2,
		title: 'Task #2',
		description: 'Description of task #2',
		status: 'pending'
	},
	{
		id: 3,
		title: 'Task #3',
		description: 'Description of task #3',
		status: 'pending'
	}
]

export default function App() {
	const [todos, setTodos] = useState(todosList);

	const handleChangeStatus = (e, id) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				todo.status = e.target.value;
			}
			return todo;
		});
		setTodos(newTodos);
	}

	return (
		<div className="App">
			<h1>To-Do List App</h1>
			<NoteList todos={todos} onChangeStatus={handleChangeStatus} />
		</div>
	)
}
