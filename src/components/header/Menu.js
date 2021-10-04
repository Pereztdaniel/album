import React, {Fragment} from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-scroll';


export default function Menu({state, place1, place2, place3, place4}) {

	return (
	<>
		<NavDropdown title={state} id="basic-nav-dropdown">
			<NavDropdown.Item href="/">
				<Link
					activeClass="active"
					to={place1}
					spy={true}
					smooth={true}
					offset={-100}
					duration={100}
				>
					{place1}
				</Link>
			</NavDropdown.Item>
			<NavDropdown.Item href="/">
				<Link
					activeClass="active"
					to={place2}
					spy={true}
					smooth={true}
					offset={-100}
					duration={100}
				>
					{place2}
				</Link>
			</NavDropdown.Item>
			<NavDropdown.Item href="/">
				<Link
					activeClass="active"
					to={place3}
					spy={true}
					smooth={true}
					offset={-100}
					duration={100}
				>
					{place3}
				</Link>
			</NavDropdown.Item>
			<NavDropdown.Item href="/">
				<Link
					activeClass="active"
					to={place4}
					spy={true}
					smooth={true}
					offset={-100}
					duration={100}
				>
					{place4}
				</Link>
			</NavDropdown.Item>
		</NavDropdown>
	</>
);
}