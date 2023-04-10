import React from 'react'
import '../assets/css/ImageList.css'

export default function ImageList({ images }) {
	return (
		<div className="ImageList">
			{
				images.map((image, index) => {
					return (
						<div key={index} className="ImageList__item">
							<img src={image.urls.regular} alt={image.alt_description} />
						</div>
					)
				})
			}
		</div>
	)
}
