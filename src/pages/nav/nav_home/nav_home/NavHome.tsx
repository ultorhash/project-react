import { Component } from 'react';
import { StyledNavMenuList } from './NavHomeStyle';
import { PageLogo } from '../page_logo/PageLogo';
import { DropDownHome } from '../menu/menu/Menu';

export class NavMenuList extends Component
{
    render()
    {
        return (
            <StyledNavMenuList>
                <PageLogo />
                <DropDownHome />
            </StyledNavMenuList>
        )
    }
}