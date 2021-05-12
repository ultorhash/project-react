import { Component } from 'react';
import { StyledWorkspace } from './WorkspaceStyle';
import { WorkspaceDescription } from '../workspace_description/workspace_description/WorkspaceDescription';
import { WorkspaceStructs } from '../workspace_structs/workspace_structs/WorkspaceStructs';

export class Workspace extends Component
{
    render()
    {
        return (
            <StyledWorkspace>
                <WorkspaceDescription />
                <WorkspaceStructs />
            </StyledWorkspace>
        )
    }
}