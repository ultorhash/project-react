import { Component } from 'react';
import { StyledResumeWorkHeader } from '../resume_work_header/ResumeWorkHeaderStyle';
import { Title } from '../title/Title';
import { SearchInput } from '../search_input/SearchInput'; 
import { Followed } from '../followed/Followed'; 

import search from '../../../../../media/search.png';
import signal from '../../../../../media/signal.png';
import arrow_down from '../../../../../media/arrow-down.png';

export class ResumeWorkHeader extends Component
{
    render()
    {
        return (
            <StyledResumeWorkHeader>
                <Title />
                <SearchInput imgSrc={search}/>
                <Followed imgLeft={signal} imgRight={arrow_down}/>
            </StyledResumeWorkHeader>
        )
    }
}