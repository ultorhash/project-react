import { Component } from 'react';
import { StyledAsideOption } from './AsideOptionStyle';

export class AsideOption extends Component<{imgLeft: string, title: string}>
{
    render()
    {
        return (
            <StyledAsideOption>
                <img src={this.props.imgLeft} alt="" />
                <a href="https://google.com">{this.props.title}</a>
            </StyledAsideOption>
        )
    }
}