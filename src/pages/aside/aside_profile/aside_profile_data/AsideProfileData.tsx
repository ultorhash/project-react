import { Component } from 'react';
import { StyledAsideProfileData } from '../aside_profile_data/AsideProfileDataStyle';
import { AsideProfilePhoto } from './aside_profile_photo/AsideProfilePhoto';
import { AsideProfileDesc } from './aside_profile_desc/AsideProfileDesc';

export class AsideProfileData extends Component
{
    render()
    {
        return (
            <StyledAsideProfileData>
                <AsideProfilePhoto />
                <AsideProfileDesc />
            </StyledAsideProfileData>
        )
    }
}