import React from 'react';
import { deck, cards } from '../actions/index.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
	showAddDeck: () => dispatch(deck.showAddDeck()),
	onFilter: (query) => dispatch(card.filterCards(query))
});

const Toolbar = ({deckId, showAddDeck, onFilter}) => {
	console.log(deckId);
	let deckTools = deckId ? (<div>
		<Link className="btn" to={`/deck/${deckId}/new`}> + New Card </Link>
		<Link className="btn" to={`/deck/${deckId}/study`}> Study Deck </Link>
		
		<input 
			onChange={e => onFilter(e.target.value)}
			className="search"
			type='search'
			placeholder="Search deck..." />

		</div>
	) : null;

	return (
		<div className="toolbar">
			<div>
				<button onClick={showAddDeck}> + New Deck </button>
			</div>
			{deckTools}
		</div> 
	)
}

export default connect(null, mapDispatchToProps)(Toolbar);
