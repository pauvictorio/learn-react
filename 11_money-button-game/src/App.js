import React, { useState } from 'react'
import './assets/css/App.css';
import Game from './components/Game';

const gameInfo = {
	low: {
		id: 'low',
		name: 'Low Risk',
		min: -25,
		max: 100
	},
	moderate: {
		id: 'moderate',
		name: 'Moderate Risk',
		min: -100,
		max: 1000
	},
	high: {
		id: 'high',
		name: 'High Risk',
		min: -500,
		max: 2500
	},
	severe: {
		id: 'severe',
		name: 'Severe Risk',
		min: -3000,
		max: 5000
	}
}

export default function App() {
	const [balance, setBalance] = useState(500);
	const [chance, setChance] = useState(10);
	const [bet, setBet] = useState();
	const [risk, setRisk] = useState([]);

	const randomizeBet = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	const handleBet = (e) => {
		const risk = e.target.id;
		const bet = randomizeBet(gameInfo[risk].min, gameInfo[risk].max);
		setBet(bet);
		setRisk(gameInfo[risk].name);

		if (chance > 0) {
			setChance(chance - 1);
			setBalance(balance + bet);
		}
	}

	return (
		<Game balance={balance} chance={chance} bet={bet} risk={risk} gameInfo={gameInfo} onBetClick={handleBet} />
	)
}
