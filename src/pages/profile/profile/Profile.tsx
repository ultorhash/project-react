import { Component } from 'react';
import { StyledProfile } from './ProfileStyle';
import { ProfileDetails } from '../profileDetails/profileDetails/ProfileDetails';
import { ProfileTiles } from '../profileTiles/profileTiles/ProfileTiles';
import { ProfilePanel } from '../profliePanel/profilePanel/ProfilePanel';
import { ProfileTable } from '../profileTable/profileTable/ProfileTable';
import { SeeMore } from '../profileTable/seeMore/SeeMore';
import { ProfileFees } from '../profileFees/profileFees/ProfileFees';

export class Profile extends Component
{
    render()
    {
        return (
            <StyledProfile>
                <ProfileDetails />
                <ProfileTiles />
                <ProfilePanel />
                <ProfileTable header="Proposals" isFirm={true} />
                <SeeMore isLeft={false} title="proposals" color="#66b3cc"/>
                <ProfileTable header="Internal reviews" isFirm={false}/>
                <SeeMore isLeft={true} title="Reviews" color="#404040"/>
                <ProfileFees />
            </StyledProfile>
        )
    }
}