import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { deck } from '../actions/index.js';
import { Link } from 'react-router-dom';

const mapStateToProps = ({decks, addingDeck}) => ({
	decks, 
	addingDeck
})

const mapDispatchToProps = dispatch => ({
	addDeck: (name) => dispatch(deck.addDeck(name)),
	showAddDeck: () => dispatch(deck.showAddDeck()),
	hideAddDeck: () => dispatch(deck.hideAddDeck())
})

class Sidebar extends React.Component {
	componentDidUpdate() {
		let el = ReactDOM.findDOMNode(this.refs.add);
		if(el) el.focus();
	}

	createDeck(evt) {
		if(evt.which != 13) return;

		let name = ReactDOM.findDOMNode(this.refs.add).value;
		this.props.addDeck(name);
		this.props.hideAddDeck();
	}

	render() {
		let props = this.props;
		console.log(props);
		return (
			<div className='sidebar'>
				<h2> All Decks </h2>
				<ul> 
					{
						props.decks.map((deck, i) => {
							return <li key={deck.id}>
								<Link to={`/deck/${deck.id}`}> {deck.name} </Link>
							</li>
						})
					}
				</ul>
				{ props.addingDeck && <input ref="add" onKeyPress={(e) => this.createDeck(e)} />}
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
