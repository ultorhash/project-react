import { Component } from 'react';
import { StyledProfile } from './ProfileStyle';
import { ProfileDetails } from '../profileDetails/profileDetails/ProfileDetails';

export class Profile extends Component
{
    render()
    {
        return (
            <StyledProfile>
                <ProfileDetails />
            </StyledProfile>
        )
    }
}