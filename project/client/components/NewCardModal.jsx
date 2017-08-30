import CardModal from './CardModal.jsx';
import {connect} from 'react-redux';
import {card} from '../actions/index.js';

const mapStateToProps = (props, params) => {
	const deckId = params.match.params.deckId;

	return {
		card: {deckId}
	}
}

const mapDispatchToProps = dispatch => ({
	onSave: card => dispatch(card.addCard(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
