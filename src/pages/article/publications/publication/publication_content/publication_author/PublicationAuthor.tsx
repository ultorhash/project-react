import { Component } from 'react';
import { StyledPublicationAuthor } from '../publication_author/PublicationAuthorStyle';

export class PublicationAuthor extends Component<{postDate: string, imgAuthor: string, author: string}>
{
    render()
    {
        return (
            <StyledPublicationAuthor>
                <p>{this.props.postDate}</p>
                <img src={this.props.imgAuthor} alt="" />
                <span>{this.props.author}</span>
            </StyledPublicationAuthor>
        )
    }
}