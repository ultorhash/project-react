import { Component } from 'react';
import { StyledPublicationsContent } from '../publication_content/PublicationContentStyle';
import { PublicationText } from '../publication_text/PublicationText';
import { PublicationAuthor } from '../publication_author/PublicationAuthor';

import profile_photo from '../../../../../../media/profile-photo.png';

export class PublicationContent extends Component
{
    render()
    {
        return (
            <StyledPublicationsContent>
                <PublicationText />
                <PublicationAuthor postDate={"7 jan. 2020"} imgAuthor={profile_photo} author="John Doe"/>
            </StyledPublicationsContent>
        )
    }
}