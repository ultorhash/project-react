import { Component } from 'react';
import { StyledElementUpdate } from './ElementUpdateStyle';

export class ElementUpdate extends Component
{
    render()
    {
        return (
            <StyledElementUpdate>
                <p>Last update 2 days ago</p>
            </StyledElementUpdate>
        )
    }
}