import React from 'react';
import './CardStyle.css';
import logo from '../../assets/logo.png';

export const Card = (props) => {
	const { titulo } = props;
	return (
		<div className="cardContainer">
            <img src={logo} alt="LOGO"/>
			<h2>{titulo}</h2>
		</div>
	);
};