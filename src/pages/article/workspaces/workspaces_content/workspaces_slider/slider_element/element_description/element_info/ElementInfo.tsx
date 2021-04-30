import { Component } from 'react';
import { StyledElementInfo } from './ElementInfoStyle';

import corporate from '../../../../../../../../media/entities2.png';
import usersIcon from '../../../../../../../../media/people.svg';

export class ElementInfo extends Component
{
    render()
    {
        return (
            <StyledElementInfo>
                <img src={corporate} alt="" />
                <p>Contract</p>
                <span>•</span>
                <img src={usersIcon} alt="" />
                <p>users</p>
            </StyledElementInfo>
        )
    }
}