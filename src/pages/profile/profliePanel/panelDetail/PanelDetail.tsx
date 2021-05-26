import { Component } from 'react';
import { StyledPanelDetail } from './PanelDetailStyle';

export class PanelDetail extends Component<{title: string, text: string}>
{
    render()
    {
        return (
            <StyledPanelDetail>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
            </StyledPanelDetail>
        )
    }
}