import { Component } from 'react';
import { StyledNavSearchInput } from './NavSearchInputStyle';

export class NavSearchInput extends Component
{
    render()
    {
        return (
            <StyledNavSearchInput type="text" placeholder="Search Legalcluster"/>
        )
    }
}