import { Component } from 'react';
import { StyledInputData } from './InputDataStyle';

export class InputData extends Component<{placeholder: string}>
{
    render()
    {
        return (
            <StyledInputData type="text" placeholder={this.props.placeholder} className="user-data-input"/>
        )
    }
}