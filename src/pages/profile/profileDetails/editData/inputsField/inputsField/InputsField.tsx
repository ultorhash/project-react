import { Component } from 'react';
import { StyledInputsField } from './InputsFieldStyle';
import { Column } from '../column/Column';

export class InputsField extends Component
{
    render()
    {
        return (
            <StyledInputsField>
                <Column inputs={["name", "username"]}/>
                <Column inputs={["city", "position"]}/>
                <Column inputs={["email", "phone number"]}/>
            </StyledInputsField>
        )
    }
}