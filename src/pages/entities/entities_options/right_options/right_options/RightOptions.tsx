import { Component } from 'react';
import { StyledRightOptions } from './RightOptionsStyle';
import { Search } from '../search/Search';
import { ROFollowed } from '../followed/ROFollowed';

export class RightOptions extends Component
{
    render()
    {
        return (
            <StyledRightOptions>
                <Search />
                <ROFollowed />
            </StyledRightOptions>
        )
    }
}