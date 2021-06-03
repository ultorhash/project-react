import { Component } from 'react';
import { StyledStruct } from './StructStyle';

export class Struct extends Component<{img: string, title: string, bolded: string, text: string}>
{
    render()
    {
        return (
            <StyledStruct>
                <img src={this.props.img} alt="" />
                <img src={this.props.img} alt="" />
                <h2>{this.props.title} <span>{this.props.bolded}</span></h2>
                <p>{this.props.text}</p>
            </StyledStruct>
        )
    }
}