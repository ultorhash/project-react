import { Component } from 'react';
import { StyledWorkspacesSlider } from './WorkspacesSliderStyle';
import Slider from 'react-slick';
import { SliderElement } from '../slider_element/slider_element/SliderElement';

import ecosystem from '../../../../../../media/ecosystem.svg';
import entities from '../../../../../../media/entities.svg';
import people from '../../../../../../media/people.svg';
import publications from '../../../../../../media/publications.svg';
import network from '../../../../../../media/network.svg';

import corpo_photo from '../../../../../../media/corpo_photo.png';
import corpo_photo2 from '../../../../../../media/corpo_photo2.png';
import corpo_photo3 from '../../../../../../media/corpo_photo3.jpg';
import corpo_photo4 from '../../../../../../media/corpo_photo4.jpg';
import corpo_photo5 from '../../../../../../media/corpo_photo5.jpg';

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
                    <SliderElement title="Client contract" bgImg={corpo_photo} subtitle="Contract" users={150} img={ecosystem}/>
                    <SliderElement title="Supplier contract" bgImg={corpo_photo2} subtitle="Contract" users={25} img={entities}/>
                    <SliderElement title="Corporate" bgImg={corpo_photo3} subtitle="Corporate" users={25} img={people}/>
                    <SliderElement title="Group Norms" bgImg={corpo_photo4} subtitle="Norms" users={25} img={publications}/>
                    <SliderElement title="Real estate contracts" bgImg={corpo_photo5} subtitle="Contract" users={25} img={network}/>
                </Slider>
            </StyledWorkspacesSlider>
        )
    }
}