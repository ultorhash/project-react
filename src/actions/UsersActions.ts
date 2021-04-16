import { Dispatch } from 'redux';
import * as actionTyps from '../actions/actionTypes/UserTypes';
import { ISingleUser } from '../entities/Users';

export const getUsers = (): Promise<any> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((usersList: ISingleUser) => {
            dispatch({
                type: actionTyps.GET_USERS,
                usersList
            })
        })
}) as any;