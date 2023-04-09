import React from 'react';
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

export default function Game({ balance, chance, gameInfo, onBetClick }) {
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

			<MessageBoard balance={balance} chance={chance} />
		</>
	);
}
