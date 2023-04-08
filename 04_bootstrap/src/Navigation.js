import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
	return (
		<Container className="py-3">
			<Navbar expand="lg">
				<Navbar.Brand href="#home">pauvictorio</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link className="ms-4" href="https://drive.google.com/file/d/1gT2ECzgp2ZRS_gJuJsYsCFaC_j3VImX2/view?usp=sharing" target="_blank">Resume</Nav.Link>
						<Nav.Link className="ms-4" href="https://github.com/pauvictorio" target="_blank">GitHub</Nav.Link>
						<Nav.Link className="ms-4" href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	)
}
