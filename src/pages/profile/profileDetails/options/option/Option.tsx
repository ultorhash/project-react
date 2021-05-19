import { Component } from 'react';
import { StyledOption } from './OptionStyle';

export class Option extends Component<{img: string, title?: string}>
{
    render()
    {
        return (
            <StyledOption>
                <img src={this.props.img} alt="" />
                <p>{this.props.title}</p>
            </StyledOption>
        )
    }
}