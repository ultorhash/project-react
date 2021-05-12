import { Component } from 'react';
import { StyledShowOption } from './ShowOptionStyle';

export class ShowOption extends Component<{show: () => void, text: string}>
{
    render()
    {
        return (
            <StyledShowOption>
                <button onClick={this.props.show}><p>{this.props.text}</p></button>
            </StyledShowOption>
        )
    }
}