import { Component } from 'react';
import { StyledProfileData } from './ProfileDataStyle';
import { ProfileImage } from '../profileImage/ProfileImage';
import { ProfileInfo } from '../profileInfo/ProfileInfo';
import { ProfileContact } from '../profileContact/ProfileContact';

export class ProfileData extends Component
{
    render()
    {
        return (
            <StyledProfileData>
                <ProfileImage />
                <ProfileInfo name="Humberta Swift" boss="Clifford Chance" city="New-york" employeeType="Partner"/>
                <ProfileContact email="humbertaswift@gmail.com" phone="33 (0)6 12 34 56 78"/>
            </StyledProfileData>
        )
    }
}