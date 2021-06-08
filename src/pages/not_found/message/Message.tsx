import { Component } from 'react';
import { Link } from 'react-router-dom';
import { StyledMessage } from './MessageStyle';

export class Message extends Component
{
    render()
    {
        return (
            <StyledMessage>
                <p>Sus page, not found. Back to <Link to="/">Home</Link> page.</p>
            </StyledMessage>
        )
    }
}