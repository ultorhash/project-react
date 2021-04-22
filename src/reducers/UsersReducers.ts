import { ISingleUser } from '../entities/Users';
import { ISingleUserPhoto } from '../entities/UsersPhotos';
import * as actionTypes from '../actions/actionTypes/UserTypes';

export interface IUsersReducer
{
    usersList: ISingleUser[];
    usersPhotosList: ISingleUserPhoto[];
}

const defaultState = (): IUsersReducer => ({
    usersList: [],
    usersPhotosList: []
});

export default (state = defaultState(), action: any) => {
    switch (action.type)
    {
        case actionTypes.GET_USERS: {
            const payload: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: payload.usersList
            }
        }

        case actionTypes.GET_USERS_PHOTOS: {
            const payload: actionTypes.IUserTypes['GET_USERS_PHOTOS'] = action;
            return {
                ...state,
                usersPhotosList: payload.usersPhotosList
            }
        }

        default: {
            return state;
        }
    }
}