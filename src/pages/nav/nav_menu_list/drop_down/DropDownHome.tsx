import { Component } from 'react';
import { StyledDropDownHome } from './DropDownHomeStyle';
import house from '../../../../media/house2.png';
import arrow from '../../../../media/arrow-down.png';

export class DropDownHome extends Component
{
    render()
    {
        return (
            <StyledDropDownHome>
                <img src={house} alt="house2.png"/>
                Home
                <button><img src={arrow} alt="arrow_down.png" /></button>
            </StyledDropDownHome>
        )
    }
}