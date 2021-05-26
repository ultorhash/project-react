import { FC } from 'react';
import { StyledPublicationsText } from './PublicationsTextStyle';
import { PublicationAuthor } from '../../publication/publication_content/publication_author/PublicationAuthor';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../reducers';
import { IUsersReducer } from '../../../../../reducers/UsersReducers';

import profile_photo from '../../../../../media/profile-photo.png';

export const PublicationsText: FC = () => 
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
        <StyledPublicationsText>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, illum!</p>

            <PublicationAuthor
                postDate={new Date().toLocaleDateString()}
                imgAuthor={usersList?.data[userNumber].avatar === undefined ? profile_photo : usersList?.data[userNumber].avatar}
                author={usersList?.data[userNumber].first_name + " " + usersList?.data[userNumber].last_name}
            />
        </StyledPublicationsText>
    )
}