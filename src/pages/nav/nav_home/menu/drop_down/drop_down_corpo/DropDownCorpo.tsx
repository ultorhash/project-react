import { Component } from 'react';
import { StyledDropDownCorpo } from './DropDownCorpoStyle';

import entities2 from '../../../../../../media/entities2.svg';
import arrow from "../../../../../../media/arrow-down.svg";

export class DropDownCorpo extends Component
{
    render()
    {
        return (
            <StyledDropDownCorpo>
                <img src={entities2} alt="" />
                <p>Corporate</p>
                <img src={arrow} alt="" />
            </StyledDropDownCorpo>
        )
    }
}