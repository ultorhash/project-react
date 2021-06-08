import { Component } from 'react';
import { StyledPublicationsList } from './PublicationsListStyle';
import { Publication } from '../publication/publication/Publication';
import { Link } from 'react-router-dom';

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
                <Link to="/publications">See more publications</Link>
            </StyledPublicationsList>
        )
    }
}