import { Component } from 'react';
import { StyledSliderElement } from './SliderElementStyle';
import { ElementPhoto } from '../element_photo/ElementPhoto';
import { ElementTitle } from '../element_title/ElementTitle';
import { ElementDescription } from '../element_description/element_description/ElementDesciption';
import { ElementIcon } from '../element_icon/ElementIcon';

import corpo_photo from '../../../../../../../media/corpo_photo.png';

export class SliderElement extends Component<{title: string, subtitle: string, users: number}>
{
    render()
    {
        return (
            <StyledSliderElement>
                <ElementPhoto imgSrc={corpo_photo}/>
                <ElementTitle title={this.props.title}/>
                <ElementIcon />
                <ElementDescription subtitle={this.props.subtitle} users={this.props.users}/>
            </StyledSliderElement>
        )
    }
}