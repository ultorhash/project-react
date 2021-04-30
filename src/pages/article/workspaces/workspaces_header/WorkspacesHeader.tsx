import { Component } from 'react';
import { StyledWorkspacesHeader } from './WorkspacesHeaderStyle';

export class WorkspacesHeader extends Component<{text: string}>
{
    render()
    {
        return (
            <StyledWorkspacesHeader>
                <h3>{this.props.text}</h3>
            </StyledWorkspacesHeader>
        )
    }
}