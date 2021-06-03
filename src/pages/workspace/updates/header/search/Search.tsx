import { Component } from 'react';
import { StyledSearch } from './SearchStyle';

export class Search extends Component<{imgSrc: string}>
{
    render()
    {
        return (
            <StyledSearch>
                <input type="text" placeholder="Filter by title..."/>
                <button><img src={this.props.imgSrc} alt="" /></button>
            </StyledSearch>
        )
    }
}