import { Component } from 'react';
import { StyledResumeWorkElementDesc } from '../resume_work_element_desc/ResumeWorkElementDescStyle';

import icon from '../../../../../media/publications.svg';
import g from '../../../../../media/people.svg';

export class ResumeWorkElementDesc extends Component
{
    render()
    {
        return (
            <StyledResumeWorkElementDesc>
                <img src={icon} alt="" /><p>Subsid. corp</p>
                <b>•</b>
                <img src={g} alt="" /><p>Corporate</p>
                <b>•</b>
                <span>Updated 3 days ago by John Doe</span>
            </StyledResumeWorkElementDesc>
        )
    }
}