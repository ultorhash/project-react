import { Component } from 'react';
import { StyledResumeWork } from '../resume_work/ResumeWorkStyle';
import { ResumeWorkHeader } from '../resume_work_header/resume_work_header/ResumeWorkHeader';
import { ResumeWorkElement } from '../resume_work_element/resume_work_element/ResumeWorkElement';

export class ResumeWork extends Component
{
    render()
    {
        return (
            <StyledResumeWork id="resume__work__elements">
                <ResumeWorkHeader />
                <ResumeWorkElement title="World Company SAS" className="resume__work__element"/>
                <ResumeWorkElement title="Contract #145" className="resume__work__element"/>
                <ResumeWorkElement title="Contract #145" className="resume__work__element"/>
            </StyledResumeWork>
        )
    }
}