import React, {Fragment} from 'react';
import Gallery from './modal/Modal';

import cs1 from './img/cascada-1.JPG';
import cs2 from './img/cascada-2.JPG';
import cs3 from './img/cascada-3.JPG';
import cs4 from './img/cascada-4.JPG';

import ct1 from './img/cata-1.jpg';
import ct2 from './img/cata-2.jpg';
import ct3 from './img/cata-3.jpg';
import ct4 from './img/cata-4.jpg';

import ba1 from './img/ba-1.JPG';
import ba2 from './img/ba-2.JPG';
import ba3 from './img/ba-3.JPG';
import ba4 from './img/ba-4.JPG';

import pa1 from './img/patanemo-1.JPG';
import pa2 from './img/patanemo-2.JPG';
import pa3 from './img/patanemo-3.jpg';
import pa4 from './img/patanemo-4.png';

import ca1 from './img/caracas-1.JPG';
import ca2 from './img/caracas-2.JPG';
import ca3 from './img/caracas-3.JPG';
import ca4 from './img/caracas-4.JPG';

import mc1 from './img/mucubaji-1.JPG';
import mc2 from './img/mucubaji-2.JPG';
import mc3 from './img/mucubaji-3.JPG';
import mc4 from './img/mucubaji-4.JPG';

import ya1 from './img/yapascua-1.JPG';
import ya2 from './img/yapascua-2.JPG';
import ya3 from './img/yapascua-3.JPG';
import ya4 from './img/yapascua-4.JPG';

import gu1 from './img/guarenas-1.JPG';
import gu2 from './img/guarenas-2.JPG';
import gu3 from './img/guarenas-3.JPG';
import gu4 from './img/guarenas-4.JPG';

import mk1 from './img/mukumbari-1.JPG';
import mk2 from './img/mukumbari-2.JPG';
import mk3 from './img/mukumbari-3.JPG';
import mk4 from './img/mukumbari-4.JPG';

import ch1 from './img/choroni-1.JPG';
import ch2 from './img/choroni-2.JPG';
import ch3 from './img/choroni-3.JPG';
import ch4 from './img/choroni-4.JPG';

import re1 from './img/reyes-1.JPG';
import re2 from './img/reyes-2.JPG';
import re3 from './img/reyes-3.JPG';
import re4 from './img/reyes-4.JPG';

import yc1 from './img/yacambu-1.JPG';
import yc2 from './img/yacambu-2.JPG';
import yc3 from './img/yacambu-3.JPG';
import yc4 from './img/yacambu-4.JPG';

import { Card, Row, Col } from 'react-bootstrap';

