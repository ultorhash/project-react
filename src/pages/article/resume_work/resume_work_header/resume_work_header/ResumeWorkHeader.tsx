import { Component } from 'react';
import { StyledResumeWorkHeader } from '../resume_work_header/ResumeWorkHeaderStyle';
import { Title } from '../title/Title';
import { SearchInput } from '../search_input/SearchInput'; 
import { RWFollowed } from '../followed/RWFollowed'

export class ResumeWorkHeader extends Component
{
    render()
    {
        return (
            <StyledResumeWorkHeader>
                <Title />
                <SearchInput />
                <RWFollowed />
            </StyledResumeWorkHeader>
        )
    }
}