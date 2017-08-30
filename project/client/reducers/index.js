import { DECK, CARD, RECEIVE_DATA } from '../consts/index.js';



export const decks = (state, action) => {
	console.log(state);
	switch(action.type) {
		case RECEIVE_DATA: 
			return action.data.decks || state;
			
		case DECK.ADD_DECK: 
			let newDeck = { name: action.data, id: +new Date }
			return state.concat([newDeck]);

		default: return state || []
	}
}

export const addingDeck = (state, action) => {
	switch(action.type) {
		case DECK.SHOW_ADD_DECK: return true;
		case DECK.HIDE_ADD_DECK: return false;
		default: return !!state;
	}
}