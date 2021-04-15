import { Component } from 'react';
import { StyledPageLogo } from './PageLogoStyle';
import logo from '../../../../media/logo.png';

export class PageLogo extends Component
{
    render()
    {
        return (
            <StyledPageLogo src={logo}/>
        )
    }
}