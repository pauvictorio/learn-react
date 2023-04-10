import React, { useState, useEffect } from 'react'
import Joke from './api/joke'
import './assets/css/App.css'
import AngryIcon from './assets/img/angry.png'
import CareIcon from './assets/img/care.png'
import LaughIcon from './assets/img/laugh.png'
import LikeIcon from './assets/img/like.png'
import LoveIcon from './assets/img/love.png'
import SadIcon from './assets/img/sad.png'
import WowIcon from './assets/img/wow.png'
import Reaction from './components/Reaction'

const reactions = [
	{
		id: 1,
		name: 'Like',
		src: LikeIcon,
		count: 0
	},
	{
		id: 2,
		name: 'Love',
		src: LoveIcon,
		count: 0
	},
	{
		id: 3,
		name: 'Care',
		src: CareIcon,
		count: 0
	},
	{
		id: 4,
		name: 'Haha',
		src: LaughIcon,
		count: 0
	},
	{
		id: 5,
		name: 'Wow',
		src: WowIcon,
		count: 0
	},
	{
		id: 6,
		name: 'Sad',
		src: SadIcon,
		count: 0
	},
	{
		id: 7,
		name: 'Angry',
		src: AngryIcon,
		count: 0
	}
]

export default function App() {
	const [joke, setJoke] = useState({ setup: 'Loading', punchline: `...` });
	const [reacts, setReacts] = useState(JSON.parse(localStorage.getItem('REACTIONS')) || reactions);

	const getJoke = async () => {
		const response = await Joke.get(`/random_joke`);
		setJoke(response.data);
	}

	useEffect(() => {
		localStorage.setItem('REACTIONS', JSON.stringify(reacts));
		console.log(reacts);
	}, [reacts])

	useEffect(() => {
		getJoke();
	}, [])

	const handleReacts = (id) => {
		const newReacts = reacts.map((reaction) => {
			if (reaction.id === id) {
				reaction.count++;
			}
			return reaction;
		})
		setReacts(newReacts);
	}

	return (
		<div className="App">
			<h1>Daily Jokes</h1>
			<p>{joke.setup}</p>
			<p>{joke.punchline}</p>
			<Reaction reacts={reacts} onReact={handleReacts} />
		</div>
	)
}
