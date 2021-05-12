import { ISinglePublication } from '../../entities/Publications';

export const GET_PUBLICATIONS = 'GET_PUBLICATIONS';

export interface IPublicationsTypes
{
    GET_PUBLICATIONS: {
        publicationsList: ISinglePublication[];
    }
}