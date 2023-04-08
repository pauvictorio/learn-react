import { useState, useEffect } from 'react';
import './Clock.css';

const Clock = () => {
	const time = new Date().toLocaleTimeString();

	const [currentTime, setCurrentTime] = useState(time);

	useEffect(() => {
		const timer = setInterval(() => {
			const time = new Date().toLocaleTimeString();
			setCurrentTime(time);
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="Time">
			<h1>Hello, world!</h1>
			<h2>It is {currentTime}.</h2>
		</div>
	);
}

export default Clock;