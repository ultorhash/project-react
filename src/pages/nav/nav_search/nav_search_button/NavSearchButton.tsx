import { Component } from 'react';
import { StyledNavSearchButton } from './NavSearchButtonStyle';
import magnifier from '../../../../media/search.png';

export class NavSearchButton extends Component
{
    render()
    {
        return (
            <StyledNavSearchButton>
                <img src={magnifier} alt="search.png"/>
            </StyledNavSearchButton>
        )
    }
}