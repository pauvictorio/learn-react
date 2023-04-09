import React, { useState, useEffect } from 'react'
import '../assets/css/Register.css'
import ContactList from './ContactList'

export default function Register() {
	const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('CONTACTS')) || []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value;
		const contact = e.target.contact.value;
		setContacts(prevContacts => [...prevContacts, { name, contact }]);
		e.target.reset();
	}

	useEffect(() => {
		localStorage.setItem('CONTACTS', JSON.stringify(contacts));
	}, [contacts]);


	return (
		<>
			<div className="Register">
				<h1 className="Register__title">Register Contact</h1>
				<form className="Register__form" onSubmit={handleSubmit}>
					<div className="Register__form__group">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" autoComplete="off" />
					</div>
					<div className="Register__form__group">
						<label htmlFor="contact">Contact Number</label>
						<input type="number" name="contact" id="contact" autoComplete="off" />
					</div>
					<button className="Register__form__submit">Add</button>
				</form>
			</div>

			<ContactList contacts={contacts} />
		</>
	)
}
