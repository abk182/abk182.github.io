import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
	return (
		<div className='card'>
			<p> {card.front} </p>
			<Link className="btn" to={`/deck/{card.deckId}/edit/${card.id}`}> Link </Link>
		</div>
	)
}

export default Card;