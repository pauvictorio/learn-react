import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import OrderForm from './components/OrderForm';
import MyModal from './components/MyModal';

export default function App() {
	const [cart, setCart] = useState([]);
	const [showModal, setShowModal] = useState(false); 

	const addToCart = (...args) => {
		const name = args[0];
		const address = args[1];
		const contact = args[2];
		const product1 = args[3];
		const product2 = args[4];
		setCart({ name, address, contact, product1, product2 });
		setShowModal(true);
	}

	const handleClose = () => setShowModal(false);

	return (
		<div className="App">
			<OrderForm onAddtoCart={addToCart} />
			<MyModal cart={cart} showModal={showModal} handleClose={handleClose} />
		</div>
	);
}
