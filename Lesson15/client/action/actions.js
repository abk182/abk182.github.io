import { USERS } from "../consts/consts.js";

export const users = {
    getUsers: UsersList => ({type: USERS.GET_USERS, UsersList}),
    addUser: NewUser => ({type: USERS.ADD_USER, NewUser})
}