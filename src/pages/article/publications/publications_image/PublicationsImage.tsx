import { Component } from 'react';
import { StyledPublicationsImage } from './PublicationsImageStyle';

import publications_image from '../../../../media/publications_image.png';

export class PublicationsImage extends Component
{
    render()
    {
        return (
            <StyledPublicationsImage>
                <img src={publications_image} alt="" />
            </StyledPublicationsImage>
        )
    }
}