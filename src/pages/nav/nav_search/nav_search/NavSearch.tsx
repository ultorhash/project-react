import { Component } from 'react';
import { StyledNavSearch } from './NavSearchStyle';
import { NavSearchInput } from '../nav_search_input/NavSearchInput';
import { NavSearchButton } from '../nav_search_button/NavSearchButton';

export class NavSearch extends Component
{
    render()
    {
        return (
            <StyledNavSearch>
                <NavSearchInput />
                <NavSearchButton />
            </StyledNavSearch>
        )
    }
}