import { Component } from 'react';
import { StyledResumeWorkElement } from '../resume_work_element/ResumeWorkElementStyle';
import { ResumeWorkElementDesc } from '../resume_work_element_desc/ResumeWorkElementDesc';

export class ResumeWorkElement extends Component<{title: string, content: string, author: string}>
{
    render()
    {
        return (
            <StyledResumeWorkElement className="resume-element">
                <a href="https://www.google.com">{this.props.title}</a>
                <p>{this.props.content}</p>
                <ResumeWorkElementDesc author={this.props.author}/>
            </StyledResumeWorkElement>
        )
    }
}