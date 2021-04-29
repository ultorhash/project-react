import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../reducers';
import { IUsersReducer } from '../../../../../reducers/UsersReducers';
import { StyledAsideProfileDesc } from './AsideProfileDescStyle';

export const AsideProfileDesc: FC = () =>
{
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    return (
        <StyledAsideProfileDesc>
            <h3>
                {usersList?.data[0].first_name + " " + usersList?.data[0].last_name}
            </h3>
            <p>Job title - Company</p>
        </StyledAsideProfileDesc>
    )
}