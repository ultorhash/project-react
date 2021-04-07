import { Component } from 'react';
import { StyledAsideProfile } from './AsideProfileStyle';
import { AsideProfileData } from '../aside_profile_data/aside_profile_data/AsideProfileData'; 
import { AsideProfileOptions } from '../aside_profile_options/aside_profile_options/AsideProfileOptions';

export class AsideProfile extends Component
{
    render()
    {
        return (
            <StyledAsideProfile>
                <AsideProfileData />
                <AsideProfileOptions />
            </StyledAsideProfile>
        )
    }
}