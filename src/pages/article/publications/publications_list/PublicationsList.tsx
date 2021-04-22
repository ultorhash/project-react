import { Component } from 'react';
import { StyledPublicationsList } from './PublicationsListStyle';
import { Publication } from '../publication/publication/Publication';

export class PublicationsList extends Component
{
    render()
    {
        return (
            <StyledPublicationsList>
                <h3>Latest publications</h3>
                <Publication />
                <Publication />
                <Publication />
                <a href="https://google.com">See more publications</a>
            </StyledPublicationsList>
        )
    }
}