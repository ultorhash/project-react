import { Component } from 'react';
import { StyledSection } from './SectionStyle';
import { Aside } from '../../aside/aside/Aside';

export class Section extends Component
{
    render()
    {
        return (
            <StyledSection>
                <Aside />
            </StyledSection>
        )
    }
}