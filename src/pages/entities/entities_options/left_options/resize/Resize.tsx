import { Component } from 'react';
import { StyledResize } from './ResizeStyle';

import resize from '../../../../../media/resize.png';

export class Resize extends Component
{
    render()
    {
        return (
            <StyledResize>
                <img src={resize} alt="" />
            </StyledResize>
        )
    }
}