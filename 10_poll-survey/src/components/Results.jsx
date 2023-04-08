import React from 'react';
import { useNavigate } from 'react-router-dom';
import LuffyImg from '../assets/img/luffy.jpg';
import NarutoImg from '../assets/img/naruto.jpg';
import SamsungImg from '../assets/img/samsung.jpg';
import AppleImg from '../assets/img/apple.jpg';
import Dota2Img from '../assets/img/dota2.jpg';
import LolImg from '../assets/img/lol.jpg';
import '../assets/css/Results.css';

export default function Results() {
	const navigate = useNavigate();

	// Get the vote counts from localStorage
	const voteCounts = JSON.parse(localStorage.getItem('voteCounts')) || {
		luffy: 0,
		naruto: 0,
		samsung: 0,
		apple: 0,
		dota2: 0,
		lol: 0
	};

	return (
		<div className="Results">
			<h1 className="Results__title">Vote counts:</h1>
			<div className="Results__container">
				<div className="Results__group">
					<h3 className="Results__group__title">Who's the better MC?</h3>
					<div className="Results__group__options">
						<div className="Results__group__options__item">
							<img src={LuffyImg} alt="Luffy" />
							<p>{voteCounts.luffy}</p>
						</div>
						<div className="Results__group__options__item">
							<img src={NarutoImg} alt="Naruto" />
							<p>{voteCounts.naruto}</p>
						</div>
					</div>
				</div>

				<div className="Results__group">
					<h3 className="Results__group__title">Which smartphone brand do you prefer?</h3>
					<div className="Results__group__options">
						<div className="Results__group__options__item">
							<img src={SamsungImg} alt="Samsung" />
							<p>{voteCounts.samsung}</p>
						</div>
						<div className="Results__group__options__item">
							<img src={AppleImg} alt="Apple" />
							<p>{voteCounts.apple}</p>
						</div>
					</div>
				</div>

				<div className="Results__group">
					<h3 className="Results__group__title">Which game is more enjoyable?</h3>
					<div className="Results__group__options">
						<div className="Results__group__options__item">
							<img src={Dota2Img} alt="Dota 2" />
							<p>{voteCounts.dota2}</p>
						</div>
						<div className="Results__group__options__item">
							<img src={LolImg} alt="League of Legends" />
							<p>{voteCounts.lol}</p>
						</div>
					</div>
				</div>
			</div>
			<button className="Results__backBtn" onClick={() => navigate('/')}>Go back</button>
		</div>
	);
}
