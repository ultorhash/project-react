import { Component } from 'react';
import { StyledGridData } from './GridDataStyle';

export class GridData extends Component<{text: string}>
{
    render()
    {
        return (
            <StyledGridData>
                <p>{this.props.text}</p>
            </StyledGridData>
        )
    }
}