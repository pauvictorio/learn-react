import React, { useState } from 'react'
import './assets/css/App.css'
import NoteList from './components/NoteList'

const todosList = [1, 2, 3].map((id) => ({
	id: id,
	title: `Task #${id}`,
	description: `Description of task #${id}`,
	status: 'pending'
  }));

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
