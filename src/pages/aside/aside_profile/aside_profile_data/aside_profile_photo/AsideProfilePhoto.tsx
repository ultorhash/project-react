import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../reducers';
import { IUsersReducer } from '../../../../../reducers/UsersReducers';
import { StyledAsideProfilePhoto } from './AsideProfilePhotoStyle';
import profilePhoto from '../../../../../media/profile-photo.png';

export const AsideProfilePhoto: FC = () =>
{
    const { usersPhotosList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    return (
        <StyledAsideProfilePhoto src={usersPhotosList.length !== 0 ? usersPhotosList[1].url : profilePhoto} />
    )
}