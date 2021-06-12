import { ISingleUser } from '../entities/SingleUser';
import * as actionTypes from '../actions/actionTypes/SingleUserTypes';

export interface ISingleUserReducer {
    singleUsersList: ISingleUser[];
}

const defaultState = (): ISingleUserReducer => ({
    singleUsersList: []
});

const singleUsersAction = (state = defaultState(), action: any) => {
    switch (action.type)
    {
        case actionTypes.GET_SINGLEUSERS: {
            const payload: actionTypes.ISingleUserTypes['GET_SINGLEUSERS'] = action;
            return {
                ...state,
                singleUsersList: payload.singleUsersList
            }
        }

        default: {
            return state;
        }
    }
}

export default singleUsersAction;