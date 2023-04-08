import React from 'react'
import HeroImg from '../assets/images/hero_avatar.jpg';
import '../assets/css/AboutMe.css'


export default function AboutMe() {
	return (
		<div className="AboutMe">
			<img
				className="AboutMe__img"
				src={HeroImg}
				alt="avatar"
			/>
			<div className="AboutMe__details">
				<p className="AboutMe__details__text">
					Hi, I'm Paulo. I'm a software engineer based in the Philippines.
					I'm passionate about building software that makes a difference.
				</p>
			</div>
		</div>
	)
}
