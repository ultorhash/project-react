import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../reducers';
import { IUsersReducer } from '../../../../../reducers/UsersReducers';
import { StyledAsideProfilePhoto } from './AsideProfilePhotoStyle';

export const AsideProfilePhoto: FC = () =>
{
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    return (
        <StyledAsideProfilePhoto src={usersList?.data[0].avatar} />
    )
}