import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PostDetails from './PostDetails';
import Posts from './Posts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<PostDetails posts={Posts}/>
	</React.StrictMode>
);