import { Component } from 'react';
import { StyledButton } from '../manage_buttons_style/ButtonStyle';

export class Save extends Component<{change: () => void, saveChanges: () => void}>
{
    render()
    {
        return (
            <StyledButton>
                <button onClick={() => { this.props.change(); this.props.saveChanges(); }}>Apply changes</button>
            </StyledButton>
        )
    }
}