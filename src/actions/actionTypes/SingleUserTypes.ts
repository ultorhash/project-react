import { ISingleUser } from '../../entities/SingleUser';

export const GET_SINGLEUSERS = 'GET_SINGLEUSERS';

export interface ISingleUserTypes
{
    GET_SINGLEUSERS: {
        singleUsersList: ISingleUser[];
    }
}