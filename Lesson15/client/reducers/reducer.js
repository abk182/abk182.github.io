import { getUsers } from './../requests/request.js'
import { USERS } from './../consts/consts.js'



export const Reducer_1 = (state={
	UsersList: []
},action) => {
	console.log(action);
	switch(action.type){
		case USERS.GET_USERS: return Object.assign({},state,{ UsersList: action.UsersList});
		case USERS.ADD_USER:
			return  Object.assign({},state,{ UsersList: action.NewUser});
		case USERS.DELETE_USER:
			return Object.assign({},state,{ UsersList: action.UsersBack});
		case USERS.EDIT_USER:
            return Object.assign({},state,{ UsersList: action.UsersBack});
		default: return state;
	}
};