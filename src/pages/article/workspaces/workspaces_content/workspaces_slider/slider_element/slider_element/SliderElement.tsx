import { Component } from 'react';
import { StyledSliderElement } from './SliderElementStyle';
import { ElementPhoto } from '../element_photo/ElementPhoto';
import { ElementTitle } from '../element_title/ElementTitle';
import { ElementDescription } from '../element_description/element_description/ElementDesciption';
import { ElementIcon } from '../element_icon/ElementIcon';

export class SliderElement extends Component<{title: string, bgImg: string, subtitle: string, users: number, img: string}>
{
    render()
    {
        return (
            <StyledSliderElement>
                <ElementPhoto img={this.props.bgImg}/>
                <ElementTitle title={this.props.title} img={this.props.img}/>
                <ElementIcon img={this.props.img}/>
                <ElementDescription subtitle={this.props.subtitle} users={this.props.users}/>
            </StyledSliderElement>
        )
    }
}