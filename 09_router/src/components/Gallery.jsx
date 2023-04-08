import React from 'react'
import '../assets/css/Gallery.css'
import GalleryImg1 from '../assets/images/gallery_img1.jpg'
import GalleryImg2 from '../assets/images/gallery_img2.jpg'
import GalleryImg3 from '../assets/images/gallery_img3.jpg'

export default function Gallery() {
	const images = [
		{
			id: 1,
			src: GalleryImg1,
			alt: 'Gallery Image 1',
		},
		{
			id: 2,
			src: GalleryImg2,
			alt: 'Gallery Image 2',
		},
		{
			id: 3,
			src: GalleryImg3,
			alt: 'Gallery Image 3',
		}
	]

	return (
		<div className="Gallery">
			<div className="Gallery__group">
				<div className="Gallery__group__images">
					{
						images.map(image => (
							<img
								key={image.id}
								src={image.src}
								alt={image.alt}
							/>
						))
					}
				</div>
			</div>
		</div>
	)
}
