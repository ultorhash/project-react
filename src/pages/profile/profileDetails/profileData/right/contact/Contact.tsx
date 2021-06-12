import { Component } from 'react';
import { StyledContact } from './ContactStyle';

export class Contact extends Component<{email: string, phone: string}>
{
    render()
    {
        return (
            <StyledContact>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
            </StyledContact>
        )
    }
}