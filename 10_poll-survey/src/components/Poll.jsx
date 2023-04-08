import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LuffyImg from '../assets/img/luffy.jpg';
import NarutoImg from '../assets/img/naruto.jpg';
import SamsungImg from '../assets/img/samsung.jpg';
import AppleImg from '../assets/img/apple.jpg';
import Dota2Img from '../assets/img/dota2.jpg';
import LolImg from '../assets/img/lol.jpg';
import '../assets/css/Poll.css';

export default function Poll() {
	const [selectedOptions, setSelectedOptions] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		// Get the existing vote counts from localStorage
		const voteCounts = JSON.parse(localStorage.getItem('voteCounts')) || {
			luffy: 0,
			naruto: 0,
			samsung: 0,
			apple: 0,
			dota2: 0,
			lol: 0
		};

		// Increment the vote count for the selected options
		Object.values(selectedOptions).forEach((selectedOption) => {
			voteCounts[selectedOption]++;
		});

		// Save the updated vote counts to localStorage
		localStorage.setItem('voteCounts', JSON.stringify(voteCounts));

		// Navigate to the results page
		navigate('/results');
	};

	const handleOptionChange = (event) => {
		const pollName = event.target.name;
		const optionValue = event.target.value;
		setSelectedOptions({
			...selectedOptions,
			[pollName]: optionValue,
		});
		toggleActiveClass(event);
	};

	const toggleActiveClass = (event) => {
		event.target.parentElement.parentElement.querySelectorAll('.Poll__form__group__options__option img').forEach((option) => {
			option.classList.remove('active');
		}
		);
		event.target.parentElement.querySelector('img').classList.add('active');
	};

	const isSubmitDisabled = Object.values(selectedOptions).length < 3;

	return (
		<div className="Poll">
			<h1 className="Poll__title">Cast your vote!</h1>
			<form className="Poll__form" onSubmit={handleSubmit}>
				<div className="Poll__form__group">
					<h3 className="Poll__form__group__title">Who's the better MC?</h3>
					<div className="Poll__form__group__options">
						<label className="Poll__form__group__options__option">
							<img src={LuffyImg} alt="Luffy" />
							<input
								type="radio"
								name="poll_1"
								value="luffy"
								checked={selectedOptions['poll_1'] === 'luffy'}
								onChange={handleOptionChange}
								hidden
							/>
						</label>
						<label className="Poll__form__group__options__option">
							<img src={NarutoImg} alt="Naruto" />
							<input
								type="radio"
								name="poll_1"
								value="naruto"
								checked={selectedOptions['poll_1'] === 'naruto'}
								onChange={handleOptionChange}
								hidden
							/>
						</label>
					</div>
				</div>

				<div className="Poll__form__group">
					<h3 className="Poll__form__group__title">Which smartphone brand do you prefer?</h3>
					<div className="Poll__form__group__options">
						<label className="Poll__form__group__options__option">
							<img src={SamsungImg} alt="Samsung" />
							<input
								type="radio"
								name="poll_2"
								value="samsung"
								checked={selectedOptions['poll_2'] === 'samsung'}
								onChange={handleOptionChange}
								hidden
							/>
						</label>
						<label className="Poll__form__group__options__option">
							<img src={AppleImg} alt="Apple" />
							<input
								type="radio"
								name="poll_2"
								value="apple"
								checked={selectedOptions['poll_2'] === 'apple'}
								onChange={handleOptionChange}
								hidden
							/>
						</label>
					</div>
				</div>

				<div className="Poll__form__group">
					<h3 className="Poll__form__group__title">Which game is more enjoyable?</h3>
					<div className="Poll__form__group__options">
						<label className="Poll__form__group__options__option">
							<img src={Dota2Img} alt="Dota 2" />
							<input
								type="radio"
								name="poll_3"
								value="dota2"
								checked={selectedOptions['poll_3'] === 'dota2'}
								onChange={handleOptionChange}
								hidden
							/>
						</label>
						<label className="Poll__form__group__options__option">
							<img src={LolImg} alt="League of Legends" />
							<input
								type="radio"
								name="poll_3"
								value="lol"
								checked={selectedOptions['poll_3'] === 'lol'}
								onChange={handleOptionChange}
								hidden
							/>
						</label>
					</div>
				</div>
				<button className="Poll__form__submitBtn" type="submit" disabled={isSubmitDisabled}>Submit</button>
			</form>
		</div>
	);
}
