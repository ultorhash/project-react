import { Component } from 'react';
import { StyledNavMenuList } from './NavMenuListStyle';
import { PageLogo } from './page_logo/PageLogo';
import { DropDownHome } from './drop_down/DropDownHome';

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