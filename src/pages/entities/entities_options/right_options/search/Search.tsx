import { Component } from 'react';
import { StyledSearch } from './SearchStyle';

import search from '../../../../../media/search.svg';

export class Search extends Component
{
    render()
    {
        return (
            <StyledSearch>
                <input type="text" placeholder="Search ..."/>
                <button><img src={search} alt="" /></button>
            </StyledSearch>
        )
    }
}