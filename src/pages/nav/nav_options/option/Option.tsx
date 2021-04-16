import { Component } from 'react';
import { StyledOption } from './OptionStyle';

export class Option extends Component<{imgOption: string, hasBackground: boolean}>
{
    render()
    {
        if (!this.props.hasBackground)
        {
            return (
                <StyledOption href="https://google.com" style={{backgroundColor: "transparent"}}>
                    <img src={this.props.imgOption} alt="" />
                </StyledOption>
            )
        }
        else
        {
            return (
                <StyledOption href="https://google.com">
                    <img src={this.props.imgOption} alt="" />
                    <span>5</span>
                </StyledOption>
            )
        }
    }
}