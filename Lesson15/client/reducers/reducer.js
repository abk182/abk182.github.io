import { getUsers } from './../requests/request.js'
import { USERS } from './../consts/consts.js'

//первоначальное состояние (да примера)
const initialState = {
	UsersList: ['Ivan','Chelovek','Katya']
}

export const Reducer_1 = (state=initialState,action) => {
	console.log(action);
	switch(action.type){
		case USERS.GET_USERS: return Object.assign({},state,action.UsersList);
		default: return state;
	}
	
}