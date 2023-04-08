import React, { useState } from 'react'
import './assets/css/Register.css'

export default function Register(props) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		props.onRegisterSubmit(name, email);
		setName('');
		setEmail('');
	}

	return (
		<div className="Register">
			<h1 className="Register__header">CONTACT REGISTRATION FORM</h1>

			<form className="Register__form" onSubmit={handleSubmit}>
				<div className="Register__form__group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={(e) => {setName(e.target.value)}}
					/>
				</div>

				<div className="Register__form__group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => {setEmail(e.target.value)}}
					/>
				</div>
				
				<button type="submit">Add</button>
			</form>
		</div>
	)
}
