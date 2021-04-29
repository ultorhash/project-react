import { FC } from 'react';
import { StyledPublicationsContent } from '../publication_content/PublicationContentStyle';
import { PublicationText } from '../publication_text/PublicationText';
import { PublicationAuthor } from '../publication_author/PublicationAuthor';

import { useSelector } from 'react-redux';
import { IState } from '../../../../../../reducers';
import { IUsersReducer } from '../../../../../../reducers/UsersReducers';

import profile_photo from '../../../../../../media/profile-photo.png';

export const PublicationContent: FC = () =>
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
        <StyledPublicationsContent>
            <PublicationText />
            <PublicationAuthor
                postDate={new Date().toLocaleDateString()}
                imgAuthor={usersList?.data[userNumber].avatar === undefined ? profile_photo : usersList?.data[userNumber].avatar}
                author={usersList?.data[userNumber].first_name + " " + usersList?.data[userNumber].last_name}
            />
        </StyledPublicationsContent>
    )
}