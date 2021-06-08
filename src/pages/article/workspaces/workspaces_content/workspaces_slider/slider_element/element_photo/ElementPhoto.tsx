import { Component } from 'react';
import { StyledElementPhoto } from './ElementPhotoStyle';

export class ElementPhoto extends Component<{img: string}>
{
    render()
    {
        return (
            <StyledElementPhoto src={this.props.img}/>
        )
    }
}