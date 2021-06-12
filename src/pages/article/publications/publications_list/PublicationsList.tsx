import { FC } from 'react';
import { StyledPublicationsList } from './PublicationsListStyle';
import { Publication } from '../publication/publication/Publication';
import { Link } from 'react-router-dom';
import { ISingleUserReducer } from '../../../../reducers/SingleUsersReducers';
import { IPublicationsReducer } from '../../../../reducers/PublicationsReducers';
import { IState } from '../../../../reducers';
import { useSelector } from 'react-redux';
import { ISinglePublication } from '../../../../entities/Publications';
import { IUsersReducer } from '../../../../reducers/UsersReducers';

import profilePhoto from '../../../../media/profile-photo.png';

export const PublicationsList: FC = () =>
{
    const { singleUsersList } = useSelector<IState, ISingleUserReducer>(globalState => ({
        ...globalState.singleUsers
    }));

    const { publicationsList } = useSelector<IState, IPublicationsReducer>(globalState => ({
        ...globalState.publications
    }));

    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    let user = singleUsersList[3];
    let userPublications: ISinglePublication[] = [];

    publicationsList.forEach(p => {
        if (p.userId === user.id) userPublications.push(p);
    })

    userPublications.splice(0, 7); // get the last 3

    return (
        <StyledPublicationsList>
            <h3>Latest publications</h3>

            {userPublications.map(p => {
                return (<Publication userName={user.name} content={p.body} imgPhoto={usersList?.data[2].avatar !== undefined ?
                    usersList?.data[2].avatar : profilePhoto}/>)
            })}

            <Link to="/publications">See more publications</Link>
        </StyledPublicationsList>
    )
}