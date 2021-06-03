import { Component } from 'react';
import { StyledFollowed } from './FollowedStyle';

import signal from '../../../../../media/signal.png';
import arrow_down from '../../../../../media/arrow-down.png';

export class Followed extends Component
{
    render()
    {
        return (
            <StyledFollowed>
                <img src={signal} alt="" />
                <p>Followed</p>
                <button><img src={arrow_down} alt="" /></button>
            </StyledFollowed>
        )
    }
}