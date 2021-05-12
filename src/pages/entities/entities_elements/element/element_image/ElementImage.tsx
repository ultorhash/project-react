import { Component } from 'react';
import { StyledElementImage } from './ElementImageStyle';

export class ElementImage extends Component<{img: string}>
{
    render()
    {
        return (
            <StyledElementImage>
                <img src={this.props.img} alt="" />
            </StyledElementImage>
        )
    }
}