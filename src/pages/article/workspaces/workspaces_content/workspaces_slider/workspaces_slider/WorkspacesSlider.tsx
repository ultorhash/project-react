import { Component } from 'react';
import { StyledWorkspacesSlider } from './WorkspacesSliderStyle';
import Slider from 'react-slick';
import { SliderElement } from '../slider_element/slider_element/SliderElement';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export class WorkspacesSlider extends Component
{
    render()
    {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false
        }

        return (
            <StyledWorkspacesSlider>
                <Slider {...settings}>
                    <SliderElement title="Client contract" subtitle="Contract" users={150} />
                    <SliderElement title="Supplier contract" subtitle="Contract" users={25} />
                    <SliderElement title="Corporate" subtitle="Corporate" users={25} />
                    <SliderElement title="Group" subtitle="Norms" users={25} />
                    <SliderElement title="Client contract" subtitle="Contract" users={25} />
                </Slider>
            </StyledWorkspacesSlider>
        )
    }
}