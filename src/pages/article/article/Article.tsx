import { Component } from 'react';
import { StyledArticle } from './ArticleStyle';
import { Publications } from '../publications/publications/Publications';
import { ResumeWork } from '../resume_work/resume_work/ResumeWork';

export class Article extends Component
{
    render()
    {
        return(
            <StyledArticle>
                <Publications />
                <ResumeWork />
            </StyledArticle>
        )
    }
}