import { Component } from 'react';
import { StyledRWFollowed } from './RWFollowedStyle';

import signal from '../../../../../media/signal.png';
import arrow_down from '../../../../../media/arrow-down.png';

export class RWFollowed extends Component
{
    render()
    {
        return (
            <StyledRWFollowed>
                <img src={signal} alt="" />
                <p>Followed</p>
                <button><img src={arrow_down} alt="" /></button>
            </StyledRWFollowed>
        )
    }
}