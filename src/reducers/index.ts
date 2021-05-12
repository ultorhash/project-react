import { combineReducers } from 'redux';

import users, { IUsersReducer } from './UsersReducers';
import publications, { IPublicationsReducer } from './PublicationsReducers';

export default combineReducers({
    users,
    publications
})

export interface IState
{
    users: IUsersReducer;
    publications: IPublicationsReducer
}