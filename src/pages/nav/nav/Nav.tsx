import { Component } from 'react';
import { StyledNav } from './NavStyle';
import { NavMenuList } from '../nav_home/nav_home/NavHome';
import { NavSearch } from '../nav_search/nav_search/NavSearch';
import { NavOptions } from '../nav_options/nav_options/NavOptions';

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