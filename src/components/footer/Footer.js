import React from 'react';

export default function Footer({fecha}){

	return (
	<div className="text-center bg-red p-1 fw-bold">
		<p className="mt-4">Realizado y Diseñado por Daniel Pérez</p>

		<a
			href="https://www.instagram.com/pereztdaniel/"
			className="ig"
			target="_blank"
		>
			<i className="fab fa-instagram"></i>
		</a>
		<a
			href="https://github.com/Pereztdaniel"
			className="ig"
			target="_blank"
		>
			<i className="fab fa-github"></i>
		</a>
		<p>{fecha}</p>
	</div>
);
}