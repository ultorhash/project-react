import { Component } from 'react';
import { StyledSearchInput } from '../search_input/SearchInputStyle';

export class SearchInput extends Component<{imgSrc: string}>
{
    render()
    {
        return (
            <StyledSearchInput>
                <input type="text" placeholder="Filter by title..."/>
                <img src={this.props.imgSrc} alt="" />
            </StyledSearchInput>
        )
    }
}