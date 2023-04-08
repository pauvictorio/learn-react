import Container from "react-bootstrap/Container";
import './assets/css/Hero.css'
import Avatar from './assets/images/avatar.jpg'

export default function Hero() {
	return (
		<Container className="Hero__container">
			<div className="Hero__container__text">
				<h1 className="hero-text">hi, i'm paulo</h1>
				<p className="hero-subtext">software engineer</p>
			</div>
			<img className="hero-img" src={Avatar} alt="hero-avatar" />
		</Container>
	)
}