import { Component } from 'react';
import { StyledElementTitle } from './ElementTitleStyle';
import { Link } from 'react-router-dom';

export class ElementTitle extends Component<{title: string}>
{
    render()
    {
        return (
            <StyledElementTitle>
                <Link to="/workspace" style={{textDecoration: "none"}}><p>{this.props.title}</p></Link>
            </StyledElementTitle>
        )
    }
}