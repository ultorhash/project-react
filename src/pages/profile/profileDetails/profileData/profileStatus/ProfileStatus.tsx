import { Component } from 'react';
import { StyledProfileStatus } from './ProfileStatusStyle';

import status from '../../../../../media/status.png';

export class ProfileStatus extends Component
{
    render()
    {
        return (
            <StyledProfileStatus>
                <img src={status} alt="" />
            </StyledProfileStatus>
        )
    }
}