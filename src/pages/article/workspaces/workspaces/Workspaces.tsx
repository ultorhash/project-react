import { Component } from 'react';
import { StyledWorkspaces } from '../workspaces/WorkspacesStyle';
import { WorkspacesHeader } from '../workspaces_header/WorkspacesHeader';
import { WorkspacesContent } from '../workspaces_content/workspaces_content/WorkspacesContent';

export class Workspaces extends Component
{
    render()
    {
        return (
            <StyledWorkspaces>
                <WorkspacesHeader text="Workspaces"/>
                <WorkspacesContent />
            </StyledWorkspaces>
        )
    }
}