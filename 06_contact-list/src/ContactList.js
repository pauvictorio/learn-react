import React from 'react';
import './assets/css/ContactList.css';

const getInitials = (name) => {
	const words = name.split(' ');
	const initials = words.map((word) => word[0]);
	return initials.join('');
}

export default function ContactList({ contacts }) {
	return (
		<div className="ContactList">
			<h2 className="ContactList__header">CONTACTS</h2>

			<ul className="ContactList__list">
				{
					contacts.map(({ name, email }) => (
						<li className="ContactList__list__item" key={email}>
							<div className="ContactList__list__item__avatar">
								{getInitials(name)}
							</div>

							<div className="ContactList__list__item__contact">
								<h3 className="ContactList__list__item__contact__name">{name}</h3>
								<p className="ContactList__list__item__contact__email">{email}</p>
							</div>
						</li>
					))
				}
			</ul>
		</div>
	);
}
