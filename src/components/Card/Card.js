import React from 'react';
import './CardStyle.css';
import logo from '../../assets/logo.png';

export const Card = (props) => {
	const { titulo } = props;
	return (
		<div className="cardContainer">
            <img className='imagenCard' src={logo} alt="LOGO"/>
			<h2 className='tituloCard'>{titulo}</h2>
		</div>
	);
};