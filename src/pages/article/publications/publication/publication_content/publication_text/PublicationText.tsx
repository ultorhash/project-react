import { Component } from 'react';
import { StyledPublicationText } from '../publication_text/PublicationTextStyle';

export class PublicationText extends Component<{content: string}>
{
    render()
    {
        return (
            <StyledPublicationText>
                <p>{this.props.content}</p>
            </StyledPublicationText>
        )
    }
}