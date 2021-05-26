import { Component } from 'react';
import { StyledTitle } from './TitleStyle';

export class Title extends Component<{title: string, img?: string}>
{
    render()
    {
        return (
            <StyledTitle>
                <p>{this.props.title}</p>
                {this.props.img && (
                    <button><img src={this.props.img} alt="" /></button>
                )}
            </StyledTitle>
        )
    }
}