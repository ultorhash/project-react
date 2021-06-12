import { Component } from 'react';
import { StyledButton } from '../manage_buttons_style/ButtonStyle';

export class Exit extends Component<{change: () => void}>
{
    render()
    {
        return (
            <StyledButton>
                <button onClick={this.props.change}>Back</button>
            </StyledButton>
        )
    }
}