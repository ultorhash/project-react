import { Component } from 'react';
import { StyledPageLogo } from './PageLogoStyle';
import logo from '../../../../media/entities2.png';

export class PageLogo extends Component
{
    render()
    {
        return (
            <StyledPageLogo src={logo}/>
        )
    }
}