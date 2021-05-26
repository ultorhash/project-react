import { Component } from 'react';
import { StyledProfileFees } from './ProfileFeesStyle';
import { FeesGrid } from '../feesGrid/FeesGrid';

export class ProfileFees extends Component
{
    render()
    {
        return (
            <StyledProfileFees>
                <h2>Amount of fees</h2>
                <FeesGrid />
            </StyledProfileFees>
        )
    }
}