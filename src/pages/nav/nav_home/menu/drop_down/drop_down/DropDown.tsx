import { Component } from 'react';
import { StyledDropDown } from './DropDownStyle';
import { DropDownCorpo } from '../drop_down_corpo/DropDownCorpo';
import { DropDownMenuSearch } from '../drop_down_search/DropDownSearch';
import { DropDownOptions } from '../drop_down_options/drop_down_options/DropDownOptions';
import { DropDownAccount } from '../drop_down_account/drop_down_account/DropDownAccount';
import { DropDownLogout } from '../drop_down_logout/DropDownLogout';

import logout from '../../../../../../media/logout.svg';

export class DropDownMenu extends Component
{
    render()
    {
        return (
            <StyledDropDown>
                <DropDownCorpo />
                <DropDownMenuSearch />
                <DropDownOptions />
                <DropDownAccount />
                <DropDownLogout imgLeft={logout}/>
            </StyledDropDown>
        )
    }
}