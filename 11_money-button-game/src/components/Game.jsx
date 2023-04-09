import React from 'react'
import '../assets/css/Game.css'

export default function Game() {
	return (
		<div className="Game">
			<div className="Game__userInfo">
				<h1 className="Game__userInfo__balance">Your Money: 500</h1>
				<h1 className="Game__userInfo__chance">Chance/s left: 10</h1>
			</div>

			<div className="Game__buttonsContainer">
				<div className="Game__buttonsContainer__buttonGroup">
					<h3>Low Risk</h3>
					<button>Bet</button>
					<p>-25 to 100</p>
				</div>

				<div className="Game__buttonsContainer__buttonGroup">
					<h3>Moderate Risk</h3>
					<button>Bet</button>
					<p>-100 to 1000</p>
				</div>

				<div className="Game__buttonsContainer__buttonGroup">
					<h3>High Risk</h3>
					<button>Bet</button>
					<p>-500 to 2500</p>
				</div>

				<div className="Game__buttonsContainer__buttonGroup">
					<h3>Severe Risk</h3>
					<button>Bet</button>
					<p>-3000 to 5000</p>
				</div>
			</div>
		</div>
	)
}
