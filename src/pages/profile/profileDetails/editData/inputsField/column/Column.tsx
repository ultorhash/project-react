import { Component } from 'react';
import { StyledColumn } from './ColumnStyle';
import { InputData } from '../input/InputData'

export class Column extends Component<{inputs: string[]}>
{
    render()
    {
        return (
            <StyledColumn>
                {this.props.inputs.map(el => {
                    return ( <InputData placeholder={el}/> )
                })}
            </StyledColumn>
        )
    }
}