import { Dispatch } from 'redux';
import * as actionTyps from '../actions/actionTypes/UserTypes';
import { ISingleUser } from '../entities/Users';
import { ISingleUserData } from '../entities/Users';

export const getUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersList: ISingleUser) => {
            dispatch({
                type: actionTyps.GET_USERS,
                usersList
            })
        })
}) as any;

export const getUsers2 = (): Promise<ISingleUserData> => ((dispatch: Dispatch) => {
    return fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then((usersList: ISingleUserData) => {
            dispatch({
                type: actionTyps.GET_USERS_2,
                usersList
            })
        })
}) as any;