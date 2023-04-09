import React from 'react'
import '../assets/css/ContactList.css'

export default function ContactList({ contacts }) {
	return (
		<div className="ContactList">
			<h1 className="ContactList__title">Contact List</h1>
			{
				contacts.map((contact, index) => (
					<ul className="ContactList__list" key={index}>
						<li className="ContactList__list__group">
							<h2>{contact.name}</h2>
							<p>{contact.contact}</p>
						</li>
					</ul>
				))
			}
		</div>
	)
}