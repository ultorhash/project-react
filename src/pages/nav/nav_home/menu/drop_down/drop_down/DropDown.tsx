import { Component } from 'react';
import { StyledDropDown } from './DropDownStyle';
import { DropDownMenuSearch } from '../drop_down_search/DropDownSearch';
import { DropDownOptions } from '../drop_down_options/drop_down_options/DropDownOptions';
import { DropDownAccount } from '../drop_down_account/DropDownAccount';
import { DropDownLogout } from '../drop_down_logout/DropDownLogout';
import logout from '../../../../../../media/logout.png';

export class DropDownMenu extends Component
{
    render()
    {
        return (
            <StyledDropDown>
                <DropDownMenuSearch />
                <DropDownOptions />
                <DropDownAccount />
                <DropDownLogout imgLeft={logout}/>
            </StyledDropDown>
        )
    }
}