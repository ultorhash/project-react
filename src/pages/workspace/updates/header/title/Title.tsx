import { Component } from 'react';
import { StyledTitle } from './TitleStyle';

export class Title extends Component
{
    render()
    {
        return (
            <StyledTitle>
                <h2>Latest updates</h2>
            </StyledTitle>
        )
    }
}