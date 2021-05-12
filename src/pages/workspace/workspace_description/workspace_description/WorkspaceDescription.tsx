import { Component } from 'react';
import { StyledWorkspaceDescription } from './WorkspaceDescriptionStyle';
import { Photo } from '../photo/Photo';
import { Content } from '../content/content/Content';

import office from '../../../../media/office.jpg';

export class WorkspaceDescription extends Component
{
    render()
    {
        return (
            <StyledWorkspaceDescription>
                <Photo img={office}/>
                <Content />
            </StyledWorkspaceDescription>
        )
    }
}