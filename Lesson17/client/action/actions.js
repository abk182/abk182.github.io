import { GET_USERS, DELETE_USER, ADD_USER, EDIT_USER } from "../consts/consts.js";

export const getUsers = {
    pending: () => ({type: GET_USERS.GET_USERS_PENDING}),
    success: (UsersList) => ({type: GET_USERS.GET_USERS_SUCCESS, UsersList}),
    error: (error) => ({type: GET_USERS.GET_USERS_ERROR, error})
};

export const deleteUser = {
    pending: (Id) => ({type: DELETE_USER.DELETE_USER_PENDING, Id}),
    success: (UsersList) => ({type: DELETE_USER.DELETE_USER_SUCCESS, UsersList}),
    error: (error) => ({type: DELETE_USER.DELETE_USER_ERROR, error})
};

export const addUser = {
    pending: (NewUser) => ({type: ADD_USER.ADD_USER_PENDING, NewUser}),
    success: (UsersList) => ({type: ADD_USER.ADD_USER_SUCCESS, UsersList}),
    error: (error) => ({type: ADD_USER.ADD_USER_ERROR, error})
};

export const editUser = {
    pending: (Id) => ({type: EDIT_USER.EDIT_USER_PENDING, Id}),
    success: (UsersList) => ({type: EDIT_USER.EDIT_USER_SUCCESS, UsersList}),
    error: (error) => ({type: EDIT_USER.EDIT_USER_ERROR, error})
};