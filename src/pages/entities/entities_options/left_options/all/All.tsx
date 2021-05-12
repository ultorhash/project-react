import { Component } from 'react';
import { StyledAll } from './AllStyle';

import circle from '../../../../../media/circle_blue.png';
import arrow from '../../../../../media/arrow-down.svg';

export class All extends Component
{
    render()
    {
        return (
            <StyledAll>
                <img src={circle} alt="" />
                <span>All</span>
                <img src={arrow} alt="" />
            </StyledAll>
        )
    }
} 