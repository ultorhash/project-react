import { ISingleUser } from '../../entities/Users';
import { ISingleUserPhoto } from '../../entities/UsersPhotos';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_PHOTOS = 'GET_USERS_PHOTOS';

export interface IUserTypes
{
    GET_USERS: {
        usersList: ISingleUser[];
    }

    GET_USERS_PHOTOS: {
        usersPhotosList: ISingleUserPhoto[];
    }
}