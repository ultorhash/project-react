import { Component } from 'react';
import { StyledAsideProfilePhoto } from './AsideProfilePhotoStyle';
import profilePhoto from '../../../../../media/profile-photo.png';

export class AsideProfilePhoto extends Component
{
    render()
    {
        return (
            <StyledAsideProfilePhoto src={profilePhoto} />
        )
    }
}