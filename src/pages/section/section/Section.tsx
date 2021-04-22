import { Component } from 'react';
import { StyledSection } from './SectionStyle';
import { Aside } from '../../aside/aside/Aside';
import { Article } from '../../article/article/Article';

export class Section extends Component
{
    render()
    {
        return (
            <StyledSection>
                <Aside />
                <Article />
            </StyledSection>
        )
    }
}