import Container from "react-bootstrap/Container";
import './assets/css/Contact.css'
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function Contact() {
	return (
		<Container className="p-5">
			<div id="contact" className="d-flex flex-column p-5 mx-auto">
				<h2 className="align-self-center">Leave me a message.</h2>
				<p className="align-self-center mb-5">I would love to hear from you.</p>
				<Form>
					<div className="d-flex gap-3">
						<FloatingLabel
							controlId="floatingInput"
							label="Name"
							className="mb-3 w-50"
						>
							<Form.Control type="text" placeholder="Name" />
						</FloatingLabel>
						<FloatingLabel
							controlId="floatingInput"
							label="Email address"
							className="mb-3 w-50"
						>
							<Form.Control type="email" placeholder="name@example.com" />
						</FloatingLabel>
					</div>
					<FloatingLabel
						controlId="floatingTextarea"
						label="Message"
						className="mb-3"
					>
						<Form.Control
							as="textarea"
							placeholder="Leave a message here"
							style={{ height: '100px' }}
						/>
					</FloatingLabel>
					<Button variant="outline-dark" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		</Container>
	)
}
