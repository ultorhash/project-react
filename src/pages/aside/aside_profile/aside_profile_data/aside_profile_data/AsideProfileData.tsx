import { FC } from 'react';
import { StyledAsideProfileData } from './AsideProfileDataStyle';
import { AsideProfilePhoto } from '../aside_profile_photo/AsideProfilePhoto';
import { AsideProfileDesc } from '../aside_profile_desc/AsideProfileDesc';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../reducers';
import { IUsersReducer } from '../../../../../reducers/UsersReducers';

import profilePhoto from '../../../../../media/profile-photo.png';
import { ISingleUserReducer } from '../../../../../reducers/SingleUsersReducers';

export const AsideProfileData: FC = () => 
{
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    const { singleUsersList } = useSelector<IState, ISingleUserReducer>(globalState => ({
        ...globalState.singleUsers
    }));

    return (
        <StyledAsideProfileData>
            <AsideProfilePhoto imgPhoto={usersList?.data[2].avatar !== undefined ? usersList?.data[2].avatar : profilePhoto}/>
            <AsideProfileDesc company={singleUsersList[3]?.company.name}/>
        </StyledAsideProfileData>
    )
}