import { ISinglePublication } from '../entities/Publications';
import * as actionTypes from '../actions/actionTypes/PublicationsTypes';

export interface IPublicationsReducer {
    publicationsList: ISinglePublication[]
}

const defaultState = (): IPublicationsReducer => ({
    publicationsList: []
});

const publicationsAction = (state = defaultState(), action: any) => {
    switch (action.type)
    {
        case actionTypes.GET_PUBLICATIONS: {
            const payload: actionTypes.IPublicationsTypes['GET_PUBLICATIONS'] = action;
            return {
                ...state,
                publicationsList: payload.publicationsList
            }
        }

        default: {
            return state;
        }
    }
}

export default publicationsAction;