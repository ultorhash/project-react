import { Dispatch } from 'redux';
import * as actionTyps from '../actions/actionTypes/SingleUserTypes';
import { ISingleUser } from '../entities/SingleUser';

export const getSingleUsers = (): Promise<ISingleUser[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((singleUsersList: ISingleUser) => {
            dispatch({
                type: actionTyps.GET_SINGLEUSERS,
                singleUsersList
            })
        })
}) as any;