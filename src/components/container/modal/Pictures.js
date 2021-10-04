import React, {Fragment} from 'react';
import { Carousel } from 'react-bootstrap';

export default function Pictures( {title, hero, hero2, hero3, hero4, place} ){

	return (
	<>
		<Carousel>
			<Carousel.Item>
				<img className="d-block w-100 fakeimg" 
				src={hero} 
				alt={place}/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 fakeimg"
					src={hero2}
					alt={place}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 fakeimg"
					src={hero3}
					alt={place}
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 fakeimg"
					src={hero4}
					alt={place}
				/>
			</Carousel.Item>
		</Carousel>
	</>
);
}