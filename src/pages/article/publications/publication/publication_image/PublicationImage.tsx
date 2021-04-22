import { Component } from 'react';
import { StyledPublicationImage } from '../publication_image/PublicationImageStyle';

export class PublicationImage extends Component<{imgSrc: string}>
{
    render()
    {
        return (
            <StyledPublicationImage>
                <img src={this.props.imgSrc} alt="" />
            </StyledPublicationImage>
        )
    }
}