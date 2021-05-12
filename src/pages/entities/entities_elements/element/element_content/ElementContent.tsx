import { Component } from 'react';
import { StyledElementContent } from './ElementContentStyle';

export class ElementContent extends Component<{title: string, content: string}>
{
    render()
    {
        return (
            <StyledElementContent>
                <a href="https://www.google.com"><h3>{this.props.title}</h3></a>
                <p>{this.props.content}</p>
            </StyledElementContent>
        )
    }
}