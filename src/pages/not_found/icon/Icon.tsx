import { Component } from 'react';
import { StyledIcon } from '../icon/IconStyle';

import astronaut from '../../../media/astronaut.png';

export class Icon extends Component
{
    render()
    {
        return (
            <StyledIcon>
                <img src={astronaut} alt="" />
            </StyledIcon>
        )
    }
}