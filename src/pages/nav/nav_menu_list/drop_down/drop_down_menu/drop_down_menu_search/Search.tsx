import { Component } from 'react';
import { StyledDropDownMenuSearch } from './SearchStyle';

export class DropDownMenuSearch extends Component
{
    render()
    {
        return (
            <StyledDropDownMenuSearch type="text" placeholder="Filter..."/>
        )
    }
}