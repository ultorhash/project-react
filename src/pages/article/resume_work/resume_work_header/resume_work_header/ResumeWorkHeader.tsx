import { Component } from 'react';
import { StyledResumeWorkHeader } from '../resume_work_header/ResumeWorkHeaderStyle';
import { Title } from '../title/Title';
import { SearchInput } from '../search_input/SearchInput'; 
import { RWFollowed } from '../followed/RWFollowed'

import search from '../../../../../media/search.svg';

export class ResumeWorkHeader extends Component
{
    render()
    {
        return (
            <StyledResumeWorkHeader>
                <Title />
                <SearchInput imgSrc={search}/>
                <RWFollowed />
            </StyledResumeWorkHeader>
        )
    }
}