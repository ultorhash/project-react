import { Component } from 'react';
import { StyledOptionWithImg } from './OptionWithImgStyle';

export class OptionWithImg extends Component<{img: string, title?: string}>
{
    render()
    {
        return (
            <StyledOptionWithImg>
                <img src={this.props.img} alt="" />
                <p>{this.props.title}</p>
            </StyledOptionWithImg>
        )
    }
}