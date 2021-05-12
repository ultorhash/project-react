import { Component } from 'react';
import { StyledPhoto } from './StyledPhoto';

export class Photo extends Component<{img: string}>
{
    render()
    {
        return (
            <StyledPhoto>
                <img src={this.props.img} alt="" />
            </StyledPhoto>
        )
    }
}