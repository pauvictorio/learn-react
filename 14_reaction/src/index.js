import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// Commented out the StrictMode since it was causes a double render
	
	// <React.StrictMode>
		<App />
	// </React.StrictMode>
);
