import { Component } from 'react';
import { StyledTitle } from './TitleStyle';

export class Title extends Component<{title: string}>
{
    render()
    {
        return (
            <StyledTitle>
                <h1>{this.props.title}</h1>
            </StyledTitle>
        )
    }
}