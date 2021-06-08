import { Component } from 'react';
import { StyledResumeWorkElement } from '../resume_work_element/ResumeWorkElementStyle';
import { ResumeWorkElementDesc } from '../resume_work_element_desc/ResumeWorkElementDesc';

export class ResumeWorkElement extends Component<{title: string}>
{
    render()
    {
        return (
            <StyledResumeWorkElement className="resume-element">
                <a href="https://www.google.com">{this.props.title}</a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et officia
                quo veritatis sint dolores corporis odit blanditiis fugiat. Necessitatibus.</p>
                <ResumeWorkElementDesc />
            </StyledResumeWorkElement>
        )
    }
}