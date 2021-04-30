import { Component } from 'react';
import { StyledElementPhoto } from './ElementPhotoStyle';

export class ElementPhoto extends Component<{imgSrc: string}>
{
    render()
    {
        return (
            <StyledElementPhoto src={this.props.imgSrc}/>
        )
    }
}