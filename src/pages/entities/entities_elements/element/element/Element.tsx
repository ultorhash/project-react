import { Component } from 'react';
import { StyledElement } from './ElementStyle';
import { ElementImage } from '../element_image/ElementImage';
import { ElementContent } from '../element_content/ElementContent';

export class Element extends Component<{img: string, title: string, content: string}>
{
    render()
    {
        return (
            <StyledElement>
                <ElementImage img={this.props.img}/>
                <ElementContent title={this.props.title} content={this.props.content}/>
            </StyledElement>
        )
    }
}