import { Component } from 'react';
import { StyledSection } from './SectionStyle';
import { Aside } from '../../aside/aside/Aside';
import { Publications } from '../publications/publications/Publications';

export class Section extends Component
{
    render()
    {
        return (
            <StyledSection>
                <Aside />
                <Publications />
                {/* <Workspaces /> */}
            </StyledSection>
        )
    }
}