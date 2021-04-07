import { Component } from 'react';
import { StyledDropDownMenu } from './DropDownStyle';
import { DropDownMenuSearch } from '../drop_down_search/DropDownSearch';
import { DropDownOptions } from '../drop_down_options/drop_down_options/DropDownOptions';

export class DropDownMenu extends Component
{
    render()
    {
        return (
            <StyledDropDownMenu>
                <DropDownMenuSearch />
                <DropDownOptions />
            </StyledDropDownMenu>
        )
    }
}