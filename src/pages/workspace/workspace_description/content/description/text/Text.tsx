import { Component } from 'react';
import { StyledText } from './TextStyle';

export class Text extends Component
{
    render()
    {
        return (
            <StyledText>
                <p>Workspace purpose and a bit of context. This much needed description
                is here to remind people where they are, if they are new or have poor memory.</p>
            </StyledText>
        )
    }
}