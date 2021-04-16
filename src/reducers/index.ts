import { combineReducers } from 'redux';

import users, { IUsersReducer } from './UsersReducers';

export default combineReducers({
    users
})

export interface IState
{
    users: IUsersReducer;
}