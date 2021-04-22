import { Component } from 'react';
import { StyledResumeWorkHeader } from '../resume_work_header/ResumeWorkHeaderStyle';
import { Title } from '../title/Title';
import { SearchInput } from '../search_input/SearchInput'; 
import { Followed } from '../followed/Followed'; 

import search from '../../../../../media/search.png';

export class ResumeWorkHeader extends Component
{
    render()
    {
        return (
            <StyledResumeWorkHeader>
                <Title />
                <SearchInput imgSrc={search}/>
                <Followed />
            </StyledResumeWorkHeader>
        )
    }
}