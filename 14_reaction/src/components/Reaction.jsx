import React from 'react'
import '../assets/css/Reaction.css'

export default function Reaction({ reacts, onReact }) {
	const handleReacts = (id) => {
		onReact(id);
	}

	return (
		<div className="Reaction">
			{
				reacts.map((react) => (
					<div className="Reaction__group" key={react.id}>
						<p>{react.count}</p>
						<img
							src={react.src}
							alt={react.name}
							onClick={() => handleReacts(react.id)}
						/>
					</div>
				))
			}
		</div>
	)
}
