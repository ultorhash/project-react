import { Component } from 'react';
import { StyledInputRow } from './InputRowStyle';

export class InputRow extends Component<{placeholder: string}>
{
    render()
    {
        return (
            <StyledInputRow type="text" className="user-row-input" placeholder={this.props.placeholder}/>
        )
    }
}