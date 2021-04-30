import { Component } from 'react';
import { StyledElementIcon } from './ElementIconStyle';

import entities from '../../../../../../../media/entities2.svg';

export class ElementIcon extends Component
{
    render()
    {
        return (
            <StyledElementIcon>
                <img src={entities} alt="" />
            </StyledElementIcon>
        )
    }
}