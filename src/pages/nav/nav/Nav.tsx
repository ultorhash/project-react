import { Component } from 'react';
import { StyledNav } from './NavStyle';
import { NavMenuList } from '../nav_menu_list/NavMenuList';
import { NavSearch } from '../nav_search/NavSearch';
import { NavOptions } from '../nav_options/NavOptions';

export class Nav extends Component
{
    render()
    {
        return (
            <StyledNav>
                <NavMenuList />
                <NavSearch />
                <NavOptions />
            </StyledNav>
        )
    }
}