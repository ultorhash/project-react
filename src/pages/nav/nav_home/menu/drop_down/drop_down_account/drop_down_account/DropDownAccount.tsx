import { FC } from 'react';
import { StyledDropDownAccount } from './DropDownAccountStyle';
import { DropDownAccountInfo } from '../drop_down_account_info/DropDownAccountInfo';
import { DropDownAccountOption } from '../drop_down_account_option/DropDownAccountOption';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../../../reducers';
import { IUsersReducer } from '../../../../../../../reducers/UsersReducers';

import profileImage from '../../../../../../../media/profile-photo.png';
import privacy from '../../../../../../../media/privacy.png';
import settings from '../../../../../../../media/settings.png';
import { ISingleUserReducer } from '../../../../../../../reducers/SingleUsersReducers';

export const DropDownAccount: FC = () => 
{
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    const { singleUsersList } = useSelector<IState, ISingleUserReducer>(globalState => ({
        ...globalState.singleUsers
    }));

    return (
        <StyledDropDownAccount>
            <p>Account</p>

            <DropDownAccountInfo profileImage={usersList?.data === undefined ?
                profileImage : usersList?.data[2].avatar} user={singleUsersList[3]}/>

            <DropDownAccountOption imgLeft={privacy} title="Privacy"/>
            <DropDownAccountOption imgLeft={settings} title="Settings"/>
        </StyledDropDownAccount>
    )
}