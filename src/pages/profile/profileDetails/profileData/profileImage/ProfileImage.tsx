import { Component } from 'react';
import { StyledProfileImage } from './ProfileImageStyle';
import { ProfileStatus } from '../profileStatus/ProfileStatus';

import photo from '../../../../../media/profile-photo.png';

export class ProfileImage extends Component
{
    render()
    {
        return (
            <StyledProfileImage>
                <img src={photo} alt="" />
                <ProfileStatus />
                <p><a href="https://www.google.com">See profile</a></p>    
            </StyledProfileImage>
        )
    }
}