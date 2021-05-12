import { Component } from 'react';
import { StyledROFollowed } from './ROFollowedStyle';

import signal from '../../../../../media/signal.png';
import arrow_down from '../../../../../media/arrow-down.png';

export class ROFollowed extends Component
{
    render()
    {
        return (
            <StyledROFollowed>
                <img src={signal} alt="" />
                <p>Followed</p>
                <button><img src={arrow_down} alt="" /></button>
            </StyledROFollowed>
        )
    }
}