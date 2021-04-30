import { Component } from 'react';
import { StyledWorkspacesContent } from './WorkspacesContentStyle';
import { WorkspacesSlider } from '../workspaces_slider/workspaces_slider/WorkspacesSlider';

export class WorkspacesContent extends Component
{
    render()
    {
        return (
            <StyledWorkspacesContent>
                <WorkspacesSlider />
            </StyledWorkspacesContent>
        )
    }
}