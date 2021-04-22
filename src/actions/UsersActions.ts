import { Dispatch } from 'redux';
import * as actionTyps from '../actions/actionTypes/UserTypes';
import { ISingleUser } from '../entities/Users';
import { ISingleUserPhoto } from '../entities/UsersPhotos';

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

export const getUsersPhotos = (): Promise<any> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((usersPhotosList: ISingleUserPhoto) => {
            dispatch({
                type: actionTyps.GET_USERS_PHOTOS,
                usersPhotosList
            })
        })
}) as any;