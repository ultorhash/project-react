import { ISingleUserData } from '../../entities/Users';

export const GET_USERS_2 = 'GET_USERS_2';

export interface IUserTypes
{
    GET_USERS_2: {
        usersList: ISingleUserData;
    }
}