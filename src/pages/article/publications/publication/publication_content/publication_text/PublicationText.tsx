import { Component } from 'react';
import { StyledPublicationText } from '../publication_text/PublicationTextStyle';

export class PublicationText extends Component
{
    render()
    {
        return (
            <StyledPublicationText>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
                dolorem doloremque. Iste numquam, eligendi sit porro totam cum nostrum sint!</p>
            </StyledPublicationText>
        )
    }
}