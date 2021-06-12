import { Dispatch } from 'redux';
import * as actionTyps from '../actions/actionTypes/UserTypes';
import { ISingleUserData } from '../entities/Users';

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