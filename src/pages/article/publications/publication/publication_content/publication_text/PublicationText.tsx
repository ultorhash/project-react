import { FC } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../../reducers';
import { IPublicationsReducer } from '../../../../../../reducers/PublicationsReducers';
import { StyledPublicationText } from '../publication_text/PublicationTextStyle';

export const PublicationText: FC = () => 
{
    const { publicationsList } = useSelector<IState, IPublicationsReducer>(globalState => ({
        ...globalState.publications
    }));

    let rnd = Math.floor(Math.random() * publicationsList.length);

    return (
        <StyledPublicationText>
            <p>{publicationsList[rnd]?.body}</p>
        </StyledPublicationText>
    )
}