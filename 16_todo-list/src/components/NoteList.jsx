import React from 'react'
import '../assets/css/NoteList.css'

export default function NoteList({ todos, onChangeStatus }) {
	const handleChangeStatus = (e, id) => {
		onChangeStatus(e, id);
		// Remove the class from the previous status
		const target = e.target.parentElement.parentElement.parentElement.parentElement.children[0];
		target.classList.remove(target.classList[1]);
		target.classList.add(e.target.value);
	}

	return (
		<div className="NoteList">
			{
				todos.map((todo) => (
					<div className="NoteList__note" key={todo.id}>
						<div className="NoteList__note__title pending">
							<h2>{todo.title}</h2>
						</div>
						<div className="NoteList__note__text">{todo.description}</div>
						<div className="NoteList__note__status">
							<p>Marked task as:</p>
							<form>
								<label>
									<input
										type="radio"
										name="status"
										value="pending"
										defaultChecked="checked"
										onClick={(e) => handleChangeStatus(e, todo.id)}
									/>
									Pending
								</label>
								<label>
									<input
										type="radio"
										name="status"
										value="ongoing"
										onClick={(e) => handleChangeStatus(e, todo.id)}
									/>
									Ongoing
								</label>
								<label>
									<input
										type="radio"
										name="status"
										value="completed"
										onClick={(e) => handleChangeStatus(e, todo.id)}
									/>
									Completed
								</label>
							</form>
						</div>
					</div>
				))
			}
		</div>
	)
}
