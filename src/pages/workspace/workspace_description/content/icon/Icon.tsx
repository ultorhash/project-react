import { Component } from 'react';
import { StyledIcon } from './IconStyle';

export class Icon extends Component<{img: string}>
{
    render()
    {
        return (
            <StyledIcon>
                <img src={this.props.img} alt="" />
            </StyledIcon>
        )
    }
}