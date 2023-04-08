import React, { useState } from 'react';
import Register from './Register';
import ContactList from './ContactList';

export default function App() {
	const [contacts, setContacts] = useState([]);

	const handleRegisterSubmit = (name, email) => {
		setContacts(prevContacts => [...prevContacts, { name, email }]);
	};

	return (
		<div className="App">
			<Register onRegisterSubmit={handleRegisterSubmit} />
			<ContactList contacts={contacts} />
		</div>
	)
}