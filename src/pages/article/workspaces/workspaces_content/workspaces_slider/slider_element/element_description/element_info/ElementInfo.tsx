import { Component } from 'react';
import { StyledElementInfo } from './ElementInfoStyle';

import corporate from '../../../../../../../../media/entities2.png';
import usersIcon from '../../../../../../../../media/people.svg';

export class ElementInfo extends Component<{text: string, users: number}>
{
    render()
    {
        return (
            <StyledElementInfo>
                <img src={corporate} alt="" />
                <p>{this.props.text}</p>
                <span>•</span>
                <img src={usersIcon} alt="" />
                <p>{this.props.users} users</p>
            </StyledElementInfo>
        )
    }
}