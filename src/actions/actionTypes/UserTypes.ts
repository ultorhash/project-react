import { ISingleUser } from '../../entities/Users';
import { ISingleUserData } from '../../entities/Users';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_2 = 'GET_USERS_2';

export interface IUserTypes
{
    GET_USERS: {
        usersList: ISingleUser[];
    }

    GET_USERS_2: {
        usersList: ISingleUserData;
    }
}