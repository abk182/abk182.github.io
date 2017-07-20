import { getUsers } from './../requests/request.js'
import { USERS } from './../consts/consts.js'

//первоначальное состояние (да примера)
const initialState = {
	UsersList: []
};

export const Reducer_1 = (state=initialState,action) => {
	console.log(action);
	switch(action.type){
		case USERS.GET_USERS: return Object.assign({},state,{ UsersList: action.UsersList});
		case USERS.ADD_USER:
			return  Object.assign({},state,{ UsersList: action.NewUser});
		default: return state;
	}
};