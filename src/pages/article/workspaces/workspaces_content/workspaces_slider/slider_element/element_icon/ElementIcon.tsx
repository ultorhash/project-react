import { Component } from 'react';
import { StyledElementIcon } from './ElementIconStyle';

export class ElementIcon extends Component<{img: string}>
{
    render()
    {
        return (
            <StyledElementIcon>
                <img src={this.props.img} alt="" />
            </StyledElementIcon>
        )
    }
}