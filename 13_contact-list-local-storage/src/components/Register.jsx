import React, { useState, useEffect } from 'react'
import '../assets/css/Register.css'
import ContactList from './ContactList'

export default function Register() {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');
	const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('CONTACTS')) || []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setContacts(prevContacts => [...prevContacts, { name, number }]);
		e.target.reset();
	}

	useEffect(() => {
		localStorage.setItem('CONTACTS', JSON.stringify(contacts));
	}, [contacts]);

	const handleDelete = (index) => {
		setContacts(prevContacts => prevContacts.filter((contact, i) => i !== index));
	}

	const disableSubmit = () => {
		if (name === '' || number === '') {
			return true;
		}
		return false
	}

	return (
		<>
			<div className="Register">
				<h1 className="Register__title">Register Contact</h1>
				<form className="Register__form" onSubmit={handleSubmit}>
					<div className="Register__form__group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							autoComplete="off"
						/>

					</div>
					<div className="Register__form__group">
						<label htmlFor="contact">Contact Number</label>
						<input
							type="number"
							name="contact"
							id="contact"
							value={number}
							onChange={(e) => setNumber(e.target.value)}
							autoComplete="off"
						/>
					</div>
					<button className="Register__form__submit" disabled={disableSubmit()}>Add</button>
				</form>
			</div>

			<ContactList contacts={contacts} onDelete={handleDelete} />
		</>
	)
}
