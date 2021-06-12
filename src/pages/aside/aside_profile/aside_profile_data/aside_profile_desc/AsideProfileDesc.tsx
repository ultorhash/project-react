import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../reducers';
import { ISingleUserReducer } from '../../../../../reducers/SingleUsersReducers';
import { StyledAsideProfileDesc } from './AsideProfileDescStyle';

export const AsideProfileDesc: FC<{company: string}> = (props) =>
{
    const { singleUsersList } = useSelector<IState, ISingleUserReducer>(globalState => ({
        ...globalState.singleUsers
    }));

    return (
        <StyledAsideProfileDesc>
            <h3>
                {singleUsersList[3]?.name}
            </h3>
            <p>{props.company}</p>
        </StyledAsideProfileDesc>
    )
}