import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Poll from './components/Poll';
import Results from './components/Results';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Poll />} />
				<Route path="/results" element={<Results />} />
			</Routes>
		</Router>
	);
}
