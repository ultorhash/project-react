import { Component } from 'react';
import { StyledAsideOption } from './AsideOptionStyle';

export class AsideOption extends Component<{imgLeft: string, title: string}>
{
    render()
    {
        return (
            <StyledAsideOption href="https://www.google.pl" target="_blank">
                <img src={this.props.imgLeft} alt="" />
                <p>{this.props.title}</p>
            </StyledAsideOption>
        )
    }
}