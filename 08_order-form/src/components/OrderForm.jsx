import React, { useState } from 'react';
import '../assets/css/OrderForm.css';

export default function OrderForm({ onAddtoCart }) {
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [contact, setContact] = useState('');
	const [product1, setProduct1] = useState('');
	const [product2, setProduct2] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onAddtoCart(name, address, contact, product1, product2);
		setName('');
		setAddress('');
		setContact('');
		setProduct1('');
		setProduct2('');
	}

	return (
		<div className="OrderForm">
			<h1 className="OrderForm__header">Order Form</h1>
			<form className="OrderForm__form" onSubmit={handleSubmit}>
				<div className="OrderForm__form__group">
					<label htmlFor="name">Customer Name: </label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className="OrderForm__form__group">
					<label htmlFor="address">Delivery Address: </label>
					<textarea
						name="address"
						id="address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>

				<div className="OrderForm__form__group">
					<label htmlFor="contact">Contact Number: </label>
					<input
						type="text"
						name="contact"
						id="contact"
						value={contact}
						onChange={(e) => setContact(e.target.value)}
					/>
				</div>

				<div className="OrderForm__form__subform">
					<h2 className="OrderForm__form__subform__header">Products</h2>
					<div className="OrderForm__form__subform__container">
						<div className="OrderForm__form__subform__container__group">
							<label htmlFor="product1">
								Limited Edition V88 T-shirt
							</label>
							<input
								type="number"
								min="0"
								max="99"
								name="product1"
								id="product1"
								value={product1}
								onChange={(e) => setProduct1(e.target.value)}
							/>
						</div>
						<div className="OrderForm__form__subform__container__group">
							<label htmlFor="product2">
								Limited Edition V88 Cap
							</label>
							<input
								type="number"
								min="0"
								max="99"
								name="product2"
								id="product2"
								value={product2}
								onChange={(e) => setProduct2(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<button className="OrderForm__form__submit-btn" type="submit">Place Order</button>
			</form>
		</div>
	)
}
