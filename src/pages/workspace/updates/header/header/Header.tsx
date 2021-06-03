import { Component } from 'react';
import { StyledHeader } from './HeaderStyle';
import { Title } from '../title/Title';
import { Search } from '../search/Search';
import { Followed } from '../followed/Followed';

import search from '../../../../../media/search.svg';

export class Header extends Component
{
    render()
    {
        return (
            <StyledHeader>
                <Title />
                <Search imgSrc={search}/>
                <Followed />
            </StyledHeader>
        )
    }
}