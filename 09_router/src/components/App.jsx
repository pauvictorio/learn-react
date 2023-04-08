import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Gallery from './Gallery';
import '../assets/css/App.css';

export default function App() {
	return (
		<>
			<Router>
				<div className="App">
					<ul className="App__list">
						<li className="App__list__item">
							<Link to="/">Home</Link>
						</li>
						<li className="App__list__item">
							<Link to="/about">About Me</Link>
						</li>
						<li className="App__list__item">
							<Link to="/gallery">Gallery</Link>
						</li>
					</ul>
				</div>

				<Routes>
					<Route exact path='/' element={<Home />}></Route>
					<Route exact path='/about' element={<AboutMe />}></Route>
					<Route exact path='/gallery' element={<Gallery />}></Route>
				</Routes>
			</Router>
		</>
	)
}
