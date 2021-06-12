import { Component } from 'react';
import { StyledPhoto } from './PhotoStyle';

export class Photo extends Component<{img: string}>
{
    render()
    {
        return (
            <StyledPhoto>
                <img src={this.props.img} alt="" />
                <p>See profile</p>
            </StyledPhoto>
        )
    }
}