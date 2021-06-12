import { Component } from 'react';
import { StyledPublication } from './PublicationStyle';
import { PublicationImage } from '../publication_image/PublicationImage';
import { PublicationContent } from '../publication_content/publication_content/PublicationContent';

import publication_image from '../../../../../media/publication_image.jpg';

export class Publication extends Component<{userName: string, content: string, imgPhoto: string}>
{
    render()
    {
        return (
            <StyledPublication>
                <PublicationImage imgSrc={publication_image}/>
                <PublicationContent userName={this.props.userName} content={this.props.content} userPhoto={this.props.imgPhoto}/>
            </StyledPublication>
        )
    }
}