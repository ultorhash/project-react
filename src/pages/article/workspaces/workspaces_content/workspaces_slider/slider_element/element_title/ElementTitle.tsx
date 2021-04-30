import { Component } from 'react';
import { StyledElementTitle } from './ElementTitleStyle';

export class ElementTitle extends Component<{title: string}>
{
    render()
    {
        return (
            <StyledElementTitle>
                <a href="https://www.google.com">{this.props.title}</a>
            </StyledElementTitle>
        )
    }
}