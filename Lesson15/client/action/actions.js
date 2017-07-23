import { USERS } from "../consts/consts.js";

export const users = {
    getUsers: UsersList => ({type: USERS.GET_USERS, UsersList}),
    addUser: NewUser => ({type: USERS.ADD_USER, NewUser}),
    deleteUser: UsersBack => ({type: USERS.DELETE_USER, UsersBack}), //возвращает список с -1 пользователем
    editUser: UsersBack => ({type: USERS.EDIT_USER, UsersBack})//возвращает список с 1 одним отредактированным пользователем
}