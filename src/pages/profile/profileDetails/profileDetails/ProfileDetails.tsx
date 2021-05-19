import { Component } from 'react';
import { StyledProfileDetails } from './ProfileDetailsStyle';
import { Options } from '../options/options/Options';
import { ProfileData } from '../profileData/profileData/ProfileData';

export class ProfileDetails extends Component
{
    render()
    {
        return (
            <StyledProfileDetails>
                <Options />
                <ProfileData />
            </StyledProfileDetails>
        )
    }
}