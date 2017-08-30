import {card} from '../actions/index.js';
import { connect } from 'react-redux';
import CardModal from './CardModal.jsx';

const mapStateToProps = ({ cards }, params) => {
  console.log(params);
  const cardId = 1;
  return {
    card: cards.filter(card => card.id === parseInt(cardId, 10))[0]
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: card => dispatch(card.updateCard(card)),
  onDelete: cardId => dispatch(card.deleteCard(cardId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);