export default function Container(){

	const travelList = [
	{
		hero: cs1,	
		title: 'P.N. Dinira',
		info: 'Ubicado despúes del pueblo de Barbacoas, se encuentra el Parque Nacional Dinira, el más extenso del Estado Lara, este abarca 3 estados, Lara, Portuguesa y Trujillo. En esta zona se encuentra la cascada El vino, es llamada así por el color del agua de color vinotinto que cae desde la cima de la misma. Esta tonalidad es producida por la flora encontrada en la vertiente del rio',
		location: ' Barbacoas, Edo. Lara',
		hero2: cs2,
		hero3: cs3,
		hero4: cs4,
		place: 'Cascada el Vino'

	},
	{
		hero: ct1,
		title: 'P.N. Henri Pittier',
		info: 'La Bahia de Cata es una playa ubicada despúes del pueblo de Ocumare de la Costa, dentro de la zona costera del Parque Nacional Henri Pittier. Estas aguas son de poco oleaje y de color azul turquesa, adornada con palmeras a lo largo de la Bahia. Desde ahí se puede ir en lancha a otras playas como Catica, La Cienaga, la Boca, entre otras.',
		location: ' Bahia de Cata, Edo. Aragua',
		hero2: ct2,
		hero3: ct3,
		hero4: ct4,
		place: 'Bahia de Cata'

	},
	{
		hero: ba1,
		title: 'P.N. Dinira',
		info: 'Este sector del P.N. Dinira, está ubicado en el area de Buenos Aires, perteneciente al pueblo de Humocaro Alto dentro del edo. Lara. En esta zona del parque cuenta con rios y espacios grandes que lo hacen ideal para acampar. A su vez, forma parte de una ruta de excursión atráves de las montañas Larenses, hacia el Paramo Cendé ubicado en el Estado Trujillo.',
		location: ' Humocaro Alto, Edo. Lara',
		hero2: ba2,
		hero3: ba3,
		hero4: ba4,
		place: 'Humocaro Alto'

	},
	{
		hero: pa1,
		title: 'P.N. San Esteban',
		info: 'Despúes de la ciudad de Puerto Cabello, se encuentra la Bahia de Patanemo, una playa perteneciente al Parque Nacional San Estaban, esta playa cuenta con un oleaje moderado, por lo que es ideal para surfistas. Tiene una extensa aréa de palmeras, rios y cuenta con la laguna La Bocaina rodeada de vegetación de manglares. ',
		location: ' Patanemo, Edo. Carabobo',
		hero2: pa2,
		hero3: pa3,
		hero4: pa4,
		place: 'Patanemo'

	},
	{
		hero: ca1,
		title: 'P.N. Waraira Repano',
		info: 'Este es un mirador hacia la ciudad de Caracas, conocido como "Piedra del Indio", es una de las tantas zonas de trekking dentro del parque y para llegar hasta ahi se debe realizar una caminata de aproximadamente 1 hora. Ofrece unas grandes vistas completas a la gran ciudad. Desde ahi se puede llegar a diferentes rutas de trekking como: cascada Paraiso, Pico Oriental, Estribo Duarte, entre otras. ',
		location: ' Caracas, Distrito Capital',
		hero2: ca2,
		hero3: ca3,
		hero4: ca4,
		place: 'Caracas'

	},
	{
		hero: mc1,
		title: 'P.N. Sierra Nevada',
		info: 'Dentro del Parque Nacional Sierra Nevada se encuentra la Laguna Mucubaji, a una altura de 3.540 m.s.n.m, un sitio ideal para pasar un rato en familia, con diferente areas de recreación y paseo a caballo. Cuenta con una espectacular Laguna, cascadas, zonas de camping y rutas de excursión hacia el pico Mukuñuque y Mifes ubicados a 4.670 y 4.630 m.s.n.m respectivamente.',
		location: ' Mucubaji, Edo. Mérida',
		hero2: mc2,
		hero3: mc3,
		hero4: mc4,
		place: 'Laguna Mucubaji'

	},
	{		
		hero: ya1,
		title: 'P.N. San Esteban',
		info: 'Detrás de las montañas al final de la playa de Patanemo, se encuentra un paraíso escondido conocido como la Ensenada de Yapascua, una playa de aguas calmadas, las cuales la protege un arrecife de coral a poca profundidad, una laguna de agua de mar con manglares y un fenomeno conocido como Bioluminiscencia, producido por fitoplanctons que alumbran las aguas en las noches más oscuras. Un excelente lugar para hacer snorkel en el arrecife y paddel surf en la laguna.',
		location: ' Patanemo, Edo. Carabobo',
		hero2: ya2,
		hero3: ya3,
		hero4: ya4,
		place: 'Yapascua'

	},
	{
		hero: gu1,
		title: 'P.N. Waraira Repano',
		info: 'En la ciudad de Guarenas, en las afueras de la gran Caracas, se encuentra una zona escondida que forma parte del Parque Nacional Waraira Repano, ideal para hacer trekking por la montaña, por medio de la vegetación hasta llegar a rios y cascadas que forman diferentes pozos de agua poco profundos. Sin embargo, es necesario ir con un guía que conozca la zona, debido a que el sendero no está marcado como en otros sectores del parque.',
		location: ' Guarenas, Edo. Miranda',
		hero2: gu2,
		hero3: gu3,
		hero4: gu4,
		place: 'Guarenas'

	},
	{
		hero: mk1,
		title: 'P.N. Sierra Nevada',
		info: 'Dentro de la ciudad de Merida, se encuentra el teleferico Mukumbarí, el cúal es el más largo y alto del mundo con 12,5 km de trayecto. Este tiene un recorrido por 5 estaciones diferentes, desde la ciudad hasta llegar al Pico Espejo, ubicado a 4.765 m.s.n.m. siendo el segundo más alto en Venezuela y esta ubicado dentro del P.N. Sierra Nevada. Desde ahí, se realizan excursiones de alta montaña hacia al Pico Bolívar, el más alto del país a 4.978 m.s.n.m.',
		location: ' Mérida, Edo. Mérida',
		hero2: mk2,
		hero3: mk3,
		hero4: mk4,
		place: 'Cd. Mérida'
	},
	{
		hero: ch1,
		title: 'P.N. Henri Pittier',
		info: 'Ubicado en la zona Costera del Estado Aragua, se encuentra otro pueblo playero dentro del parque Henri Pittier, conocido como Choroni, lleno de casas y posadas con fachadas españolas coloniales. su popular playa es conocida como "Playa Grande" pero desde ahí, se puede viajar en lancha para otras como: Chuao, Tuja, Cepe, Valle Seco, Arao, entre otras. Algo importante es que estas playas son importantes para el desove de las tortugas marinas. ',
		location: ' Choroni, Edo. Aragua',
		hero2: ch2,
		hero3: ch3,
		hero4: ch4,
		place: 'Choroní'

	},
	{
		hero: re1,
		title: 'El Empendrado',
		info: 'Este lugar es conocido como Quebrada los Reyes, esta ubicada en los limites del edo. Lara y Trujillo. Para llegar hasta ahí se puede entrar al pueblo de "El Empedrado", desde ahí realizar una caminata aproximada de 4 horas montaña arriba hasta llegar a diferentes pozos del río con cascadas que hacen del sitio un lugar hermoso.',
		location: ' La pastora, Edo. Lara',
		hero2: re2,
		hero3: re3,
		hero4: re4,
		place: 'El Empedrado'

	},
	{
		hero: yc1,
		title: 'P.N. Yacambú',
		info: 'En la zona montañosa del estado Lara, se encuentra una selva nublada. Hogar del oso Frontino, un animal que actualmente se encuentra en peligro de extinción. Además se encuentran otras especies como el mono araguato, los venados matacán y caramerudo, el cachicamo, guacharaca, serpiente de cascabel y la boa constrictor.',
		location: ' Sanare, Edo. Lara',
		hero2: yc2,
		hero3: yc3,
		hero4: yc4,
		place: 'Yacambú'

	}]


	return (
	<Fragment>
		<Row xs={1} md={2} className="p-3 pb-5 g-2">
			{travelList.map(({title, info, hero, location, hero2, hero3, hero4, place}) => (
				<Col>
					<Card border="warning" className="bg-warning" id={place}>
						<Card.Img variant="top" src={hero} alt={place}/>
						
						<Card.Body className="glass">
							<h2 id={place}><Card.Title className="text-center border-bottom">{title}</Card.Title></h2>
							<Card.Text className="justify p-1">
								<p>{info}</p>
							</Card.Text>
							<Card.Text>
								<h2><i className="fas fa-map-marked-alt"></i>{location}</h2>
							</Card.Text>
							<Gallery title={title} hero={hero} hero2={hero2} hero3={hero3} hero4={hero4} place={place}/>				
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	</Fragment>
);
}