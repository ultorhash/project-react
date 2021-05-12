import { Component } from 'react';
import { StyledIcon } from './IconStyle';

import icon from '../../../../../media/entities2.svg';

export class Icon extends Component
{
    render()
    {
        return (
            <StyledIcon>
                <img src={icon} alt="" />
            </StyledIcon>
        )
    }
}