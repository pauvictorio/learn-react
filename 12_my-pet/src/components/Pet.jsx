import React, { useState } from 'react';
import MyPet from '../assets/img/pet.gif';
import '../assets/css/Pet.css';

export default function Pet() {
	const [petName, setPetName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const n = e.target.name.value;
		localStorage.setItem('PET', JSON.stringify(n));
		setPetName(n);
	}

	return (
		<div className="Pet">
			<h1>My Pet</h1>
			<form className="Pet__form" onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="Name"
				/>
				<button className="Pet__form__submit" type="submit">Set Pet Name</button>
			</form>
			<img src={MyPet} alt="Pet" />
			<h2>Hi, I'm {petName}</h2>
		</div>
	);
}
