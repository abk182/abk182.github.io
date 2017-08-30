import { DECK, CARD, RECEIVE_DATA } from '../consts/index.js';

export const deck = {
	addDeck: name => ({type: DECK.ADD_DECK, data: name}),
	showAddDeck: () => ({ type: DECK.SHOW_ADD_DECK }),
	hideAddDeck: () => ({ type: DECK.HIDE_ADD_DECK })
}

export const card = {
	addCard: (card) => ({ type: CARD.ADD_CARD, data: card }),
	updateCard: (card) => ({ type: CARD.UPDATE_CARD, data: card }),
	deleteCard: (cardId) => ({ type: CARD.UPDATE_CARD, data: cardId }),
	filterCards: (query) => ({ type: CARD.FILTER_CARD, data: query }),
	setShowBack: (back) => ({ type: CARD.SET_SHOW_BACK, data: back })
}

export const receiveData = (data) => ({ type: RECEIVE_DATA, data });

export const fetchData = () => {
	return dispatch => {
		fetch('/api/data')
			.then(res => res.json())
			.then(json => dispatch(receiveData(json)));
	}
}