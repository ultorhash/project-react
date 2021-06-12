import { FC } from 'react';
import { StyledPublicationsContent } from '../publication_content/PublicationContentStyle';
import { PublicationText } from '../publication_text/PublicationText';
import { PublicationAuthor } from '../publication_author/PublicationAuthor';

interface IPublication {
    userName: string;
    content: string;
    userPhoto: string;
}

export const PublicationContent: FC<IPublication> = (props) =>
{
    return (
        <StyledPublicationsContent>
            <PublicationText content={props.content}/>
            <PublicationAuthor
                postDate={new Date().toLocaleDateString()}
                imgAuthor={props.userPhoto}
                author={props.userName}
            />
        </StyledPublicationsContent>
    )
}