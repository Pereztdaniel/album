import React, {useState, Fragment} from 'react';
import { Button, Modal } from 'react-bootstrap';
import Pictures from './Pictures';

export default function Gallery( {title, hero, hero2, hero3, hero4, place} ){

	const [show, setShow] = useState(false);

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);

  	return (
	<>
		<Button className="btn" onClick={handleShow}>
			Ver más Fotos
		</Button>

		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>

				<Pictures title={title} hero={hero} hero2={hero2} hero3={hero3} hero4={hero4} place={place}/>

			</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	</>
);

}