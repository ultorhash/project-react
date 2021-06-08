import { FC } from 'react';
import { StyledWorkspace } from './WorkspaceStyle';
import { WorkspaceDescription } from '../workspace_description/workspace_description/WorkspaceDescription';
import { WorkspaceStructs } from '../workspace_structs/workspace_structs/WorkspaceStructs';
import { Updates } from '../updates/updates/Updates';
import { useLocation } from 'react-router';

interface StateType {
    title: string;
    img: string;
}

export const Workspace: FC = () =>
{
    const { state } = useLocation<StateType>();

    return (
        <StyledWorkspace>
            <WorkspaceDescription title={state.title} img={state.img}/>
            <WorkspaceStructs />
            <Updates />
        </StyledWorkspace>
    )
}