import { combineReducers } from 'redux';
import { ISingleUserPhoto } from '../entities/UsersPhotos';

import users, { IUsersReducer } from './UsersReducers';

export default combineReducers({
    users
})

export interface IState
{
    users: IUsersReducer;
    usersList: ISingleUserPhoto;
}