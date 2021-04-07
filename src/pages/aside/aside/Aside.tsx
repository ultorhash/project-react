import { Component } from 'react';
import { StyledAside } from './AsideStyle';
import { AsideProfile } from '../aside_profile/aside_profile/AsideProfile';
import { AsideOptions } from '../aside_options/aside_options/AsideOptions';

export class Aside extends Component
{
    render()
    {
        return (
            <StyledAside>
                <AsideProfile />
                <AsideOptions />
            </StyledAside>
        )
    }
}