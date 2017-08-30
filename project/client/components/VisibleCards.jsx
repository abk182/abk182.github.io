import React from 'react';
import Card from './Card.jsx';
import {connect} from 'react-redux';
import fuzzysearch from 'fuzzysearch';

const matches = (filter, card) => 
	fuzzysearch(filter, card.front) || fuzzysearch(fitler, card.back);

const mapStateToProps = ({cards, cardFilter}, params) => {
	const deckId = params.match.params.deckId;
	console.log(deckId);
	return {
		cards: card.filter(c => c.deckId === deckId && matches(cardFilter, c))
	}
}

const Cards = ({ cards, children }) => {
	return (<div className="main">
			{
				cards.map(card => <Card card={card} key={card.id} />)
			}
			{children}
		</div>);

}

export default connect(mapStateToProps)(Cards);
