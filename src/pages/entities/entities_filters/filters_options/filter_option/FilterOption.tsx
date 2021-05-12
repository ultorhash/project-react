import { Component } from 'react';
import { StyledFilterOption } from './FilterOptionStyle';

export class FilterOption extends Component<{img: string, title: string, imgLeftSide: boolean}>
{
    render()
    {
        if (this.props.imgLeftSide)
        {
            return (
                <StyledFilterOption>
                    <img src={this.props.img} alt="" />
                    <p>{this.props.title}</p>
                </StyledFilterOption>
            )
        }
        else
        {
            return (
                <StyledFilterOption>
                    <p>{this.props.title}</p>
                    <img src={this.props.img} alt="" />
                </StyledFilterOption>
            )
        }
    }
}