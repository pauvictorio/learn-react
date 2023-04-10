import React, { useState, useEffect } from 'react';
import Images from './api/images';
import './assets/css/App.css'
import ImageList from './components/ImageList';

export default function App() {
	const [images, setImages] = useState([]);
	const [query, setQuery] = useState('random');

	const getImage = async (query) => {
		const response = await Images.get(`?count=30&query=${query}}`);
		setImages(response.data);
	};

	useEffect(() => {
		getImage(query);
	}, [query]);

	const handleSearch = (e) => {
		e.preventDefault();
		setQuery(e.target[0].value);
		e.target[0].value = '';
	}

	return (
		<>
			<div className="App">
				<h1>Image API</h1>
				<div className="App__search">
					<form className="App__search__form" onSubmit={(e) => handleSearch(e)}>
						<input type="text" placeholder="Any topic in mind?" />
						<button type="submit">Search</button>
					</form>
				</div>
			</div>
			<ImageList images={images} />
			<footer>
				<p>Made possible by <a href="https://unsplash.com/developers">Unsplash API</a></p>
			</footer>
		</>
	);
}
