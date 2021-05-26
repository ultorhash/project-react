import { Component } from 'react';
import { StyledColumnTitle } from './ColumnTitleStyle';

export class ColumnTitle extends Component<{title: string, hasUnderline: boolean}>
{
    render()
    {
        return (
            <StyledColumnTitle style={{border: this.props.hasUnderline ? "" : "none"}}>
                <p>{this.props.title}</p>
            </StyledColumnTitle>
        )
    }
}