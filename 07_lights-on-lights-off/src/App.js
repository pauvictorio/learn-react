import React, { useState } from 'react'
import './assets/css/App.css'
import lightOn from './assets/images/light-bulb-on.png'
import lightOff from './assets/images/light-bulb-off.png'

export default function App() {
	const [light, setLight] = useState(false);

	const toggleLight = () => {
		setLight(!light);
	}

	return (
		<div>
			<img src={light ? lightOn : lightOff} alt="Light bulb" />
			<button onClick={toggleLight}>
				{light ? 'OFF' : 'ON'}
			</button>
		</div>
	)
}
