import React from 'react'
import '../assets/css/Home.css';
import HeroImg from '../assets/images/hero_avatar.jpg';

export default function Home() {
	return (
		<div className="Home">
			<div className="Home__hero">
				<div className="Home__hero__main">
					<h1 className="Home__hero__main__text">hi, i'm Paulo</h1>
					<img
						className="Home__hero__main__img"
						src={HeroImg}
						alt="hero"
					/>
				</div>

				<div className="Home__hero__footer">
					<a
						href="https://github.com/pauvictorio"
						target="_blank" rel="noopener noreferrer"
					>
						<i className="fa-brands fa-github fa-lg mx-3" />
					</a>
					<a
						href="https://www.linkedin.com/in/paulovictorio/"
						target="_blank" rel="noopener noreferrer"
					>
						<i className="fa-brands fa-linkedin fa-lg mx-3" />
					</a>
					<a
						href="https://twitter.com/ptvictorio"
						target="_blank" rel="noopener noreferrer"
					>
						<i className="fa-brands fa-twitter fa-lg mx-3" />
					</a>
				</div>
			</div>
		</div>
	)
}
