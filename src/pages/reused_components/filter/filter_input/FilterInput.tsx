import { Component } from 'react';
import { StyledFilterInput } from './FilterInputStyle';

export class FilterInput extends Component<{hint: string}>
{
    render()
    {
        return (
            <StyledFilterInput type="text" placeholder={this.props.hint}/>
        )
    }
}