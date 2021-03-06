import { ISingleUserData } from '../entities/Users';
import * as actionTypes from '../actions/actionTypes/UserTypes';

export interface IUsersReducer
{
    usersList: ISingleUserData | null;
}

const defaultState = (): IUsersReducer => ({
    usersList: null
});

const usersAction = (state = defaultState(), action: any) => {
    switch (action.type)
    {
        case actionTypes.GET_USERS_2: {
            const payload: actionTypes.IUserTypes['GET_USERS_2'] = action;
            return {
                ...state,
                usersList: payload.usersList
            }
        }

        default: {
            return state;
        }
    }
}

export default usersAction;