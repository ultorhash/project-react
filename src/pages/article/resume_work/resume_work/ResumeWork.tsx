import { Component } from 'react';
import { StyledResumeWork } from '../resume_work/ResumeWorkStyle';
import { ResumeWorkHeader } from '../resume_work_header/resume_work_header/ResumeWorkHeader';

export class ResumeWork extends Component
{
    render()
    {
        return (
            <StyledResumeWork>
                <ResumeWorkHeader />
            </StyledResumeWork>
        )
    }
}