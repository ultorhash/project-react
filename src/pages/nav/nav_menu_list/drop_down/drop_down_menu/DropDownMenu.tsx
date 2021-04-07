import { Component } from 'react';
import { StyledDropDownMenu } from './DropDwonMenuStyle';
import { DropDownMenuSearch } from './drop_down_menu_search/Search';

export class DropDownMenu extends Component
{
    render()
    {
        return (
            <StyledDropDownMenu>
                <DropDownMenuSearch />
            </StyledDropDownMenu>
        )
    }
}