import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import './assets/css/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// Commented out StrictMode to avoid calling the API twice
	
	// <React.StrictMode>
		<App />
	// </React.StrictMode>
);
