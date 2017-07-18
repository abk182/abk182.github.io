import { USER } from '../consts/index.js';

export const firstReducer = (state = {userName:''}, action) => {
		switch(action.type) {
			case USER.ADD_USER: 
				console.log(action);
				return state;
			default: return state;
		}
}