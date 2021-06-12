import { combineReducers } from 'redux';

import users, { IUsersReducer } from './UsersReducers';
import singleUsers, { ISingleUserReducer } from './SingleUsersReducers';
import publications, { IPublicationsReducer } from './PublicationsReducers';

export default combineReducers({
    users,
    singleUsers,
    publications
})

export interface IState
{
    users: IUsersReducer;
    singleUsers: ISingleUserReducer;
    publications: IPublicationsReducer;
}