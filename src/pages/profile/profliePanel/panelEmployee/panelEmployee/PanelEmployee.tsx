import { FC } from 'react';
import { StyledPanelEmployee } from './PanelEmployeeStyle';
import { OptionWithImg } from '../../../../reused_components/option_with_img/OptionWithImg';
import { Employee } from '../employee/Employee';

import chat from '../../../../../media/chat.png';
import profile from '../../../../../media/profile.png';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../reducers';
import { IUsersReducer } from '../../../../../reducers/UsersReducers';

import profile_photo from '../../../../../media/profile-photo.png';

export const PanelEmployee: FC = () =>
{
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    let userNumber: number = 0;
    if (usersList?.data.length !== undefined)
    {
        userNumber = Math.floor(Math.random() * usersList?.data.length);
    }

    return (
        <StyledPanelEmployee>
            <Employee img={usersList?.data[userNumber].avatar === undefined ? profile_photo : usersList?.data[userNumber].avatar}
            person={usersList?.data[userNumber].first_name + " " + usersList?.data[userNumber].last_name}/>
            <OptionWithImg img={chat} title="Message"/>
            <OptionWithImg img={profile} title="Profile"/>
        </StyledPanelEmployee>
    )
}