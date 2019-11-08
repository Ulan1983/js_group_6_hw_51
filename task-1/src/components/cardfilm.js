import React from 'react';

const CardFilm = (props) => {
	return (
		<div>
			<h1>{props.name}</h1>
			<p>Год создания: {props.year}</p>
			<img src={props.img} alt='image'/>
		</div>
		)
};

export default CardFilm;