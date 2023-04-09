import React from 'react'
import '../assets/css/MessageBoard.css'

export default function MessageBoard({ messages }) {
	return (
		<div className="MessageBoard">
			<h1 className="MessageBoard__title">Game Host:</h1>
			<div className="MessageBoard__container">
				{
					messages.map((message, index) => {
						const messageClass =
							message.bet === 'done' ? 'done' :
							message.bet > 0 ? 'pos' :
							message.bet < 0 ? 'neg' :
							'';

						return (
							<p className={`MessageBoard__container__message ${messageClass}`} key={index}>
								{message.message}
							</p>
						)
					})

				}
			</div>
		</div>
	)
}

