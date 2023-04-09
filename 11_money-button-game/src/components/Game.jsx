import React, { useState, useEffect } from 'react';
import '../assets/css/Game.css';
import MessageBoard from './MessageBoard';

function renderGame(gameInfo, handleBet) {
	return Object.keys(gameInfo).map((game) => {
		return (
			<div className="Game__buttonsContainer__buttonGroup" key={game}>
				<h3>{gameInfo[game].name}</h3>
				<button id={gameInfo[game].id} onClick={handleBet}>Bet</button>
				<p>{gameInfo[game].min} to {gameInfo[game].max}</p>
			</div>
		)
	})
}

function getDateTime() {
	const now = new Date();
	const month = now.getMonth() + 1;
	const day = now.getDate();
	const year = now.getFullYear();
	const hours = now.getHours() % 12 || 12;
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

	const formattedDateTime = `${month}-${day}-${year} ${hours}:${minutes} ${ampm}`;

	return formattedDateTime;
}

export default function Game({ balance, chance, bet, risk, gameInfo, onBetClick }) {
	const [messages, setMessages] = useState([
		{
			message: `${getDateTime()} | Welcome to the Money Button Game!`,
			bet: ''
		}
	]
	);

	useEffect(() => {
		if (bet) {
			if (chance >= 0) {
				setMessages(prevMessages => [...prevMessages, {
					message: `${getDateTime()} | You clicked "${risk}", value is ${bet}. Current balance is ${balance} with ${chance} chance/s left.`,
					bet: bet
				}]);
			}
			if (chance === 0) {
				setMessages(prevMessages => [...prevMessages, {
					message: `GAME OVER!!!`,
					bet: 'done'
				}]);
			}
		}
	}, [chance]);

	const handleBet = (e) => {
		onBetClick(e);
	}

	return (
		<>
			<div className="Game">
				<div className="Game__userInfo">
					<h1 className="Game__userInfo__balance">Your Money: {balance}</h1>
					<h1 className="Game__userInfo__chance">Chance/s left: {chance}</h1>
				</div>

				<div className="Game__buttonsContainer">
					{renderGame(gameInfo, handleBet)}
				</div>
			</div>

			<MessageBoard messages={messages} bet={bet} />
		</>
	);
}
