import { Component } from 'react';
import { StyledAsideProfileOption } from './AsideProfileOptionStyle';

export class AsideProfileOption extends Component<{imgLeft: string, imgRight: string, title: string}>
{
    render()
    {
        return (
            <StyledAsideProfileOption>
                <img src={this.props.imgLeft} alt="" />
                <p>{this.props.title}</p>
                <img src={this.props.imgRight} alt="" />
            </StyledAsideProfileOption>
        )
    }
}