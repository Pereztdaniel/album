import React from 'react';
import Menu from './Menu.js';
import { Container, Navbar, Nav } from 'react-bootstrap';


export default function Header(){

	const menuItem = [
	{
		key: 1,
		state: 'Lara',
		place1: 'Cascada el Vino',
		place2: 'Humocaro Alto',
		place3: 'El Empedrado',
		place4: 'Yacambú'
	},
	{
		key: 2,
		state: 'D. Capital',
		place1: 'Caracas',
		place2: 'Guarenas',
		place3: '' ,
		place4: ''

	},
	{
		key: 3,
		state: 'Carabobo',
		place1: 'Patanemo',
		place2: 'Yapascua',
		place3: '',
		place4: ''

	},
	{
		key: 4,
		state: 'Aragua',
		place1: 'Bahia de Cata',
		place2: 'Choroní',
		place3: '',
		place4: ''

	},
	{
		key: 5,
		state: 'Mérida',
		place1: 'Cd. Mérida',
		place2: 'Laguna Mucubaji',
		place3: '',
		place4: ''
	}]

	return (
	<>
		<div className="banner text-center p-2">
			<Navbar variant="dark"  expand="lg">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							{menuItem.map(
								({ key, state, place1, place2, place3, place4 }) => (
									<Menu
										state={state}
										key={key}
										place1={place1}
										place2={place2}
										place3={place3} 
										place4={place4}
									/>
								)
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="glassmorphism rounded p-5">
				<h1 className="p-3 title">Viajando por Venezuela</h1>
				<hr />
			</div>
		</div>
	</>
);
}