import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import '../assets/css/MyModal.css'

const items = [
	{
		id: 1,
		name: 'V88 T-Shirt LTD',
		price: 300,
		bought: false
	},
	{
		id: 2,
		name: 'V88 Cap LTD',
		price: 150,
		bought: false
	}
]

export default function MyModal({ cart, showModal, handleClose }) {
	const { name, address, contact, product1, product2 } = cart;

	const products = [product1, product2];

	const updatedItems = items.map((item, index) => {
		const quantity = products[index];
		const subtotal = item.price * quantity;
		const bought = quantity !== 0;

		return { ...item, quantity, subtotal, bought };
	});

	const total = updatedItems.reduce((acc, item) => acc + item.subtotal, 0);

	const renderProducts = () => {
		const boughtItems = updatedItems.filter((item) => item.bought);

		return boughtItems.map((item) => (
			<div key={item.id}>
				<p>
					{item.name} x {item.quantity} = PHP {item.subtotal}
				</p>
			</div>
		));
	}

	return (
		<div>
			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Order Complete!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="MyModal__ModalBody">
						<div>
							Customer Name:
							<p>{name}</p>
						</div>
						<div>
							Delivery Address:
							<p>{address}</p>
						</div>
						<div>
							Contact Number:
							<p>{contact}</p>
						</div>
						<div>Order Details:
							<div>{renderProducts()}</div>
						</div>
						<div>TOTAL: <span className="MyModal__Total">PHP {total}</span></div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
