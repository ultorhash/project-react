import { Component } from 'react';
import { StyledPublications } from './PublicationsStyle';
import { PublicationsList } from '../publications_list/PublicationsList';

import { PublicationsImage } from '../publications_image/publications_image/PublicationsImage';

export class Publications extends Component
{
    render()
    {
        return (
            <StyledPublications>
                <PublicationsImage />
                <PublicationsList />
            </StyledPublications>
        )
    }
}