import Container from "react-bootstrap/Container";
import './assets/css/Footer.css'

export default function Footer() {
	return (
		<Container fluid className="Footer__container p-5 mt-5 d-flex flex-column align-items-center">
			<a href="#home" className="Footer__container__name align-self-center mb-5">pauvictorio</a>
			<div class="socials">
				<a href="https://github.com/pauvictorio" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github fa-lg mx-3"></i></a>
				<a href="https://www.linkedin.com/in/paulovictorio/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-lg mx-3"></i></a>
				<a href="https://twitter.com/ptvictorio" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter fa-lg mx-3"></i></a>
			</div>
		</Container>
	)
}
