import { Component } from 'react';
import { StyledHeader } from './HeaderStyle';
import { Title } from '../title/Title';
import { Settings } from '../settings/Settings';

export class Header extends Component
{
    render()
    {
        return (
            <StyledHeader>
                <Title />
                <Settings />
            </StyledHeader>
        )
    }
}