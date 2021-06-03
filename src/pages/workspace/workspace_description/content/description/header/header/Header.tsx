import { Component } from 'react';
import { StyledHeader } from './HeaderStyle';
import { Title } from '../title/Title';
import { Settings } from '../settings/Settings';

export class Header extends Component<{title: string}>
{
    render()
    {
        return (
            <StyledHeader>
                <Title title={this.props.title}/>
                <Settings />
            </StyledHeader>
        )
    }
}