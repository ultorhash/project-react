import { Dispatch } from 'redux';
import * as actionTyps from '../actions/actionTypes/PublicationsTypes';
import { ISinglePublication } from '../entities/Publications';

export const getPublications = (): Promise<ISinglePublication[]> => ((dispatch: Dispatch) => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((publicationsList: ISinglePublication) => {
            dispatch({
                type: actionTyps.GET_PUBLICATIONS,
                publicationsList
            })
        })
}) as any;