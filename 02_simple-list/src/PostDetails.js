import React from 'react';
import './PostDetails.css';

export default function PostDetails(props) {
	const { posts } = props;

	return (
		<div className="Post">
			{
				posts.map((post, index) => (
					<div className="Post__card" key={index}>
						<img className="Post__card__image" src={post.image} alt={post.alt} />
						<div className="Post__card__content">
							<div className="Post__card__content__header">
								<h3 className="Post__card__content__header__name">{post.name}</h3>
								<div className="Post__card__content__header__datetime">{post.date} {post.time}</div>
							</div>
							<div className="Post__card__content__message">{post.message}</div>
						</div>
					</div>
				))
			}
		</div>
	)
}
