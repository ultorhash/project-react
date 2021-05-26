import { Component } from 'react';
import { StyledPublicationsImage } from './PublicationsImageStyle';
import { PublicationsText } from '../publications_text/PublicationsText';

import publications_image from '../../../../../media/buildings.jpg';

export class PublicationsImage extends Component
{
    render()
    {
        return (
            <StyledPublicationsImage>
                <img src={publications_image} alt="" />
                <PublicationsText />
            </StyledPublicationsImage>
        )
    }
}