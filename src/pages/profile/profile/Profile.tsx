import { FC } from 'react';
import { StyledProfile } from './ProfileStyle';
import { ProfileDetails } from '../profileDetails/profileDetails/ProfileDetails';
import { ProfileTiles } from '../profileTiles/profileTiles/ProfileTiles';
import { ProfilePanel } from '../profliePanel/profilePanel/ProfilePanel';
import { ProfileTable } from '../profileTable/profileTable/ProfileTable';
import { SeeMore } from '../profileTable/seeMore/SeeMore';
import { ProfileFees } from '../profileFees/profileFees/ProfileFees';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { ISingleUserReducer } from '../../../reducers/SingleUsersReducers';
import { IUsersReducer } from '../../../reducers/UsersReducers';

export const Profile: FC = () =>
{
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    const { singleUsersList } = useSelector<IState, ISingleUserReducer>(globalState => ({
        ...globalState.singleUsers
    }));

    let user = {
        name: singleUsersList[3]?.name,
        userName: singleUsersList[3]?.username,
        email: singleUsersList[3]?.email,
        city: singleUsersList[3]?.address.city,
        phone: singleUsersList[3]?.phone,
        photo: usersList?.data[2].avatar
    }

    return (
        <StyledProfile>
            <ProfileDetails user={user}/>
            <ProfileTiles />
            <ProfilePanel />
            <ProfileTable header="Proposals" isFirm={true} />
            <SeeMore isLeft={false} title="proposals" color="#66b3cc"/>
            <ProfileTable header="Internal reviews" isFirm={false}/>
            <SeeMore isLeft={true} title="Reviews" color="#404040"/>
            <ProfileFees />
        </StyledProfile>
    )
}